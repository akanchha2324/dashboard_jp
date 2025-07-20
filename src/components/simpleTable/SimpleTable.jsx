function SimpleTable({ title, rows, columns }) {
  return (
    <div className="p-6 bg-gray-100 rounded-lg w-full max-w-4xl mx-auto">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-gray-700">
          <thead className="border-b border-gray-300 text-gray-400">
            <tr>
              {columns.map(({ label, key }) => {
                return (
                  <th key={key} className="px-4 py-2 font-medium">
                    {label}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {rows.map((p, i) => (
              <tr key={i} className="">
                {columns.map(({ key }) => {
                  return (
                    <td key={key + i} className="px-4 py-3">
                      {p[key]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SimpleTable;
