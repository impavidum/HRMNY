import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

// Components
import Error from '../../Utility/Error/Error'
import Loader from '../../Utility/Loader/Loader'

// Constants 
import {
  desktopOption,
  mobileOption,
  visualMapDefault,
  seriesDefault,
  mobileSeriesLabelOption,
  desktopSeriesLabelOption
} from '../../../constants/defaultChartOptions/defaultOptionWeekDensity'

// Styles
import './week-density.scss'

// Moment
import moment from 'moment'

// Echarts
import ReactEcharts from 'echarts-for-react'

class WeekDensity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      preLoaded: false,
      roundedMax: 9
    }
  }


  componentDidUpdate(prevProps) {
    if (!this.state.preLoaded && !this.props.empty) {
      this.echartsInstance1 = this.echartsReactRef1.getEchartsInstance()
      this.echartsInstance2 = this.echartsReactRef2.getEchartsInstance()
      this.zr1 = this.echartsInstance1.getZr()
      this.zr2 = this.echartsInstance2.getZr()

      this.zr1.on('click', this.onWeekDensityClick)
      this.zr2.on('click', this.onWeekDensityClick)
      this.setState({ preLoaded: true })
    }
  }

  static getDerivedStateFromProps(props, state) {
    if (props.week) {
      let roundedMax = Math.ceil(props.week.max / 9.0) * 9
      if (roundedMax > 0) {
        return { roundedMax }
      }
    }
    return null
  }

  onWeekDensityClick = (...rest) => {
    this.setState({preLoaded: false})
    const { startDate } = this.props
    if (!rest[0].target || typeof rest[0].target.dataIndex !== "number") {
      return
    }
    let index = rest[0].target.dataIndex
    let yIndex = Math.floor(index / 24)
    let xIndex = index % 24

    // For Query
    // const getSelectedDayInt = () => {
    //   let startDateDayInt = moment(startDate).date()
    //   return startDateDayInt + yIndex
    // }
    // let selectedDayInt = getSelectedDayInt()
    // let selectedDay = startDate.getDate()
    // let hourDayMonthYear = `h${xIndex}d${selectedDayInt}${monthYear}`

    // Get Start/End Moments
    let year = moment(startDate).year()
    let month = moment(startDate).month()
    let day = startDate.getDate() + yIndex
    let endDateMoment = new Date(year, month, day, xIndex, 59, 59)
    let startDateMoment = new Date(year, month, day, xIndex, 0, 0)

    // Create Subtitle
    let dayMonthDateString = moment(startDateMoment).format('dddd, MMMM Do')
    let hourStart = moment(startDate).hour(xIndex).format('ha')
    let hourEnd = moment(startDate).hour(xIndex + 1).format('ha')
    let formattedDateString = `${dayMonthDateString}, ${hourStart} - ${hourEnd}`

    // Send Data To Grouping
    this.props.onChartClick({
      formattedDateString: formattedDateString, // For View
      startDateMoment: startDateMoment,// For Filter Query
      endDateMoment: endDateMoment // For Filter Query
      // dateRange: hourDayMonthYear, // For Query
      // rangeType: 'hdmy'
    })
  }

  updateCount = (width) => {
    if (width > 1050 && width < 1500) {
      this.setState({ count: 21 })
      this.updateEvents()
    } else {
      this.setState({ count: 9 })
      this.updateEvents()
    }
  }

  updateEvents = () => {
    this.setState({
      pageCount: this.props.store.weekByTriggerObject.length / this.state.count,
      events: this.props.store.weekByTriggerObject.slice(0, this.state.count)
    })
  }

  handlePageClick = data => {
    let page = data.selected
    this.setState({ events: this.props.store.weekByTriggerObject.slice(page * this.state.count, page * this.state.count + this.state.count) })
  }

  getOption = orientation => {
    switch(orientation) {
      case 'desktop':
      return {
        ...desktopOption,
        visualMap: {
          max: this.state.roundedMax,
          ...visualMapDefault
        },
        series: [
          {
            ...seriesDefault,
            data: this.props.week.itemDensity.map(function (item) {
              return [item[1], item[0], item[2]];
            }),
            ...desktopSeriesLabelOption,
          }
        ]
      }
    case 'mobile':
      return {
        ...mobileOption,
        visualMap: {
          max: this.state.roundedMax,
          itemGap: 25,
          width: '100%',
          ...visualMapDefault
        },
        series: [
          {
            ...seriesDefault,
            data: this.props.week.itemDensity,
            ...mobileSeriesLabelOption,
          }
        ]
      }
    }
  }

  render() {
    const { empty, error } = this.props
    return (
      <div className='week-density'>

        {/* Loader */}
        {(empty && !this.state.preLoaded) && <Loader />}

        {/* Error */}
        {error && <Error error={error} />}

        {/* Desktop */}
        {!error && (this.state.preLoaded || !empty) && <div className='chart-desktop'>
          <ReactEcharts ref={e => { this.echartsReactRef1 = e }} option={this.getOption('desktop')} style={{ height: 625 }} />
        </div>
        }

        {/* Mobile */}
        {!error && (this.state.preLoaded || !empty) && <div className='chart-mobile'>
          <ReactEcharts ref={e => { this.echartsReactRef2 = e }} option={this.getOption('mobile')} style={{ height: 625 }} />
        </div>
        }

      </div>
    )
  }
}

export default withRouter(WeekDensity)







// mobileData.forEach((item, index, array)=>{
//   let temp = item[0];
//   item[0] = item[1]
//   item[1] = temp
//   array[index] = item
// })

// mobileData = mobileData.map(function(item) {
//   return [item[1], item[0], item[2] || '-']
// })

