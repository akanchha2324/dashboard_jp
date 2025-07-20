import PieChart from "../../../components/pieChart/PieChart";
function TotalSales({ totalSales }) {
  return (
    <>
      <PieChart data={totalSales} />
    </>
  );
}

export default TotalSales;
