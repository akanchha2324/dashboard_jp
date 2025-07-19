import { nextMultipleOfTen } from "../../../common/utils";
export const PROJECTION_GRAPH_CONFIG = {
  title: {
    text: "Projections vs Actuals",
    left: 20,
    top: 10,
    textStyle: {
      fontWeight: "bold",
      fontSize: 14,
      lineHeight: 20,
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
    data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    axisLabel: {
      color: "#999",
    },
  },
  yAxis: {
    type: "value",
    max: function (value) {
      return nextMultipleOfTen(value.max);
    },
    axisLabel: {
      formatter: "{value}M",
      color: "#999",
    },
    interval: 10,
  },
  series: [
    {
      type: "bar",
      data: [20, 25, 22, 25, 18, 24], // This data will be fetched from API
      itemStyle: {
        color: "#90b7d9",
        opacity: 0.3,
        borderRadius: [4, 4, 0, 0],
      },
      barWidth: "25%",
    },
    {
      type: "bar",
      data: [18, 21, 19, 22, 15, 20], // This data will be fetched from API
      itemStyle: {
        color: "#90b7d9",
        borderRadius: [4, 4, 0, 0],
      },
      barGap: "-100%",
      barWidth: "25%",
    },
  ],
};
