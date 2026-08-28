import React from "react";

export default function GadgetTable({
  data = [],
  onSelectRow = () => {},
  selectedId = null,
  roleFilter = "All",
  setRoleFilter = () => {},
}) {
  const filteredData =
    roleFilter === "All"
      ? data
      : data.filter((item) => item.userRole === roleFilter);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Registered Gadgets</h2>
          <p className="text-slate-500 text-xs mt-0.5">
            Showing {filteredData.length} item{filteredData.length !== 1 ? "s" : ""}
          </p>
        </div>

        <div className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-xl border border-slate-200">
          <span className="text-xs font-semibold text-slate-500 pl-2">Filter:</span>
          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="bg-white text-slate-800 text-xs font-semibold py-1.5 px-3 rounded-lg border border-slate-200 outline-none focus:ring-2 focus:ring-blue-200 cursor-pointer"
          >
            <option value="All">All Roles</option>
            <option value="Engineer">Engineer</option>
            <option value="Tester">Tester</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200 text-slate-500 text-[11px] font-bold uppercase tracking-wider">
              <th className="p-4">Gadget Name</th>
              <th className="p-4">Category</th>
              <th className="p-4">Manufacturer</th>
              <th className="p-4">Health Rating</th>
              <th className="p-4">Brand</th>
              <th className="p-4">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 text-sm">
            {filteredData.length > 0 ? (
              filteredData.map((item) => {
                const isSelected = selectedId === item.id;
                return (
                  <tr
                    key={item.id}
                    onClick={() => onSelectRow(item)}
                    className={`cursor-pointer transition-all ${
                      isSelected
                        ? "bg-blue-50/80 font-medium"
                        : "hover:bg-slate-50"
                    }`}
                  >
                    <td className="p-4 text-slate-900 font-semibold">{item.gadgetName}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-medium">
                        {item.category}
                      </span>
                    </td>
                    <td className="p-4 text-slate-600">{item.manufacturer}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <div className="w-16 bg-slate-100 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-full rounded-full ${
                              item.healthRating > 75
                                ? "bg-emerald-500"
                                : item.healthRating > 40
                                ? "bg-amber-500"
                                : "bg-red-500"
                            }`}
                            style={{ width: `${Math.min(item.healthRating, 100)}%` }}
                          />
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-700">
                          {item.healthRating}%
                        </span>
                      </div>
                    </td>
                    <td className="p-4 text-slate-600">{item.brandName}</td>
                    <td className="p-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                          item.userRole === "Engineer"
                            ? "bg-blue-100 text-blue-700 border border-blue-200"
                            : "bg-emerald-100 text-emerald-700 border border-emerald-200"
                        }`}
                      >
                        {item.userRole}
                      </span>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-10 text-slate-400">
                  <p className="text-sm font-medium">No gadgets registered yet.</p>
                  <p className="text-xs text-slate-400 mt-1">Fill out the form above to add an item.</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}