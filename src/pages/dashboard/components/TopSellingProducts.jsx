import SimpleTable from "../../../components/simpleTable/SimpleTable";
import { COLUMNS } from "../constants";
function TopSellingProducts({ products }) {
  return (
    <>
      <SimpleTable
        title={"Top Selling Products"}
        rows={products}
        columns={COLUMNS}
      />
    </>
  );
}

export default TopSellingProducts;
