import Moment from 'moment'

const Query = {
  // Dashboards
  dashboard: (parent, args, {prisma}, info) => {
    return prisma.query.dashboard(args.data, info)
  },
  monthBar: async (parent, { where }, {prisma}, info) => {

    const { monthYear, levels, types, entities } = where
    // default
    let customInfo = `{ days { value items { type } } }`

    // check shit
    if(levels.length || types.length || entities.length) {
      customInfo = `
      { 
        days { 
          value 
          items(where: {${levels.length ? `level_in:[${levels}]`:''},${types.length ? `type_in:[${types}]`:''},${entities.length ? `trigger:{name_in:${JSON.stringify(entities)}}`:''}}) { 
            type 
          } 
        } 
      }`
    }
    let month = await prisma.query.month({where: {monthYear: monthYear}}, customInfo)
 

    let series = { 
      alerts: [], 
      traps: [], 
      syslogs: [], 
      winEvents: [], 
      vmwEvents: [], 
    }


    for(let [index, day] of month.days.entries()) {
      
      for(let item of day.items) {
          switch(item.type.toString()) {
            case 'ALERT':
              if(series.alerts.length) {
                series.alerts[index]++
              } else {
                // init
                for(let i = 0; i < month.days.length; i++) {
                  series.alerts.push(0)
                }
                series.alerts[index]++
              }
              break
            case 'TRAP':
              if(series.traps.length) {
                series.traps[index]++
              } else {
                for(let i = 0; i < month.days.length; i++) {
                  series.traps.push(0)
                }
                series.traps[index]++
              }
              break
            case 'SYSLOG':
              if(series.syslogs.length) {
                series.syslogs[index]++
              } else {
                for(let i = 0; i < month.days.length; i++) {
                  series.syslogs.push(0)
                }
                series.syslogs[index]++
              }
              break
            case 'WINDOWSEVENT':
              if(series.winEvents.length) {
                series.winEvents[index]++
              } else {
                for(let i = 0; i < month.days.length; i++) {
                  series.winEvents.push(0)
                }
                series.winEvents[index]++
              }
              break
            case 'VMWAREEVENT':
              if(series.vmwEvents.length) {
                series.vmwEvents[index]++
              } else {
                for(let i = 0; i < month.days.length; i++) {
                  series.vmwEvents.push(0)
                }
                series.vmwEvents[index]++
              }
              break
          }
        }
      }
    
    

    // for(let day of month.days) {
    //   let dayAlerts = 0
    //   let dayTraps = 0
    //   let daySyslogs = 0
    //   let dayWinEvents = 0
    //   let dayVmwEvents = 0
    //   for (let item of day.items) {
        // switch(item.type.toString()) {
        //   case 'ALERT':
        //     dayAlerts++
        //     break
        //   case 'TRAP':
        //     dayTraps++
        //     break
        //   case 'SYSLOG':
        //     daySyslogs++
        //     break
        //   case 'WINDOWSEVENT':
        //     dayWinEvents++
        //     break
        //   case 'VMWAREEVENT':
        //     dayVmwEvents++
        //     break
        // }
       
    //   }
    //   alerts.push(dayAlerts)
    //   traps.push(dayTraps)
    //   syslogs.push(daySyslogs)
    //   winEvents.push(dayWinEvents)
    //   vmwEvents.push(dayVmwEvents)
    //   }

    let xAxis = [
      '1st',
      '2nd',
      '3rd',
      '4th',
      '5th',
      '6th',
      '7th',
      '8th',
      '9th',
      '10th',
      '11th',
      '12th',
      '13th',
      '14th',
      '15th',
      '16th',
      '17th',
      '18th',
      '19th',
      '20th',
      '21st',
      '22nd',
      '23rd',
      '24th',
      '25th',
      '26th',
      '27th',
      '28th',
      '29th',
      '30th',
      '31st'
    ]

    xAxis = xAxis.slice(0, month.days.length)
    
    return {
      xAxis,
      series
    }

  }, 
  weekDensity: async (parent, {where}, {prisma}, info) => {

    const { weekYear, levels, types, entities } = where   

    let customInfo = `{ days { value hours { value items { type } } } }`

    // check shit
    if(levels.length || types.length || entities.length) {
      customInfo = `
      { 
        days { 
          value 
          hours {
            value
            items(where: {${levels.length ? `level_in:[${levels}]`:''},${types.length ? `type_in:[${types}]`:''},${entities.length ? `trigger:{name_in:${JSON.stringify(entities)}}`:''}}) { 
              type 
            } 
          }
          
        } 
      }`
    }
    
    let itemDensity = []
    let max = 0
    let week = await prisma.query.week({where: {weekYear: weekYear}}, customInfo)
    for (let [index, day] of week.days.entries()) {
      for (let hour of day.hours) {
        let item = []
        item.push(6 - index)
        item.push(hour.value)
        if (hour.items.length > max) {
          max = hour.items.length
        }
        item.push(hour.items.length || null)
        itemDensity.push(item)
      }
    }
    return { itemDensity, max }
  },
  weekSeverity: async (parent, {where}, {prisma}, info) => {

    const { weekYear, levels, types, entities } = where   

    let customInfo = `{ days { value items { type level } } }`
    
    // check shit
    if(levels.length || types.length || entities.length) {
      customInfo = `{ 
        days { 
          value
          items(where: {${levels.length ? `level_in:[${levels}]`:''},${types.length ? `type_in:[${types}]`:''},${entities.length ? `trigger:{name_in:${JSON.stringify(entities)}}`:''}}) { 
              type 
              level
            } 
          }
        }
        `
    }

    let week = await prisma.query.week({where: {weekYear: weekYear}}, customInfo)
   
    let items = {
      critical: [],
      informational: [],
      notice: [],
      serious: [],
      warning: [],
      emergency: [],
      alert: [],
      error: [],
      unknown: [],
    }

    for(let [index, day] of week.days.entries()) {
      for(let item of day.items) {
        if(items[item.level.toLowerCase()].length) {
          items[item.level.toLowerCase()][index]++
        } else {
          items[item.level.toLowerCase()] = [0,0,0,0,0,0,0]
          items[item.level.toLowerCase()][index]++
        }
      }
    }

    let series = []

    // Alerts
    if (items.critical) {
        series.push({ name: 'Critical', stack: 'Logs and Events', type: 'bar', data: items.critical})
    }
    if (items.informational) {
        series.push({ name: 'Informational', stack: 'Logs and Events', type: 'bar', data: items.informational})
    }
    if (items.notice) {
        series.push({ name: 'Notice', stack: 'Logs and Events', type: 'bar', data: items.notice})
    }
    if (items.serious) {
        series.push({ name: 'Serious', stack: 'Logs and Events', type: 'bar', data: items.serious})
    }
    if (items.warning) {
        series.push({ name: 'Warning', stack: 'Logs and Events', type: 'bar', data: items.warning})
    }
    if (items.emergency) {
      series.push({ name: 'Emergency', stack: 'Logs and Events', type: 'bar', data: items.emergency})
    }
    if (items.alert) {
        series.push({ name: 'Alert', stack: 'Logs and Events', type: 'bar', data: items.alert})
    }
    if (items.error) {
        series.push({ name: 'Error', stack: 'Logs and Events', type: 'bar', data: items.error})
    }
    if (items.unknown) {
        series.push({ name: 'Unknown', stack: 'Logs and Events', type: 'bar', data: items.unknown})
    }
    series = items
    return {
        series
    }
  },
  filter: async (parent, {where}, {prisma}, info) => {

    const { startDate, endDate } = where

    let entitiesData = await prisma.query.entities({where: {items_some: {AND:[{triggerTime_gte: startDate},{triggerTime_lte: endDate}]}}},`{ name items { id }}`)
    let entities = entitiesData.map(entitiy => entitiy.name)
    
    return {entities}
  }, 
  getEntities: async (parent, { where }, {prisma}, info) => {
    const { startDate, endDate, first, skip, levels, types, entities } = where

    let customInfo = `{ name items(where: {${levels.length ? `level_in:[${levels}]`:''},${types.length ? `type_in:[${types}]`:''}}) { triggerTime }}`

    let andArgs = [{triggerTime_gte: startDate},{triggerTime_lt: endDate}]
    // console.log(startDate)
    if(levels.length) {
      andArgs.push({level_in: levels })
    }
    if(types.length) {
      andArgs.push({type_in: types })
    }

    let opArgs = {
      where: {
        items_some: {
          AND: andArgs
        }
      }, first: first, skip: skip
    }

    if(entities.length) {
      opArgs = {
      where: {
        AND: [
          {name_in: entities},
          {items_some: {
            AND: andArgs
          }}
        ]
      }, first: first, skip: skip
    }
  }

   let entitiesList = await prisma.query.entities(opArgs, customInfo)

   let formattedEntities = entitiesList.map((entity) => {

     let count = 0

    //  get items in range coung
    for(let item of entity.items) {
      if(item.triggerTime > startDate && item.triggerTime < endDate) {
        count++
      }
    }

    return {
      name: entity.name,
      count
    }
     
   })

    return formattedEntities
  }, 
  weekBar: async (parent, {where}, {prisma}, info) => {

    const { weekYear, levels, type, entities } = where

    let formattedType = type.replace(/\s/g, '')
    formattedType = formattedType.toUpperCase()
    formattedType = formattedType.slice(0, -1);

    let customInfo = `{ days { items(where: {type:${formattedType}}) { type } } }`

    // check shit
    if(levels.length || entities.length) {
      customInfo = `
      { 
        days { 
          items(where: {${levels.length ? `level_in:[${levels}]`:''},type:${formattedType},${entities.length ? `trigger:{name_in:${JSON.stringify(entities)}}`:''}}) { 
            type 
          } 
        } 
      }`
    }
    let week = await prisma.query.week({where: {weekYear: weekYear}}, customInfo)
    let items = []

    for(let day of week.days) {
        items.push(day.items.length)
    }
    
    return {
      items
    }
  },
  getItems: async (parent, { where }, { prisma }, info) => {
    const { startDate, endDate, levels, types, entities, first, skip, orderBy } = where
    
    let opArgs = [{ triggerTime_gt: startDate }, { triggerTime_lt: endDate }]

    if(types.length && types.length != 5) {
      opArgs.push({ type_in: types })
    }

    if(entities.length) {
      opArgs.push({ trigger: { name_in: entities } })
    }

    if(levels.length) {
      opArgs.push({ level_in: levels })
    }
    return await prisma.query.items({ first: first, skip: skip, orderBy: orderBy, where: {AND: opArgs }}, info)
  },
  getItemCount: async (parent, { where }, { prisma }, info) => {

    const { startDate, endDate, levels, types, entities } = where
    
    let opArgs = [{ triggerTime_gt: startDate }, { triggerTime_lt: endDate }]

    if(types.length) {
      opArgs.push({ type_in: types })
    }

    if(entities.length) {
      opArgs.push({ trigger: { name_in: entities } })
    }

    if(levels.length) {
      opArgs.push({ level_in: levels })
    }

    let itemCount = await prisma.query.itemsConnection({where: {AND: opArgs }}, '{ aggregate { count } }')
    return itemCount.aggregate.count
  },
  getEntityCount: async (parent, { where }, { prisma }, info) => {

    const { startDate, endDate, levels, types, entities } = where
    let andArgs = [{triggerTime_gt: startDate},{triggerTime_lt: endDate}]

    if(levels.length) {
      andArgs.push({level_in: levels })
    }
    if(types.length) {
      andArgs.push({type_in: types })
    }

    let opArgs = {
      where: {
        items_some: {
          AND: andArgs
        }
      }
    }

    if(entities.length) {
      opArgs = {
        where: {
          AND: [
            {name_in: entities},
            {items_some: {
              AND: andArgs
            }}
          ]
          
        }

      }
    }

    let entityCount = await prisma.query.entitiesConnection(opArgs, '{ aggregate { count } }')
    return entityCount.aggregate.count
  }

}

