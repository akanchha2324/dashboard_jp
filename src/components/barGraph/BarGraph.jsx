import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function BarGraph({
  showTooltip,
  toolTip,
  title,
  grid,
  xAxis,
  yAxis,
  backgroundColor,
  series,
}) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);

    const option = {
      title: title,
      grid: grid,
      toolTip: showTooltip && toolTip,
      backgroundColor: backgroundColor,
      xAxis: xAxis,
      yAxis: yAxis,
      series: series,
    };

    if (xAxis && yAxis) {
      chart.setOption(option);
    }

    return () => {
      chart.dispose();
    };
  }, [
    showTooltip,
    toolTip,
    title,
    grid,
    xAxis,
    yAxis,
    backgroundColor,
    series,
  ]);

  return <div className="w-full h-[250px] rounded-2xl" ref={chartRef} />;
}

export default BarGraph;
