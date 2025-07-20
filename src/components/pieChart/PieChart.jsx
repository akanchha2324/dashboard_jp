import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

function TotalSalesChart({
    data
}) {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!chartRef.current) return;
    chartInstance.current = echarts.init(chartRef.current);

    chartInstance.current.setOption({
      tooltip: {
        trigger: "item",
        backgroundColor: "rgba(28, 28, 28, 0.8)",
        padding: 1,
        textStyle: {
            color: '#fff',
            fontSize: '12px',
            lineHeight: '18px'
        },
        borderColor: '#000',
        formatter: "{d}%",
      },
      series: [
        {
          name: "Total Sales",
          type: "pie",
          radius: ["50%", "80%"],
          center: ["50%", "50%"],
          label: { show: false },
          emphasis: { scale: false },
          data,
        },
      ],
    });

    // Make responsive
    const observer = new ResizeObserver(() => {
      chartInstance.current?.resize();
    });
    observer.observe(chartRef.current);

    return () => {
      chartInstance.current?.dispose();
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#f7f8fa] rounded-xl p-4 w-[250px]">
      <h2 className="font-semibold text-sm mb-4">Total Sales</h2>
      <div className="w-full h-[150px]" ref={chartRef} />
      <div className="mt-4 mb-1 text-sm space-y-2">
        <LegendDot label="Direct" color="#111111" value={300.56} />
        <LegendDot label="Affiliate" color="#B7F3CC" value={135.18} />
        <LegendDot label="Sponsored" color="#9BA8FF" value={154.02} />
        <LegendDot label="E-mail" color="#BDE7FB" value={48.96} />
      </div>
    </div>
  );
}

const LegendDot = ({ label, color, value }) => (
  <div className="flex items-center justify-between">
    <div className="flex items-center gap-2">
      <span
        className="w-2 h-2 rounded-full"
        style={{ backgroundColor: color }}
      />
      <span>{label}</span>
    </div>
    <span>${value.toFixed(2)}</span>
  </div>
);

export default TotalSalesChart;