export { Query as default }





  // alerts: (parent, args, {prismaBinding}, info) => {
    
  //   let alerts = {
  //     meta: prismaBinding.query.alertsConnection(null, `{aggregate { count }`),
  //     data: prismaBinding.query.alerts(null, info)
  //   }

  //   return alerts
  // },
  // traps: (parent, args, context, info) => {
  //   return context.prisma.query.traps(args.data, info)
  // },
  // syslogs: (parent, args, context, info) => {
  //   return context.prisma.query.syslogs(args.data, info)
  // },
  // entities: (parent, args, context, info) => {
  //   return context.prisma.query.entities(args.data, info)
  // },
  
  // groupings: (parent, args, context, info) => {
  //   return context.prisma.query.groupings(args.data, info)
  // },
  // cards: (parent, args, context, info) => {
  //   return context.prisma.query.cards(args.data, info)
  // },
  // triggerList: (parent, args, context, info) => {
  //   let triggers = context.prisma.query.entities(args.data, info)
    
  // },
  // weekDensity: (parent, args, {prismaClient}, info) => {
  //   return context.prismaClient.week({weekYear: "w282019"})
  // },
   
  // alert: (parent, { alertID }, context) => {
  //   return context.prisma.post({ alertID })
  // },
  // chart: (parent, args, context) => {

  //   let alarts = context.prisma.alerts({})
  //   switch(args.type) {
  //     case 'bar':
  //       // format 
  //       return chart
  //   }
  // },
  // monthBar: (parent, args, context) => {
  //   let option = {}
  // }

