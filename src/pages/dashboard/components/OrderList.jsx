import DataTable from "../../../components/dataTable/DataTable";
import { ORDERS } from "../../../mocks";
import { ORDERS_COLUMNS } from "../constants";
function OrderList() {
  return (
    <>
      <DataTable columns={ORDERS_COLUMNS} rows={ORDERS}/>
    </>
  );
}

export default OrderList;
