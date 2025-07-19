import { LOCATIONS } from "../../../mocks/revenueByLocation";

export const REVENUE_MAP_CONFIG = {
  geo: {
    map: "world",
    roam: false,
    zoom: 1.2,
    center: [20, 0],
    itemStyle: {
      areaColor: "#A8C5DA",
      borderColor: "#FFFFFF",
    },
    emphasis: {
      disabled: true,
    },
  },
  series: [
    {
      type: "scatter",
      coordinateSystem: "geo",
      symbol: "circle",
      symbolSize: 4,
      itemStyle: {
        color: "#000",
      },
      data: LOCATIONS.map((loc) => ({
        name: loc.name,
        value: [...loc.coord, loc.value],
      })),
    },
  ],
};
