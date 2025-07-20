import Summary from "./Summary";
import ProjectionGraph from "./ProjectionGraph";
import RevenueGraph from "./RevenueGraph";
import RevenueByLocation from "./RevenueByLocation";
import { SUMMARIES, LOCATIONS } from "../../../mocks";
import {
  PROJECTION_GRAPH_CONFIG,
  REVENUE_GRAPH_CONFIG,
  REVENUE_MAP_CONFIG,
} from "../constants";

function Default() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex gap-7">
        <div className="flex flex-1/2">
          <Summary summaries={SUMMARIES} />
        </div>
        <div className="flex-1/2">
          <ProjectionGraph config={PROJECTION_GRAPH_CONFIG} />
        </div>
      </div>
      <div className="flex gap-7 flex-col md:flex-row">
        <div className="flex-2/3">
          <RevenueGraph config={REVENUE_GRAPH_CONFIG} />
        </div>
        <div className="flex-1/3">
          <RevenueByLocation
            config={REVENUE_MAP_CONFIG}
            locations={LOCATIONS}
          />
        </div>
      </div>
    </div>
  );
}

export default Default;
