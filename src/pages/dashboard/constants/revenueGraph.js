export const REVENUE_GRAPH_CONFIG = {
  title: {
    text: `{main|Revenue} {divider| |} {dot1|●} {label|Current Week} {value|$58,211}   {dot2|●} {label|Previous Week} {value2|$68,768}`,
    left: 20,
    top: 10,
    textStyle: {
      rich: {
        main: {
          fontSize: 14,
          lineHeight: 20,
          fontWeight: "bold",
        },
        divider: {
            fontSize: 14,
            lineHeight: 20,
            color: '#1C1C1C33'
        },
        dot1: {
          color: "#000",
          fontSize: 14,
          padding: [0, 4, 0, 8],
        },
        dot2: {
          color: "#5B8FF9",
          fontSize: 14,
          padding: [0, 4, 0, 8],
        },
        label: {
          fontSize: 12,
          lineHeight: 18,
        },
        value: {
            fontSize: 12,
            lineHeight: 18,
          fontWeight: "bold",
          padding: [0, 12, 0, 4],
        },
        value2: {
          fontSize: 12,
          lineHeight: 18,
          fontWeight: "bold",
          padding: [0, 0, 0, 4],
        },
      },
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  backgroundColor: "#F7F9FB",
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    axisTick: { show: false },
    axisLabel: {
      color: "#999",
      fontWeight: 500,
    },
  },
  yAxis: {
    type: "value",
    interval: 1e7,
    axisLine: { show: false },
    axisTick: { show: false },
    axisLabel: {
      color: "#999",
      formatter: (value) => `${value / 1e6}M`,
    },
    max: function (value) {
      return Math.ceil(value.max / 1e7) * 1e7;
    },
    splitLine: {
      lineStyle: {
        color: "#eee",
      },
    },
  },
  series: [
    {
      name: "Previous Week",
      type: "line",
      smooth: true,
      lineStyle: {
        color: "#A8C5DA",
        width: 3,
      },
      symbol: "none",
      data: [5e6, 18e6, 12e6, 10e6, 14e6, 24e6],
    },
    {
      name: "Current Week",
      type: "line",
      smooth: true,
      lineStyle: {
        color: "#1C1C1C",
        width: 3,
      },
      symbol: "none",
      data: [12e6, 8e6, 8e6, 14e6, null, null],
    },
    {
      // Dashed continuation of Current Week
      name: "Current Week",
      type: "line",
      smooth: true,
      lineStyle: {
        color: "#1C1C1C",
        width: 3,
        type: "dashed",
      },
      symbol: "none",
      data: [null, null, null, 14e6, 18e6, 21e6],
    },
  ],
};
