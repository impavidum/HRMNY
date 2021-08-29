import gql from "graphql-tag"

// const GET_FILTER_DATA = gql`
//   query Filter($duration: String!, dateStart: String, dateEnd: String,) {
//       filter {
//         entities(where: {items_some: {triggerTime_gte:}})
//       }
//   }
// `

const GET_FILTER_DATA = gql`
  query Filter($startDate: String, $endDate: String, $levels: [Level!]!, $types: [ItemType!]!, $entities: [String!]!) {
      filter(where: {startDate: $startDate, endDate: $endDate, levels: $levels, types: $types, entities: $entities}) {
        entities
      }
  }
`

const GET_ALERTS = gql`
    query Alerts($name: String){
        items(where: {
        name_contains: $name
        type: "ALERT"
        }) {
            name
            level
            trigger {
                name
            }
        }
    }
`
// const GET_ALERTS = gql`
//     query Alerts($name: String, $skip: Int){
//         alerts(where: {
//         name_contains: $name
//         }, first: 11, skip: $skip) {
//             id
//             name
//             level
//             trigger {
//                 name
//             }
//         }
//     }
// `

const GET_ITEMS = gql`
    query GetItems($skip: Int!, $first: Int!, $startDate: String!, $endDate: String!, $levels: [Level!]!, $types: [ItemType!]!, $entities: [String!]!, $orderBy: String!) {
        getItems(where: {first: $first, skip: $skip, startDate: $startDate, endDate: $endDate, levels: $levels, types: $types, entities: $entities, orderBy: $orderBy}) {

                type
                triggerTime
                name
                message
                level
                source
                trigger {
                    name
                }
            }
        }
`

const GET_ITEM_COUNT = gql`
    query GetItemCount($startDate: String!, $endDate: String!, $levels: [Level!]!, $types: [ItemType!]!, $entities: [String!]!) {
        getItemCount(where: {startDate: $startDate, endDate: $endDate, levels: $levels, types: $types, entities: $entities})
    }
`

const GET_WEEKBAR_DATA = gql`
    query WeekBar($weekYear: String!, $type: String!, $levels: [Level!]!, $entities: [String!]!) {
        weekBar(where: { weekYear: $weekYear, type: $type, levels: $levels, entities: $entities }) {
            items
        }
    }
`
// where: {
//     alerts_every: {AND: [{name_in: $names}, {level_in: $levels}, {source_in: $sources}, {trigger_in: $entities}]}
// },


// , $names: [String!]!, $levels: [String!]!, $sources: [String!]!, $entities: [String!]!
const GET_ENTITY_LIST = gql`
    query getEntities($skip: Int!, $first: Int!, $startDate: String, $endDate: String, $levels: [Level!]!, $types: [ItemType!]!, $entities: [String!]!) {
        getEntities(where: {first: $first, skip: $skip, startDate: $startDate, endDate: $endDate, levels: $levels, types: $types, entities: $entities}) {
                name
                count
            }
        }
`

const GET_ENTITY_COUNT = gql`
    query getEntityCount($startDate: String!, $endDate: String!, $levels: [Level!]!, $types: [ItemType!]!, $entities: [String!]!) {
        getEntityCount(where: {startDate: $startDate, endDate: $endDate, levels: $levels, types: $types, entities: $entities}) 
    }
`

const GET_WEEK_DENSITY_DATA = gql`
query WeekDensity($weekYear: String!, $levels: [Level!]!, $types: [ItemType!]!, $entities: [String!]!) {
    weekDensity(where: { weekYear: $weekYear, levels: $levels, types: $types, entities: $entities }) {
       itemDensity
       max
    }
}
`

const GET_MONTHBAR_DATA = gql`
query MonthBar($monthYear: String!, $levels: [Level!]!, $types: [ItemType!]!, $entities: [String!]!) {
    monthBar(where: { monthYear: $monthYear, levels: $levels, types: $types, entities: $entities }) {
        xAxis
        series {
            alerts
            traps
            syslogs
            winEvents
            vmwEvents
        }
    }
}
`
const GET_WEEKSEVERITY_DATA = gql`
query WeekSeverity($weekYear: String!, $levels: [Level!]!, $types: [ItemType!]!, $entities: [String!]!) {
    weekSeverity(where: { weekYear: $weekYear, levels: $levels, types: $types, entities: $entities }) {
        series {
            critical
            informational
            notice
            serious
            warning
            emergency
            alert
            error
            unknown
            
            
        }
    }
}
`


export {
    GET_FILTER_DATA,
    GET_ALERTS,
    GET_WEEKBAR_DATA,
    GET_ENTITY_LIST,
    GET_WEEK_DENSITY_DATA,
    GET_MONTHBAR_DATA,
    GET_WEEKSEVERITY_DATA,
    GET_ITEMS,
    GET_ITEM_COUNT,
    GET_ENTITY_COUNT
}