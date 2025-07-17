import SummaryCard from "../../../components/summaryCard/SummaryCard";
function Summary({ summaries }) {
  return (
    <div className="summary flex flex-wrap gap-[2%]">
      {summaries.map((summary) => {
        return <SummaryCard key={summary.id} {...summary} />;
      })}
    </div>
  );
}

export default Summary;
