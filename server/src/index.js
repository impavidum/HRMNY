const { GraphQLServer } = require('graphql-yoga')
// const { prisma } = require('./generated/prisma-client')
import express from 'express'
import path from 'path'
import moment from 'moment'
import retry from 'async/retry';

import { Prisma } from 'prisma-binding'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'


import {alertSeed, alertRecurring} from './orion/alerts' 
import {logSeed, logRecurring} from './orion/logs' 

import axios from 'axios'
import https from 'https';



const prisma = new Prisma({
  typeDefs: 'src/generated/prisma-client/prisma-schema.graphql',
  endpoint: 'https://us1.prisma.sh/public-petalvulture-610/harmony/dev',
})

const instance = axios.create({
  baseURL: `https://engorion.loop1.com:17778/SolarWinds/InformationService/v3/Json`,
  dataType: 'json',
  crossDomain: true,
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  }),
  auth: {
    username: "ApiTest",
    password: "6)+6?'mU!S"
  }
});

const querySplunk = () => {

}

const queryOrion = async (query) => {
  return instance
    .post(`/Query`, {
      query: query
    })
    .then(response => response.data.results)
    .catch(error => console.log(error))
}


// Resolvers
const resolvers = {
  Query,
  Mutation
 }

 // Seed Alerts
 const createAlert = async (alert) => {
  let day = moment(alert.TriggerTime).date()
  let hour = moment(alert.TriggerTime).hour()
  let month = moment(alert.TriggerTime).month()
  
  // check for trigger
  const alertExists = await prisma.exists.Item({ alertID: alert.AlertID })
  if(!alertExists) {
    
  const entityExists = await prisma.exists.Entity({ name: alert.EntityCaption })
  let opArgs = {}
  opArgs.data = {
    alertID: alert.AlertID,
    type: 'ALERT',
    name: alert.Name,
    message: alert.Message,
    triggerTime: alert.TriggerTime,
    source: 'ORION',
    level: alert.Level.toUpperCase(),
    hour: {
      connect: {
        hourDayMonthYear: `h${hour}d${day}m${month}y2019`
      }
    },
    day: {
      connect: {
        dayMonthYear: `d${day}m${month}y2019`
      }
    }
  }
  
  if(entityExists) {
    opArgs.data.trigger = {
      connect: {
        name: alert.EntityCaption
      }
    }
  } else {
    opArgs.data.trigger = {
      create: {
        name: alert.EntityCaption,
        source: 'ORION'
      }
    }
  }
  
  return await prisma.mutation.createItem(opArgs, `{triggerTime}`)
  } else {
  console.log('alert exists')
  }
  }

 // Seed Traps and syslogs
 const createLog = async (log) => {

  
  // check for trigger
  const logExists = await prisma.exists.Item({ logID: log.LogEntryID.toString() })
  if(!logExists) {
    
    let day = moment(log.DateTime).date()
    let hour = moment(log.DateTime).hour()
    let month = moment(log.DateTime).month()
    let name = 'Unknown'
    let type = 'UNKNOWN'
  
    switch(log.LogEntryTypeID) {
      case 1:
        name = 'Syslog'
        type = 'SYSLOG'
        break
      case 2:
        name = 'Trap'
        type = 'TRAP'
        break
      case 3:
        name = 'Windows Event'
        type = 'WINDOWSEVENT'
        break
      case 4:
        name = 'VMware Event'
        type = 'VMWAREEVENT'
        break
    }
  const entityExists = await prisma.exists.Entity({ name: log.Caption })
  let opArgs = {}
  opArgs.data = {
    logID: log.LogEntryID.toString(),
    type: type,
    name: name,
    message: log.Message,
    triggerTime: log.DateTime,
    source: 'ORION',
    level: log.Level.toUpperCase(),
    hour: {
      connect: {
        hourDayMonthYear: `h${hour}d${day}m${month}y2019`
      }
    },
    day: {
      connect: {
        dayMonthYear: `d${day}m${month}y2019`
      }
    }
  }
  
  if(entityExists) {
    opArgs.data.trigger = {
      connect: {
        name: log.Caption
      }
    }
  } else {
    opArgs.data.trigger = {
      create: {
        name: log.Caption,
        source: 'ORION'
      }
    }
  }
  
  return await prisma.mutation.createItem(opArgs, `{triggerTime}`)
  } else {
  }
  }



// queryOrion(alertSeed).then(alerts => {
//   console.log(alerts)
//   alerts = alerts.reverse()
//   processAlerts(alerts)
//   })

// queryOrion(logSeed).then(logs => {
//   processLogs(logs)
// })

const createDay = async (day) => {

  let dayMonthYear = `d${day.date()}m${day.month()}y2019`
  let quarterYear = `q${day.quarter()}y2019`
  let weekYear = `w${day.week()}y2019`
  let monthYear = `m${day.month()}y2019`
  let hours = []

  for(let i=0; i<24; i++) {
    hours.push({
      value: i,
      hourDayMonthYear: `h${i}${dayMonthYear}`,
      items: {
        create: []
      }
    })
  }

  let opArgs = {}
  opArgs.data = {
    value: day.date(),
    dayMonthYear: dayMonthYear,
    year: {
      connect: {
        id: "cjyr32a9l2xkp0b99fhxc0fnd"
      }
    }, 
    quarter: {
      connect: {
        quarterYear: quarterYear
      }
    },
    week: {
      connect: {
        weekYear: weekYear
      }
    },
    month:{
      connect:{
        monthYear: monthYear
      }
    },
    hours: {
      create: hours
    }
  }
  return await prisma.mutation.createDay(opArgs, `{dayMonthYear}`)
}

async function createDays() {

  let startDate = new moment('9-1-2019', "MM-DD-YYYY")
  let endDate = new moment('12-29-2019', "MM-DD-YYYY")

  console.log('Creating Days..');

  for (var m = moment(startDate); m.diff(endDate, 'days') <= 0; m.add(1, 'days')) {
    await createDay(m)
  }

  console.log('All days created!');
}

// createDays()

async function processAlerts(alerts) {
  console.log('Importing Alerts..');
  for (const [i, alert] of alerts.entries()) {
      await createAlert(alert).then(resp => console.log(resp)).catch(error => console.log(error))
    
  }
  console.log('All Alerts imported!');
}

async function processLogs(logs) {
  console.log('Importing logs..');

  for (const log of logs) {
    await createLog(log).then((resp)=>{console.log(resp)}).catch((err)=>{console.log(err)})
  }
  console.log('All Logs imported!');
}


const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma
  }
})



server.start({port: 3000})


