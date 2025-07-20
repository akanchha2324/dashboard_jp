import BarGraph from "../../../components/barGraph/BarGraph";
function ProjectionGraph({ config }) {
  return (
    <div className="rounded-2xl">
      <BarGraph {...config} />
    </div>
  );
}

export default ProjectionGraph;
