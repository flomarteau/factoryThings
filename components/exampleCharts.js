import React from 'react';
import Echarts from 'native-echarts';

export default class exampleCharts extends React.Component {
  render() {
    const option = {
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        areaStyle: {}
    }]
};
    return (
      <Echarts option={option} height={300} />
    );
  }
}
