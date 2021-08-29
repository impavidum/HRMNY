// Third Party
import React, { Component } from 'react'
import WindowSizeListener from 'react-window-size-listener'
import { withRouter } from 'react-router-dom'
import ReactEcharts from 'echarts-for-react'

// Components
import Loader from '../../Utility/Loader/Loader'
import Error from '../../Utility/Error/Error'

// Constants
import { Colors, getTypeFromHex } from '../../../constants/Colors'
import {
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
} from '../../../constants/defaultChartOptions/defaultOptionMonthBar'


// Styles
import './month-bar.scss'

// Moment
import moment from 'moment'

class MonthBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      preLoaded: false,
      max: null,
      roundedMax: null
    }
  }

  componentDidUpdate(prevProps) {
    if (!this.state.preLoaded && !this.props.empty) {
      this.echartsInstance1 = this.echartsReactRef1.getEchartsInstance()
      this.echartsInstance2 = this.echartsReactRef2.getEchartsInstance()
      this.echartsInstance3 = this.echartsReactRef3.getEchartsInstance()

      this.zr1 = this.echartsInstance1.getZr()
      this.zr2 = this.echartsInstance2.getZr()
      this.zr3 = this.echartsInstance3.getZr()

      this.zr1.on('click', this.onMonthBarClick)
      this.zr2.on('click', this.onMonthBarClick)
      this.zr3.on('click', this.onMonthBarClick)
      this.setState({ preLoaded: true })
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.month) {
      let data = props.month.series
      let maxs = []
      let alertsMax = Math.max(...data.alerts) || 0
      let trapsMax = Math.max(...data.traps) || 0
      let syslogsMax = Math.max(...data.syslogs) || 0
      let vmwEventsMax = Math.max(...data.vmwEvents) || 0
      let winEventsMax = Math.max(...data.winEvents) || 0
      maxs.push(alertsMax, trapsMax, syslogsMax, vmwEventsMax, winEventsMax)
      let max = Math.max(...maxs)
      let roundedMax = Math.ceil(max / 7.0) * 7
      if (max > 0) {
        return { max, roundedMax }
      }
    }
    return { roundedMax: 60 }
  }

  updateCount = width => {
    if (width > 1050 && width < 1500) {
      this.setState({ count: 21 })
      this.updateEvents()
    } else {
      this.setState({ count: 9 })
      this.updateEvents()
    }
  }

  onMonthBarClick = (...rest) => {
    this.setState({ preLoaded: false })
    const { startDate, monthYear } = this.props
    if (!rest[0].target || typeof rest[0].target.dataIndex !== "number") {
      return
    }
    let index = rest[0].target.dataIndex
    let chip = getTypeFromHex(rest[0].target['__cachedNormalStl'].fill)
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
      selectedChip: chip // For Filter Query
      // dateRange: dayMonthYear, // For Query
      // rangeType: 'dmy' // For Query
    })
  }

  isGreaterThanZero = (x) => {
    return x > 0;
  }

  getOption = (orientation) => {
    let colorOption = [
      this.props.month.series.alerts.length && Colors.alerts,
      this.props.month.series.traps.length && Colors.traps,
      this.props.month.series.syslogs.length && Colors.syslogs,
      this.props.month.series.winEvents.length && Colors.winEvents,
      this.props.month.series.vmwEvents.length && Colors.vmwEvents
    ]

    let seriesOption = [
      {
        name: 'Alerts',
        type: 'bar',
        data: this.props.month.series.alerts,
      },
      {
        name: 'Traps',
        type: 'bar',
        data: this.props.month.series.traps,
      },
      {
        name: 'Syslogs',
        type: 'bar',
        data: this.props.month.series.syslogs,
      },
      {
        name: 'Windows Events',
        type: 'bar',
        data: this.props.month.series.winEvents,
      },
      {
        name: 'VMware Events',
        type: 'bar',
        data: this.props.month.series.vmwEvents,
      }
    ]

    let legendDataOption = [
      this.props.month.series.alerts.length && 'Alerts',
      this.props.month.series.traps.length && 'Traps',
      this.props.month.series.syslogs.length && 'Syslogs',
      this.props.month.series.winEvents.length && 'Windows Events',
      this.props.month.series.vmwEvents.length && 'VMware Events'
    ]

    switch (orientation) {
      case 'desktopOption':
        return {
          ...defaultOption,
          color: colorOption,
          legend: {
            data: legendDataOption,
            ...desktopLegendOption,
          },
          ...defaultTooltipOption,
          ...desktopGridOption,
          xAxis: [
            {
              ...axisOption2,
              data: this.props.month.xAxis
            }
          ],
          yAxis: [
            {
              ...axisOption,
              ...splitAreaOption,
              splitNumber: 5
            }
          ],
          dataZoom: desktopDataZoom,
          series: seriesOption
        }
      case 'mobileOption':
        return {
          ...defaultOption,
          color: colorOption,
          legend: {
            ...mobileLegendOption,
            data: legendDataOption
          },
          ...defaultTooltipOption,
          ...mobileGridOption,
          yAxis: [
            {
              ...axisOption2,
              ...splitAreaOption,
              data: this.props.month.xAxis
            }
          ],
          xAxis: [axisOption],
          dataZoom: mobileDataZoom,
          series: seriesOption
        }
      case 'mobileOption2':
        return {
          ...defaultOption,
          color: colorOption,
          legend: {
            ...mobileLegendOption2,
            data: legendDataOption
          },
          ...defaultTooltipOption,
          ...mobileGridOption2,
          yAxis: [
            {
              ...axisOption2,
              ...splitAreaOption,
              data: this.props.month.xAxis
            }
          ],
          xAxis: [axisOption],
          dataZoom: mobileDataZoom,
          series: seriesOption
        }
    }
  }


  render() {
    const { error, empty, month } = this.props

    return (
      <div className='month-bar'>

        {/* Loader */}
        {!error && (empty && !this.state.preLoaded) && <Loader />}

        {/* Error */}
        {error && <Error error={error} />}

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

        {/* Mobile 2 */}
        {!error && (this.state.preLoaded || !empty) && <div className='chart-mobile-2'>
          <ReactEcharts
            option={this.getOption('mobileOption2')}
            style={{ height: 625 }}
            ref={e => {
              this.echartsReactRef3 = e
            }}
          />
        </div>}
      </div>
    )
  }
}

export default withRouter(MonthBar)






