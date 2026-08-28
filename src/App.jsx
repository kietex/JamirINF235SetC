import React from "react";
import GadgetForm from "./components/GadgetForm";

export default function App() {
  const handleAddItem = (newItem) => {
    console.log("Submitted Gadget Data:", newItem);
    alert(`Successfully registered: ${newItem.gadgetName}`);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-8 flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6 text-slate-800">
        Testing GadgetForm Component
      </h1>
      <GadgetForm onAddItem={handleAddItem} />
    </div>
  );
}