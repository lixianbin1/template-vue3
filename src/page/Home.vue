<template>
  <div id="main">
    <div id="echartsOne" class="echarts"></div>
    <div id="echartsTwo" class="echarts"></div>
    <div id="echartsThree" class="echarts"></div>
    <div id="echartsFour" class="echarts"></div>
  </div>
</template>

<script setup>
import { onMounted,ref } from 'vue'
import * as echarts from 'echarts';

onMounted(()=>{
  setEchart('echartsOne',OptionOne)
  // OptionTwo('echartsTwo')
  let ChartTwo = setEchart('echartsTwo',OptionTwo)
  setEchart('echartsThree',OptionThree)
  setEchart('echartsFour',OptionFour)
  setTimeOutTwo(ChartTwo)
})

//Echarts数据1
const OptionOne = ref({
  title: {
    text: '公司电器销量排名'
  },
  tooltip: {}, 
  xAxis: {
    data: ['冰箱', '空调', '电视', '洗衣机', '洗碗机', '油烟机']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
})
//设置Echarts自适应
const setEchart=(ID,Option)=>{
  let time = new Date().getTime()
  let value = 'myChart' + time
  window[value] = echarts.init(document.getElementById(ID));
  window[value].setOption(Option.value);
  window.addEventListener('resize',()=>{
    window[value].resize()
  })
  return window[value]
}

//Echarts数据2
const OptionTwo = ref({
  title: {
    text: '竞争公司电器销量排名'
  },
  xAxis: {
    max: 'dataMax'
  },
  yAxis: {
    type: 'category',
    data: ['格力', '美的', '小米', '美菱', 'TCL'],
    inverse: true,
    animationDuration: 300,
    animationDurationUpdate: 300,
    max: 4
  },
  series: [
    {
      realtimeSort: true,
      name: '冰箱销量排名',
      type: 'bar',
      data: [],
      label: {
        position: 'right',
        valueAnimation: true
      },
      itemStyle: {
        color: function (param) {
          switch(param.name){
            case '格力':
              return '#00008b';
            case '美的':
              return '#ffde00';
            case '小米':
              return '#003580';
            case '美菱':
              return '#003897';
            case 'TCL':
              return '#dc143c';
            default:
              return '#5470c6';
          }
        }
      },
    }
  ],
  animationDuration: 0,
  animationDurationUpdate: 3000,
  animationEasing: 'linear',
  animationEasingUpdate: 'linear'
})
const setTimeOutTwo=(ChartTwo)=>{
  const data = OptionTwo.value.series[0].data
  for (let i = 0; i < 5; ++i) {
    data.push(Math.round(Math.random() * 200));
  }
  function run() {
    for (var i = 0; i < data.length; ++i) {
      if (Math.random() > 0.9) {
        data[i] += Math.round(Math.random() * 2000);
      } else {
        data[i] += Math.round(Math.random() * 200);
      }
    }
    ChartTwo.setOption({
      series: [
        {
          type: 'bar',
          data
        }
      ]
    });
  }
  setInterval(function () {
    run();
  }, 3000);
  run();
}

//Echarts数据3
const OptionThree = ref({
  title: {
    text: '公司电器销量占比'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left',
    top: 40
  },
  series: [
    {
      name: '销量',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 5, name: '冰箱' },
        { value: 20, name: '空调' },
        { value: 36, name: '电视' },
        { value: 10, name: '洗衣机' },
        { value: 10, name: '洗碗机' },
        { value: 20, name: '油烟机' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
})

const OptionFour = ref({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['公司盈利', '电器盈利', '总盈利']
  },
  xAxis: [
    {
      type: 'category',
      data: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: '金额',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} W'
      }
    },
    {
      type: 'value',
      name: '百分比',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: '公司盈利',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' W';
        }
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
      ]
    },
    {
      name: '电器盈利',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' W';
        }
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
      ]
    },
    {
      name: '总盈利',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
    }
  ]
})

</script>

<style scoped>
#main{
  width: 100%;
  height: 100%;
}
.echarts{
  width: 50%;
  height: 50%;
  float: left;
}
</style>