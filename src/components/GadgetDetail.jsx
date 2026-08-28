import React from "react";

export default function GadgetDetail({ selectedItem }) {
  if (!selectedItem) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200 text-center">
        <p className="text-slate-400 text-sm font-medium">
          No gadget selected. Click a row in the table to inspect details.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className={`w-3 h-3 rounded-full ${
              selectedItem.healthRating > 75
                ? "bg-emerald-400"
                : selectedItem.healthRating > 40
                ? "bg-amber-400"
                : "bg-red-400"
            }`}
          />
          <h2 className="text-lg font-bold text-white">{selectedItem.gadgetName}</h2>
        </div>
        <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-mono">
          ID: #{selectedItem.id}
        </span>
      </div>

      <div className="p-6 space-y-5">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Category
            </p>
            <p className="text-sm font-semibold text-slate-800 mt-0.5">
              {selectedItem.category}
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              User Role
            </p>
            <span
              className={`inline-block mt-1 px-2.5 py-0.5 rounded-full text-xs font-bold ${
                selectedItem.userRole === "Engineer"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-emerald-100 text-emerald-700"
              }`}
            >
              {selectedItem.userRole}
            </span>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Manufacturer
            </p>
            <p className="text-sm font-semibold text-slate-800 mt-0.5">
              {selectedItem.manufacturer}
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl">
            <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
              Tech Brand
            </p>
            <p className="text-sm font-semibold text-slate-800 mt-0.5">
              {selectedItem.brandName}
            </p>
          </div>
        </div>

        <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-600 uppercase tracking-wider">
              Health Status
            </span>
            <span className="font-mono font-bold text-slate-800">
              {selectedItem.healthRating}%
            </span>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-300 ${
                selectedItem.healthRating > 75
                  ? "bg-emerald-500"
                  : selectedItem.healthRating > 40
                  ? "bg-amber-500"
                  : "bg-red-500"
              }`}
              style={{ width: `${Math.min(selectedItem.healthRating, 100)}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}