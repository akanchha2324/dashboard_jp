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
    if (xAxis && yAxis) {
      chart.setOption(option);
    }
    // Resize handler
    const handleResize = () => {
      chart.resize();
    };

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      chart.dispose();
    };
  }, [title, backgroundColor, legend, grid, xAxis, yAxis, series]);

  return (
    <div
      ref={chartRef}
      className="rounded-2xl"
      style={{
        height: "100%",
        width: "100%",
        minHeight: "352px",
        borderRadius: "16px",
      }}
    />
  );
}

export default LineGraph;
