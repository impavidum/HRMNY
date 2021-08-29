
import React, { Component } from 'react';
import './chart-filter.scss';

import Filter from '../../Filter/Filter'

class ChartFilter extends Component {
  render() {
    return (
      <div className="chart-filter">
            <Filter week={this.props.week || false} {...this.props}/>
      </div>
    );
  }
}

export default ChartFilter;
