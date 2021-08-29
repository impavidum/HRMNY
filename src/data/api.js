import {monthByDayData} from './monthByDay'
import {monthByTriggerObjectData} from './monthByTriggerObject'
import {weekByTriggerObjectData} from './weekByTriggerObject'
import {weekByHourData} from './weekByHour'

const monthByTriggerObject = monthByTriggerObjectData

const weekByTriggerObject = weekByTriggerObjectData

const monthByDay = monthByDayData


const weekByHour = weekByHourData

export const api = {
    weekByHour: weekByHour,
    weekByTriggerObject: weekByTriggerObject,
    monthByDay: monthByDay,
    monthByTriggerObject: monthByTriggerObject
}