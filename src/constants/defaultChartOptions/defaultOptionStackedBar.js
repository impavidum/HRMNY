const defaultOption = {
    tooltip: {
        trigger: 'axis',

        axisPointer: {
            type: 'shadow',
            shadowStyle: {
                color: 'rgba(256,256,256,0.02)',
                shadowColor: 'rgba(0, 0, 0, 1)',
                shadowBlur: 10
            }
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            axisTick: { show: false },
            axisLine: {
                show: false
            },
            axisLabel: {
                color: '#818181',
                size: 14,
                fontWeight: 500,
                lineHeight: 25,
                formatter: function (value, index) {
                    // Formatted to be month/day; display year only in the first label
                    switch (value) {
                        case 'Sunday':
                            return 'S'
                        case 'Monday':
                            return 'M'
                        case 'Tuesday':
                            return 'T'
                        case 'Wednesday':
                            return 'W'
                        case 'Thursday':
                            return 'T'
                        case 'Friday':
                            return 'F'
                        case 'Saturday':
                            return 'S'
                    }

                }
            },
            data: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ]
        }
    ],
    yAxis: [
        {
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
            },
            splitArea: {
                show: true,
                areaStyle: {
                    color: ['rgb(26, 27, 29)', 'rgba(200,200,200,0)']
                }
            }
        }
    ]
}

const defaultOptionDesktop = {
    ...defaultOption,
    splitArea: {
        show: true,
        areaStyle: {
            color: ['rgb(26, 27, 29)', 'rgba(200,200,200,0)']
        }
    },
    grid: {
        left: 40,
        right: 40,
        bottom: 40,
        top: 40
    },
}

const defaultOptionMobile = {
    ...defaultOption,
    splitArea: {
        show: true,
        areaStyle: {
            color: ['rgba(200,200,200,0)', 'rgb(26, 27, 29)']
        }
    }
}

export {
    defaultOptionDesktop,
    defaultOptionMobile
}