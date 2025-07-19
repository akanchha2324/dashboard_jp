import * as echarts from "echarts";
import { WORLD_MAP } from "./world";
import { useEffect, useRef } from "react";

function GeoMap({ geo, series }) {
  const chartRef = useRef(null);

  useEffect(() => {
    const chart = echarts.init(chartRef.current);
    echarts.registerMap("world", WORLD_MAP);

    const option = {
      geo,
      series,
    };
    chart.setOption(option);

    return () => chart.dispose();
  }, [geo, series]);

  return <div ref={chartRef} style={{ height: "100%", width: "100%" }} />;
}

export default GeoMap;
