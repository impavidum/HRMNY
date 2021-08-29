const Colors = {

    alerts: '#F3B817',
    traps: '#00B1EA',
    syslogs: '#6F2AD2',
    winEvents: '#ECEBF3',
    vmwEvents: '#8293A0',

    critical: '#F9C00C', 
    informational: 'white', 
    notice: '#00B1EA', 
    serious: 'blue', 
    warning: '#6F2AD2', 
    alert: '#ECEBF3', 
    emergency: '#BB4B42', 
    error: '#79D563', 
    unknown: '#8293A0'
}

const getTypeFromHex = (hex) => {

  switch(hex) {
    case (Colors.alerts):
      return 'Alerts'
    case (Colors.traps):
      return 'Traps'
    case (Colors.syslogs):
      return 'Syslogs'
    case (Colors.winEvents):
      return 'Windows Events'
    case (Colors.vmwEvents):
      return 'VMware Events'
  }
}

const getLevelFromHex = (hex) => {
  
  switch(hex) {
    case (Colors.critical):
      return 'Critical'
    case (Colors.informational):
      return 'Informational'
    case (Colors.notice):
      return 'Notice'
    case (Colors.serious):
      return 'Serious'
    case (Colors.warning):
      return 'Warning'
    case (Colors.alert):
      return 'Alert'
    case (Colors.emergency):
      return 'Emergency'
    case (Colors.error):
      return 'Error'
    case (Colors.unknown):
      return 'Unknown'
  }
}

export {Colors, getTypeFromHex, getLevelFromHex}