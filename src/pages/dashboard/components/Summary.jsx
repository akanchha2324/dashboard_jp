import SummaryCard from "../../../components/summaryCard/SummaryCard";
function Summary({ summaries }) {
  return (
    <div className="summary flex flex-wrap gap-4 flex-1">
      {summaries.map((summary) => {
        return (
          <div className="flex-1/4 mb-2">
            <SummaryCard key={summary.id} {...summary} />
          </div>
        );
      })}
    </div>
  );
}

export default Summary;
