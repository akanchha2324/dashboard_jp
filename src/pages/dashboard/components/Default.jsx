import Summary from "./Summary";
import ProjectionGraph from "./ProjectionGraph";
import { SUMMARIES } from "../../../mocks";
import { PROJECTION_GRAPH_CONFIG } from "../constants";

function Default() {
  return (
    <>
      <Summary summaries={SUMMARIES} />
      <ProjectionGraph projectionGraphConfig={PROJECTION_GRAPH_CONFIG} />
    </>
  );
}

export default Default;
