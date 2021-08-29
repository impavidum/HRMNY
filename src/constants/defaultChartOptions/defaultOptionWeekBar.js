const defaultOption = {
    // tooltip: {
    //   trigger: 'axis',
    //   axisPointer: {
    //     type: 'shadow',
    //     shadowStyle: {
    //       color: 'rgba(256,256,256,0.02)',
    //       shadowColor: 'rgba(0, 0, 0, 1)',
    //       shadowBlur: 10
    //     }
    //   }
    // },
    grid: {
        left: 0,
        right: 0,
        bottom: 40,
        top: 0
        // containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
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
                lineHeight: 25,
                formatter: function (value, index) {
                    switch (index) {
                        case 0:
                            return 'S'
                        case 1:
                            return 'M'
                        case 2:
                            return 'T'
                        case 3:
                            return 'W'
                        case 4:
                            return 'T'
                        case 5:
                            return 'F'
                        case 6:
                            return 'S'
                        default:
                            return 'S'
                    }
                }
            }
        }
    ],
    // series: [
        // {
            // itemStyle: {
            //   barBorderRadius: [3, 3, 0, 0],
            //   shadowColor: 'rgba(0, 0, 0, 0.4)',
            //   shadowBlur: 10,
            //   shadowOffsetX: -4,
            //   shadowOffsetY: 5
            // },
            // tooltip: {
                // formatter: '{b0}: {c0}<br />{b1}: {c1}'
            // }
        // }
    // ]
}

const yAxisDefaults = {
    type: 'value',
    axisLine: {
        show: false
    },
    axisLabel: {
        showMaxLabel: true
    },
    splitLine: {
        show: false
    },
    splitArea: {
        show: true,
        areaStyle: {
            color: ['#1A1B1D', 'rgba(200,200,200,0)']
        }
    }
}

const seriesDefaults = {
    type: 'bar',
    barWidth: '50%',
    animationDurationUpdate: 750,
    animationEasing: 'easeInOutQuart'
}

export {
    defaultOption,
    yAxisDefaults,
    seriesDefaults
}