// alerts.critical.push(day.alerts.filter(alert => alert.level === 'CRITICAL').length)
// alerts.informational.push(day.alerts.filter(alert => alert.level === 'INFORMATIONAL').length)
// alerts.notice.push(day.alerts.filter(alert => alert.level === 'NOTICE').length)
// alerts.serious.push(day.alerts.filter(alert => alert.level === 'SERIOUS').length)
// alerts.warning.push(day.alerts.filter(alert => alert.level === 'WARNING').length)

// traps.unknown.push(day.traps.length)

// syslogs.critical.push(day.syslogs.filter(syslog => syslog.level === 'CRITICAL').length)
// syslogs.informational.push(day.syslogs.filter(syslog => syslog.level === 'INFORMATIONAL').length)
// syslogs.notice.push(day.syslogs.filter(syslog => syslog.level === 'NOTICE').length)
// syslogs.warning.push(day.syslogs.filter(syslog => syslog.level === 'WARNING').length)
// syslogs.error.push(day.syslogs.filter(syslog => syslog.level === 'ERROR').length)
// syslogs.alert.push(day.syslogs.filter(syslog => syslog.level === 'ALERT').length)
// syslogs.emergency.push(day.syslogs.filter(syslog => syslog.level === 'EMERGENCY').length)

// alerts.critical.push(day.alerts.filter(alert => alert.level === 'CRITICAL').length)
// alerts.informational.push(day.alerts.filter(alert => alert.level === 'INFORMATIONAL').length)
// alerts.notice.push(day.alerts.filter(alert => alert.level === 'NOTICE').length)
// alerts.serious.push(day.alerts.filter(alert => alert.level === 'SERIOUS').length)
// alerts.warning.push(day.alerts.filter(alert => alert.level === 'WARNING').length)