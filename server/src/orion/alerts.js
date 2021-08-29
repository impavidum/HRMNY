var endMonth = new Date()

// startMonth.setDate(startMonth.getDate() - 120 )
var startMonth = new Date(2019, 8, 12)
startMonth = startMonth.toJSON()
endMonth = endMonth.toJSON()

// console.log(startMonth,endMonth)

const alertSeed = `SELECT
History.AlertHistoryID AS AlertID
,Configurations.Name AS Name
,History.Message AS Message
,History.TimeStamp AS TriggerTime
,NULL AS LinkForAlert
,Objects.EntityDetailsURL AS LinkForEntity
,NULL AS LinkForParentEntity
,NULL AS Source 
,CASE WHEN Configurations.Severity = 0 THEN 'Informational'
    WHEN Configurations.Severity = 1 THEN 'Warning'
    WHEN Configurations.Severity = 2 THEN 'Critical'
    WHEN Configurations.Severity = 3 THEN 'Serious'
    WHEN Configurations.Severity = 4 THEN 'Notice'
ELSE TOSTRING(Configurations.Severity)
END AS Level
,Objects.AlertObjectID AS UniqueIDForThisAlertingObject
,Objects.EntityCaption
,Objects.EntityType
FROM Orion.AlertHistory AS History
JOIN Orion.AlertObjects AS Objects ON History.AlertObjectID = Objects.AlertObjectID
JOIN Orion.AlertConfigurations AS Configurations ON Objects.AlertID = Configurations.AlertID
WHERE History.EventType = 0 AND History.TimeStamp > '${startMonth}'`

const alertRecurring = `SELECT
History.AlertHistoryID AS AlertID
,Configurations.Name AS Name
,History.Message AS Message
,History.TimeStamp AS TriggerTime
,NULL AS LinkForAlert 
,Objects.EntityDetailsURL AS LinkForEntity
,NULL AS LinkForParentEntity 
,NULL AS Source
,CASE WHEN Configurations.Severity = 0 THEN 'Informational'
    WHEN Configurations.Severity = 1 THEN 'Warning'
    WHEN Configurations.Severity = 2 THEN 'Critical'
    WHEN Configurations.Severity = 3 THEN 'Serious'
    WHEN Configurations.Severity = 4 THEN 'Notice'
ELSE TOSTRING(Configurations.Severity)
END AS Level
,Objects.AlertObjectID AS UniqueIDForThisAlertingObject
,Objects.EntityCaption
,Objects.EntityType
FROM Orion.AlertHistory AS History
JOIN Orion.AlertObjects AS Objects ON History.AlertObjectID = Objects.AlertObjectID
JOIN Orion.AlertConfigurations AS Configurations ON Objects.AlertID = Configurations.AlertID
WHERE History.AlertHistoryID > 716673 AND History.EventType = 0`

export { alertSeed, alertRecurring }