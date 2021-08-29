const legendOption = {
    top: 10,
    right: 'center',
    orient: 'horizontal',
    itemWidth: 15,
    itemGap: 15,
    textStyle: {
      color: '#818181'
    }
}

const mobileLegendOption = {
    ...legendOption,
    width: '100%'
}

const mobileLegendOption2 = {
    ...legendOption,
    width: 300
}

const desktopLegendOption = {
    ...legendOption,
    width: 500
}

const defaultTooltipOption = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(256,256,256,0.02)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                shadowBlur: 10
            }
        },
    }
}

const desktopGridOption = {
    grid: {
        left: 40,
        right: 40,
        bottom: 40,
        top: 50
    }
}

const mobileGridOption = {
    grid: {
        left: 40,
        right: 20,
        bottom: 40,
        top: 40
    }
}

const mobileGridOption2 = {
    grid: {
        left: 40,
        right: 20,
        bottom: 40,
        top: 80
    }
}

const axisOption = {
    type: 'value',
    axisLine: {
        show: false
    },
    axisLabel: {
        color: '#818181',
        size: 14,
        fontWeight: 500,
        lineHeight: 25,
        formatter: (value, index) => {
            if (value > 999) {
                let thousands = value / 1000
                let label = thousands + 'k'
                return label
            }
            return Math.round(value)
        }
    },
    axisTick: { show: false },
    splitLine: {
        show: false
    }
}

const axisOption2 = {
    type: 'category',
    axisTick: { show: false },
    axisLine: {
        show: false
    },
    axisLabel: {
        show: true,
        color: '#818181',
        size: 14,
        fontWeight: 500,
        lineHeight: 25
    }
}

const splitAreaOption = {
    splitArea: {
        show: true,
        areaStyle: {
            color: ['rgb(26, 27, 29)', 'rgba(200,200,200,0)']
        }
    }
}

const desktopDataZoom = [
    {
        type: 'slider',
        show: true,
        start: 0,
        end: 100,
        // backgroundColor: 'rgba(0, 0, 0, 0.17)',
        borderColor: 'transparent',
        dataBackground: {
            lineStyle: {
                // color: 'red'
            },
            areaStyle: {
                // color: 'rgba(255, 255, 255, .2)'
            },
        },
        textStyle: {
            color: 'transparent'
        },
        handleStyle: {
            color: 'rgba(125, 125, 125, 1)'
        },
        fillerColor: 'rgba(255, 255, 255, .04)',
        // borderColor: 'red',
        left: 42,
        right: 47,
        bottom: 4
    },
    {
        show: false,
    }
]

const mobileDataZoom = [
    {
        show: false,
        xAxisIndex: [0],
        filterMode: 'empty'
    },
    {
        type: 'slider',
        show: true,
        yAxisIndex: [0],
        filterMode: 'filter',
        start: 0,
        end: 100,
        // backgroundColor: 'rgba(0, 0, 0, 0.17)',
        borderColor: 'transparent',
        dataBackground: {
            lineStyle: {
                // color: 'red'
            },
            areaStyle: {
                // color: 'rgba(255, 255, 255, .2)'
            },
        },
        textStyle: {
            // color: '#EAEAEB'
            color: 'transparent'
        },
        handleStyle: {
            color: 'rgba(125, 125, 125, 1)'
        },
        fillerColor: 'rgba(255, 255, 255, .04)',
        // borderColor: 'red',
        left: 5,
        // right: 82,
        bottom: 43
    }
]

const defaultOption = {
    calculable: true,
}

export {
    mobileLegendOption,
    mobileLegendOption2,
    desktopLegendOption,
    defaultTooltipOption,
    desktopGridOption,
    mobileGridOption,
    mobileGridOption2,
    axisOption,
    axisOption2,
    splitAreaOption,
    desktopDataZoom,
    mobileDataZoom,
    defaultOption
}