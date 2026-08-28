import React, { useState } from "react";

const CATEGORIES = ["Smartphone", "Laptop", "Wearable", "Audio"];

export default function GadgetForm({ onAddItem }) {
  const [formData, setFormData] = useState({
    gadgetName: "",
    category: "Smartphone",
    manufacturer: "",
    healthRating: "",
    brandName: "",
    userRole: "Engineer",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.gadgetName.trim() || formData.gadgetName.length < 3) {
      newErrors.gadgetName = "Name must be at least 3 characters";
    }
    if (!formData.manufacturer.trim()) {
      newErrors.manufacturer = "Manufacturer is required";
    }
    const rating = Number(formData.healthRating);
    if (!formData.healthRating || isNaN(rating) || rating < 1 || rating > 100) {
      newErrors.healthRating = "Rating must be 1–100";
    }
    if (!formData.brandName.trim()) {
      newErrors.brandName = "Brand Name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    onAddItem({
      ...formData,
      id: Date.now().toString(),
      healthRating: Number(formData.healthRating),
    });

    setFormData({
      gadgetName: "",
      category: "Smartphone",
      manufacturer: "",
      healthRating: "",
      brandName: "",
      userRole: "Engineer",
    });
    setErrors({});
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden mb-8">
      <div className="bg-slate-900 px-6 py-4 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-bold text-white">Add New Gadget</h2>
          <p className="text-slate-400 text-xs mt-0.5">Enter technical specifications into the inventory</p>
        </div>
        <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-full font-mono">
          Form
        </span>
      </div>

      <form onSubmit={handleSubmit} className="p-6 space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Gadget Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Gadget Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="gadgetName"
              value={formData.gadgetName}
              onChange={handleChange}
              placeholder="e.g. iPhone 15 Pro"
              className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                errors.gadgetName ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-blue-200"
              } rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-4 transition`}
            />
            {errors.gadgetName && (
              <p className="text-red-500 text-xs mt-1 font-medium">{errors.gadgetName}</p>
            )}
          </div>

          {/* Category */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-200 transition"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Manufacturer */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Manufacturer <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="manufacturer"
              value={formData.manufacturer}
              onChange={handleChange}
              placeholder="e.g. Apple Inc."
              className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                errors.manufacturer ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-blue-200"
              } rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-4 transition`}
            />
            {errors.manufacturer && (
              <p className="text-red-500 text-xs mt-1 font-medium">{errors.manufacturer}</p>
            )}
          </div>

          {/* Tech Brand Name */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Tech Brand Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="brandName"
              value={formData.brandName}
              onChange={handleChange}
              placeholder="e.g. Apple"
              className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                errors.brandName ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-blue-200"
              } rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-4 transition`}
            />
            {errors.brandName && (
              <p className="text-red-500 text-xs mt-1 font-medium">{errors.brandName}</p>
            )}
          </div>

          {/* Health Rating */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              Health Rating (1–100) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="healthRating"
              value={formData.healthRating}
              onChange={handleChange}
              placeholder="e.g. 95"
              className={`w-full px-3.5 py-2.5 bg-slate-50 border ${
                errors.healthRating ? "border-red-400 focus:ring-red-200" : "border-slate-200 focus:ring-blue-200"
              } rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-4 transition`}
            />
            {errors.healthRating && (
              <p className="text-red-500 text-xs mt-1 font-medium">{errors.healthRating}</p>
            )}
          </div>

          {/* User Role Radio Toggle */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 mb-1.5">
              User Role
            </label>
            <div className="grid grid-cols-2 gap-2 p-1 bg-slate-100 rounded-xl border border-slate-200">
              {["Engineer", "Tester"].map((role) => (
                <label
                  key={role}
                  className={`flex items-center justify-center py-2 px-3 rounded-lg text-xs font-semibold cursor-pointer transition-all ${
                    formData.userRole === role
                      ? "bg-white text-slate-900 shadow-sm"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  <input
                    type="radio"
                    name="userRole"
                    value={role}
                    checked={formData.userRole === role}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  {role}
                </label>
              ))}
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-xl shadow-sm hover:shadow transition-all text-sm flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Save Gadget</span>
        </button>
      </form>
    </div>
  );
}