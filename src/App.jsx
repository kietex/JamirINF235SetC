import React, { useState } from "react";
import GadgetForm from "./components/GadgetForm";
import GadgetTable from "./components/GadgetTable";

export default function App() {
  const [gadgets, setGadgets] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [roleFilter, setRoleFilter] = useState("All");

  const handleAddItem = (newItem) => {
    setGadgets((prev) => [newItem, ...prev]);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-6">
        <header className="text-center py-4">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Tech Gadget & Inventory Hub
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Manage and filter gadget hardware inventory
          </p>
        </header>

        <GadgetForm onAddItem={handleAddItem} />

        <GadgetTable
          data={gadgets}
          onSelectRow={setSelectedItem}
          selectedId={selectedItem?.id}
          roleFilter={roleFilter}
          setRoleFilter={setRoleFilter}
        />
      </div>
    </div>
  );
}