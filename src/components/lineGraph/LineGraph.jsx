import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function LineGraph({
  title,
  backgroundColor,
  legend,
  grid,
  xAxis,
  yAxis,
  series,
}) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      title,
      backgroundColor,
      legend,
      grid,
      xAxis,
      yAxis,
      series,
    };
    if(xAxis && yAxis) {
        chart.setOption(option);
    }

    console.log("abc")

    return () => {
      chart.dispose();
    };
  }, [title, backgroundColor, legend, grid, xAxis, yAxis, series]);

  return <div ref={chartRef} style={{ height: 300, width: "100%" }} />;
}

export default LineGraph;
