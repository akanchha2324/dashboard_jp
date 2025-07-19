import Summary from "./Summary";
import ProjectionGraph from "./ProjectionGraph";
import RevenueGraph from "./RevenueGraph";
import { SUMMARIES } from "../../../mocks";
import { PROJECTION_GRAPH_CONFIG, REVENUE_GRAPH_CONFIG } from "../constants";

function Default() {
  return (
    <>
      <Summary summaries={SUMMARIES} />
      <ProjectionGraph config={PROJECTION_GRAPH_CONFIG} />
      <RevenueGraph config={REVENUE_GRAPH_CONFIG}/>
    </>
  );
}

export default Default;
