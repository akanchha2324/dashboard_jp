import Summary from "./Summary";
import ProjectionGraph from "./ProjectionGraph";
import RevenueGraph from "./RevenueGraph";
import RevenueByLocation from "./RevenueByLocation";
import { SUMMARIES, LOCATIONS } from "../../../mocks";
import { PROJECTION_GRAPH_CONFIG, REVENUE_GRAPH_CONFIG, REVENUE_MAP_CONFIG } from "../constants";

function Default() {
  return (
    <div className="flex flex-col gap-4">
      <Summary summaries={SUMMARIES} />
      <ProjectionGraph config={PROJECTION_GRAPH_CONFIG} />
      <RevenueGraph config={REVENUE_GRAPH_CONFIG} />
      <RevenueByLocation config={REVENUE_MAP_CONFIG} locations={LOCATIONS}/>
    </div>
  );
}

export default Default;
