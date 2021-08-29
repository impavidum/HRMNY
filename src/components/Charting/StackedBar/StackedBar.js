// Third Party
import React, { Component } from 'react'
import WindowSizeListener from 'react-window-size-listener'
import { withRouter } from 'react-router-dom'
import ReactEcharts from 'echarts-for-react'

// Components
import Loader from '../../Utility/Loader/Loader'
import Error from '../../Utility/Error/Error'

// Constants
import {Colors, getLevelFromHex} from '../../../constants/Colors'
import { defaultOptionDesktop, defaultOptionMobile } from '../../../constants/defaultChartOptions/defaultOptionStackedBar'

// Styles
import './stacked-bar.scss'

// Moment
import moment from 'moment'

class StackedBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            preLoaded: false,
            max: null,
            roundedMax: 70,
            series: []
        }
    }

    componentDidUpdate(prevProps) {
        if (!this.state.preLoaded && !this.props.empty) {
            this.echartsInstance1 = this.echartsReactRef1.getEchartsInstance()
            this.echartsInstance2 = this.echartsReactRef2.getEchartsInstance()
            this.echartsInstance3 = this.echartsReactRef3.getEchartsInstance()
            this.echartsInstance4 = this.echartsReactRef4.getEchartsInstance()
            this.zr1 = this.echartsInstance1.getZr()
            this.zr2 = this.echartsInstance2.getZr()
            this.zr3 = this.echartsInstance3.getZr()
            this.zr4 = this.echartsInstance4.getZr()

            this.zr1.on('click', this.onStackedBarClick)
            this.zr2.on('click', this.onStackedBarClick)
            this.zr3.on('click', this.onStackedBarClick)
            this.zr4.on('click', this.onStackedBarClick)
            this.setState({ preLoaded: true })
        }
    }

    // static getDerivedStateFromProps(props, state) {
    //     let series = []
    //     if(!props.empty) {
    //         series = props.weekSeverity.weekSeverity.series || []
    //     }
    //     console.log(series)
    //     if(series.length) {
    //         return {
    //             series
    //         }
    //     } else {
    //         return {}
    //     }
        
    // }

    // static getDerivedStateFromProps(prevProps, nextState) {
    //     let maxs = []
    //     let sun = []
    //     let mon = []
    //     let tues = []
    //     let wed = []
    //     let thurs = []
    //     let fri = []
    //     let sat = []

    //     const { series } = prevProps.weekSeverity.weekSeverity

    //     series.map((x) => {
    //         sun.push(x.data[0])
    //         mon.push(x.data[1])
    //         tues.push(x.data[2])
    //         wed.push(x.data[3])
    //         thurs.push(x.data[4])
    //         fri.push(x.data[5])
    //         sat.push(x.data[6])
    //     })

    //     let sunSum = sun.reduce((a, b) => a + b, 0)
    //     let monSum = mon.reduce((a, b) => a + b, 0)
    //     let tuesSum = tues.reduce((a, b) => a + b, 0)
    //     let wedSum = wed.reduce((a, b) => a + b, 0)
    //     let thursSum = thurs.reduce((a, b) => a + b, 0)
    //     let friSum = fri.reduce((a, b) => a + b, 0)
    //     let satSum = sat.reduce((a, b) => a + b, 0)

    //     maxs.push(sunSum, monSum, tuesSum, wedSum, thursSum, friSum, satSum)

    //     let max = Math.max(...maxs)
    //     let bufferedMax = +max + 50
    //     let roundedMax = Math.ceil(bufferedMax / 7.0) * 7

    //     // If there is data, set it as new series
    //     if (series.length) {
    //         return { roundedMax, series, noData: false}
    //     }
    //     // If no data in result, clear series
    //     return { roundedMax: 70, noData: true }
    // }
    // // If no data in result, clear series
    // return { roundedMax: 70, noData: true }
    //     }    
    //     return null
    // }


    onStackedBarClick = (...rest) => {
        this.setState({ preloaded: false })
  
        const { startDate, monthYear } = this.props
        if (!rest[0].target || typeof rest[0].target.dataIndex !== "number") {
            return
        }
        let index = rest[0].target.dataIndex
        let chip = getLevelFromHex(rest[0].target['__cachedNormalStl'].fill)
        // For Query
        // const getSelectedDayInt = () => {
        //   let startDateDayInt = Number(moment(startDate).date())
        //   return startDateDayInt + index
        // }
        // let selectedDayInt = getSelectedDayInt()
        // let dayMonthYear = `d${selectedDayInt}${monthYear}`

        // Get Start/End Moments
        let year = moment(startDate).year()
        let month = moment(startDate).month()
        let day = startDate.getDate() + index
        let startDateMoment = new Date(year, month, day, 0, 0, 0)
        let endDateMoment = new Date(year, month, day, 23, 59, 59)

        // Create Subtitle
        let formattedDateString = moment(startDateMoment).format('dddd, MMMM Do, YYYY')

        // Send Data To Grouping
        this.props.onChartClick({
            formattedDateString: formattedDateString, // For View
            startDateMoment: startDateMoment, // For Filter Query
            endDateMoment: endDateMoment, // For Filter Query
            selectedChip: chip, // For Filter Query
            chipType: "level" 
            // dateRange: dayMonthYear, // For Query
            // rangeType: 'dmy' // For Query
        })
    }


    getOption = (orientation) => {
        let defaultOption = {
            color: [
                this.props.weekSeverity.weekSeverity.series.critical.length && Colors.critical,
                this.props.weekSeverity.weekSeverity.series.informational.length && Colors.informational,
                this.props.weekSeverity.weekSeverity.series.notice.length && Colors.notice,
                this.props.weekSeverity.weekSeverity.series.serious.length && Colors.serious,
                this.props.weekSeverity.weekSeverity.series.warning.length && Colors.warning,
                this.props.weekSeverity.weekSeverity.series.alert.length && Colors.alert,
                this.props.weekSeverity.weekSeverity.series.emergency.length && Colors.emergency,
                this.props.weekSeverity.weekSeverity.series.error.length && Colors.error,
                this.props.weekSeverity.weekSeverity.series.unknown.length && Colors.unknown,
            ],
            legend: {
                data: [
                    this.props.weekSeverity.weekSeverity.series.critical.length && 'Critical', 
                    this.props.weekSeverity.weekSeverity.series.informational.length && 'Informational', 
                    this.props.weekSeverity.weekSeverity.series.notice.length && 'Notice', 
                    this.props.weekSeverity.weekSeverity.series.serious.length && 'Serious', 
                    this.props.weekSeverity.weekSeverity.series.warning.length && 'Warning', 
                    this.props.weekSeverity.weekSeverity.series.alert.length && 'Alert', 
                    this.props.weekSeverity.weekSeverity.series.emergency.length && 'Emergency', 
                    this.props.weekSeverity.weekSeverity.series.error.length && 'Error', 
                    this.props.weekSeverity.weekSeverity.series.unknown.length && 'Unknown'
                ],
                top: 10,
                right: 'center',
                orient: 'horizontal',
                itemWidth: 15,
                itemGap: 15,
                width: '100%',
                textStyle: {
                    color: '#818181'
                }
            },
            series: [
                this.props.weekSeverity.weekSeverity.series.critical && {
                    name: 'Critical',
                    type: 'bar',
                    stack: 'items',
                    data: this.props.weekSeverity.weekSeverity.series.critical
                },
                this.props.weekSeverity.weekSeverity.series.informational && {
                    name: 'Informational',
                    type: 'bar',
                    stack: 'items',
                    data: this.props.weekSeverity.weekSeverity.series.informational
                },
                this.props.weekSeverity.weekSeverity.series.notice && {
                    name: 'Notice',
                    type: 'bar',
                    stack: 'items',
                    data: this.props.weekSeverity.weekSeverity.series.notice
                },
                this.props.weekSeverity.weekSeverity.series.serious && {
                    name: 'Serious',
                    type: 'bar',
                    stack: 'items',
                    data: this.props.weekSeverity.weekSeverity.series.serious
                },
                this.props.weekSeverity.weekSeverity.series.warning && {
                    name: 'Warning',
                    type: 'bar',
                    stack: 'items',
                    data: this.props.weekSeverity.weekSeverity.series.warning
                },
            
                this.props.weekSeverity.weekSeverity.series.alert && {
                    name: 'Alert',
                    type: 'bar',
                    stack: 'items',
                    data: this.props.weekSeverity.weekSeverity.series.alert
                },
                this.props.weekSeverity.weekSeverity.series.emergency && {
                    name: 'Emergency',
                    type: 'bar',
                    stack: 'items',
                    data: this.props.weekSeverity.weekSeverity.series.emergency
                },
                this.props.weekSeverity.weekSeverity.series.error && {
                    name: 'Error',
                    type: 'bar',
                    stack: 'items',
                    data: this.props.weekSeverity.weekSeverity.series.error
                },
                this.props.weekSeverity.weekSeverity.series.unknown && {
                    name: 'Unknown',
                    type: 'bar',
                    stack: 'items',
                    data: this.props.weekSeverity.weekSeverity.series.unknown
                }
            ]
        }
        switch (orientation) {
            case 'desktopOption':
                return {
                   ...defaultOption,
                   ...defaultOptionDesktop
                }
            case 'mobileOption':
                return {
                    ...defaultOption,
                    ...defaultOptionMobile,
                    grid: {
                        left: 40,
                        right: 40,
                        bottom: 40,
                        top: 40
                    },
                }

            case 'mobileOption2':
                return {
                    ...defaultOption,
                    ...defaultOptionMobile,
                    grid: {
                        left: 40,
                        right: 20,
                        bottom: 40,
                        top: 70
                        // top: 40
                        // @1350px top: 65
                        // @459px top: 100
                    }
                }
            case 'mobileOption3':
                return {
                    ...defaultOption,
                    ...defaultOptionMobile,
                    grid: {
                        left: 40,
                        right: 20,
                        bottom: 40,
                        top: 100
                        // top: 40
                        // @1350px top: 65
                        // @459px top: 100
                    }
                }
        }
    }



    render() {
        const { weekSeverity, empty, error } = this.props
   
        return (
            <div className='stacked-bar'>

                {/* Loader */}
                {(empty && !this.state.preLoaded) && <Loader />}

                {/* Error */}
                {error && `Error! ${error.message}`}

                {/* Desktop */}
                {!error && (this.state.preLoaded || !empty) && <div className='chart-desktop'>
                    <ReactEcharts
                        option={this.getOption('desktopOption')}
                        style={{ height: 625 }}
                        ref={e => {
                            this.echartsReactRef1 = e
                        }}
                    />
                </div>}

                {/* Mobile */}
                {!error && (this.state.preLoaded || !empty) && <div className='chart-mobile'>
                    <ReactEcharts
                        option={this.getOption('mobileOption')}
                        style={{ height: 625 }}
                        ref={e => {
                            this.echartsReactRef2 = e
                        }}
                    />
                </div>}

                {!error && (this.state.preLoaded || !empty) && <div className='chart-mobile2'>
                    <ReactEcharts
                        option={this.getOption('mobileOption2')}
                        style={{ height: 625 }}
                        ref={e => {
                            this.echartsReactRef3 = e
                        }}
                    />
                </div>}

                {!error && (this.state.preLoaded || !empty) && <div className='chart-mobile3'>
                    <ReactEcharts
                        option={this.getOption('mobileOption3')}
                        style={{ height: 625 }}
                        ref={e => {
                            this.echartsReactRef4 = e
                        }}
                    />
                </div>}
            </div>
        )
    }
}

export default withRouter(StackedBar)



