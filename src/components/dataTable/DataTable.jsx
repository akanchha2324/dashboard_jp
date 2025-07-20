import { FaEllipsisV } from "react-icons/fa";

const statusColor = {
  "In Progress": "text-indigo-500",
  "Complete": "text-emerald-500",
  "Pending": "text-sky-500",
  "Approved": "text-yellow-500",
  "Rejected": "text-gray-500",
};

function DataTable({columns, rows}) {
  return (
    <div className="data-table-container">
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 bg-white">
          <thead className="bg-gray-50">
            <tr className="text-left text-sm font-semibold text-gray-600">
              <th className="px-4 py-3">
                <input type="checkbox" />
              </th>
              {
                columns.map(({key, label}) => (
                  <th key={key} className="px-4 py-3">
                    {label}
                  </th>
                ))
              }
              <th className="px-4 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-sm">
            {rows.map((order) => (
              <tr key={order.orderId} className="hover:bg-gray-50">
                <td className="px-4 py-3">
                  <input type="checkbox" />
                </td>
                <td className="px-4 py-3 font-medium text-gray-800">{order.orderId}</td>
                <td className="px-4 py-3 flex items-center gap-2">
                  <img
                    src={order.avatar}
                    alt={order.user}
                    className="w-8 h-8 rounded-full"
                  />
                  {order.user}
                </td>
                <td className="px-4 py-3">{order.project}</td>
                <td className="px-4 py-3">{order.address}</td>
                <td className="px-4 py-3 text-gray-500">{order.date}</td>
                <td className="px-4 py-3">
                  <span className={`flex items-center gap-1 ${statusColor[order.status]}`}>
                    <span className="text-xl leading-none">•</span> {order.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-gray-400">
                  <FaEllipsisV />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Pagination */}
        <div className="flex justify-end items-center gap-2 p-4 text-sm text-gray-600">
          <button className="px-2">&lt;</button>
          <button className="w-7 h-7 rounded-full bg-gray-200 text-black">1</button>
          <button className="w-7 h-7 rounded-full hover:bg-gray-100">2</button>
          <button className="w-7 h-7 rounded-full hover:bg-gray-100">3</button>
          <button className="w-7 h-7 rounded-full hover:bg-gray-100">4</button>
          <button className="w-7 h-7 rounded-full hover:bg-gray-100">5</button>
          <button className="px-2">&gt;</button>
        </div>
      </div>
    </div>
  );
}

export default DataTable;
