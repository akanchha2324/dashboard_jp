import GeoMap from "../../../components/geoMap/GeoMap";
import ProgressBar from "../../../components/progressBar/Progressbar";

function RevenueByLocation({ config, locations }) {
  return (
    <div className="revenue-by-location flex flex-col min-w-[202px] p-6 gap-4 bg-[#F7F9FB]">
      <div className="title font-semibold text-sm/5 text-[#1C1C1C]">
        Revenue By Location
      </div>
      <div className="map w-full">
        <GeoMap {...config} />
      </div>
      <div className="flex flex-col gap-4">
        {locations.map(({ name, value, id }) => {
          return (
            <ProgressBar
              key={id}
              label={name}
              value={`${value}K`}
              percentage={value}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RevenueByLocation;
