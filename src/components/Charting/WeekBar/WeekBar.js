import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import ReactEcharts from 'echarts-for-react'

// Components
import Loader from '../../Utility/Loader/Loader'
import Error from '../../Utility/Error/Error'

// Constants
import { Colors, getTypeFromHex } from '../../../constants/Colors'
import { defaultOption, yAxisDefaults, seriesDefaults } from '../../../constants/defaultChartOptions/defaultOptionWeekBar'


// Styles
import './week-bar.scss'

// Moment
import moment from 'moment'

class weekBar extends Component {
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
      this.echartsInstance = this.echartsReactRef.getEchartsInstance()
      this.zr = this.echartsInstance.getZr()
      this.zr.on('click', this.onWeekBarClick)
      this.setState({ preLoaded: true })
    }
  }

  static getDerivedStateFromProps(props, state) {
    // if (!props.empty) {
    //   console.log(props)
    // }
    // console.log(props.weekBarMax)
    if (props.data && props.data.weekBar) {
      let items = props.data.weekBar.items
      let max = Math.max(...items)
      let roundedMax = Math.ceil(max / 7.0) * 7
      if (max > 0 && state.max !== max) {
        return { max, roundedMax }
      }
      // console.log('weekBarProps', props)
      // props.calcGroupingMax(max, 'weekBar')
    }
    let defaultMax = 60
    return { max: defaultMax, roundedMax: (defaultMax / 7.0) * 7 }
    // return null
  }

  onWeekBarClick = (...rest) => {
    this.setState({ preLoaded: false })
    let chip = getTypeFromHex(rest[0].target['__cachedNormalStl'].fill)
    // console.log(chip)
    const { startDate, monthYear } = this.props
    if (!rest[0].target || typeof rest[0].target.dataIndex !== "number") {
      return
    }
    let index = rest[0].target.dataIndex

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

  getOption = () => {
    return {
      ...defaultOption,
      color: [this.props.color],
      yAxis: [
        {
          ...yAxisDefaults,
          // max: this.props.groupingMax,
          max: this.state.roundedMax,
          min: 0,
          // interval: this.props.groupingMax / 7,
          interval: this.state.roundedMax / 6,
          splitNumber: 5
        },
      ],
      series: [
        {
          name: this.props.type.charAt(0).toUpperCase() + this.props.type.slice(1),
          ...seriesDefaults,
          label: {
            show: true,
            color: 'black',
            formatter: params => {
              if (params.data > 0) {
                return params.data
              } else {
                return ''
              }
            }
          },
          data: this.props.data.weekBar.items,
        }
      ]
    }
  }

  render() {
    const { empty, error } = this.props

    return (
      <div className='week-bar'>
        {/* Loader */}
        {!error && (empty && !this.state.preLoaded) && <div></div>}

        {/* Error */}
        {error && `error: ${error}`}

        {(this.state.preLoaded || !empty) && <ReactEcharts option={this.getOption()} ref={e => {
          this.echartsReactRef = e
        }} />}
      </div>
    )
  }
}

export default withRouter(weekBar)


