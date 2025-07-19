import BarGraph from "../../../components/barGraph/BarGraph";
function ProjectionGraph({ projectionGraphConfig }) {
  return (
    <>
      <BarGraph {...projectionGraphConfig} />
    </>
  );
}

export default ProjectionGraph;
