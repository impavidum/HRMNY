var endMonth = new Date()
endMonth = endMonth.toJSON()

var startMonth = new Date(2019, 8, 1)

startMonth = startMonth.toJSON()

const logSeed = `SELECT
Logs.LogEntryID, 
Logs.LogEntryTypeID, 
Nodes.Caption, 
Logs.MessageSourceID, 
Logs.DateTime, 
Logs.MessageDateTime, 
Logs.Message, 
Logs.Level
FROM Orion.OLM.LogEntry as Logs
LEFT JOIN Orion.Nodes AS Nodes ON Logs.NodeID = Nodes.NodeID
WHERE Logs.DateTime > '${startMonth}'
`

const logRecurring = `SELECT
Traps.TrapID
,Traps.TimeStamp
,Traps.Message
,Traps.ObservationSeverity
,Traps.Hostname
,Nodes.NodeID 
FROM Orion.OLM.Traps AS Traps
LEFT JOIN Orion.Interfaces AS Nodes ON Traps.NodeID = Nodes.NodeID
WHERE Traps.TrapID > 0`

export { logSeed, logRecurring }



// SELECT MessageDateTime, isnull(ms.Caption, ms.IPAddress) as Source, Level, Message
// FROM Orion.OLM.LogEntry le
// join orion.olm.MessageSources ms on ms.MessageSourceID = le.MessageSourceID
// where le.nodeid=${nodeid}
// and messagedatetime > addday(-8, getdate())
// --and message like '%${SEARCH_STRING}%'

 

// order by MessageDateTime desc