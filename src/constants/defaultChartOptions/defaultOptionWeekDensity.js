const hours = [
    '12a',
    '1a',
    '2a',
    '3a',
    '4a',
    '5a',
    '6a',
    '7a',
    '8a',
    '9a',
    '10a',
    '11a',
    '12p',
    '1p',
    '2p',
    '3p',
    '4p',
    '5p',
    '6p',
    '7p',
    '8p',
    '9p',
    '10p',
    '11p'
]
const days = [
    'S   ',
    'F   ',
    'T   ',
    'W   ',
    'T   ',
    'M   ',
    'S   '
]

const desktopOption = {
    tooltip: {
        show: false,
        position: 'top'
    },
    animation: false,
    grid: {
        left: 40,
        right: 40,
        bottom: 40,
        top: 40,
    },
    xAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: false
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#818181',
            size: 14,
            fontWeight: 500,
            lineHeight: 25
        }
    },
    yAxis: {
        // containLabel: true,

        type: 'category',
        data: days,
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(200,200,200,0)', 'rgb(26, 27, 29)'],
            }
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            // inside: true,
            color: '#818181',
            size: 14,
            fontWeight: 500,
            lineHeight: 40
        },
    }
}

const mobileOption = {
    tooltip: {
        show: false,
        position: 'top'
    },
    animation: false,
    grid: {
        left: 40,
        right: 20,
        bottom: 40,
        top: 44,
    },
    yAxis: {
        type: 'category',
        data: hours,
        splitArea: {
            show: true,
            areaStyle: {
                color: ['rgba(200,200,200,0)', 'rgb(26, 27, 29)']
            }
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#818181',
            size: 14,
            fontWeight: 500,
            lineHeight: 25
        }
    },
    xAxis: {
        // containLabel: true,
        splitArea: {
            show: false
        },
        type: 'category',
        data: days,

        axisTick: {
            show: false,
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            // inside: true,
            color: '#818181',
            size: 14,
            fontWeight: 500,
            lineHeight: 40
        }
    }
}

const visualMapDefault = {
    min: 0,
    type: 'piecewise',
    splitNumber: 3,
    calculable: true,
    orient: 'horizontal',
    inRange: {
        color: ['#5EDF64', '#FFF970', '#D34747']
    },
    textStyle: {
        color: '#818181'
    },
    align: 'left',
    itemWidth: 15,
    precision: 0,
    top: 10,
    right: 'center'
}

const seriesDefault = {
    name: 'Events',
    type: 'heatmap',
}

const mobileSeriesLabelOption = {
    label: {
        normal: {
            show: true,
            color: '#2C2C2F',
            fontWeight: 800
        }
    }
}

const desktopSeriesLabelOption = {
    label: {
        normal: {
            show: true,
            color: '#2C2C2F',
            fontWeight: 500
        }
    }
}

export {
    desktopOption,
    mobileOption,
    visualMapDefault,
    seriesDefault,
    mobileSeriesLabelOption,
    desktopSeriesLabelOption
}