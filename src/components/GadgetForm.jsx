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
      newErrors.gadgetName = "Gadget Name must be at least 3 characters.";
    }
    if (!formData.manufacturer.trim()) {
      newErrors.manufacturer = "Manufacturer is required.";
    }
    const rating = Number(formData.healthRating);
    if (!formData.healthRating || isNaN(rating) || rating < 1 || rating > 100) {
      newErrors.healthRating = "Health Rating must be between 1 and 100.";
    }
    if (!formData.brandName.trim()) {
      newErrors.brandName = "Tech Brand Name is required.";
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
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-lg max-w-lg mx-auto mb-8 border border-gray-100"
    >
      <h2 className="text-2xl font-bold mb-6 text-slate-800 border-b pb-2">
        Register Tech Gadget
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Gadget Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="gadgetName"
          value={formData.gadgetName}
          onChange={handleChange}
          placeholder="e.g. Galaxy S24 Ultra"
          className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.gadgetName && (
          <p className="text-red-500 text-xs mt-1 font-medium">{errors.gadgetName}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Category
        </label>
        <select
          name="category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none bg-white"
        >
          {CATEGORIES.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Manufacturer <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="manufacturer"
          value={formData.manufacturer}
          onChange={handleChange}
          placeholder="e.g. Samsung"
          className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.manufacturer && (
          <p className="text-red-500 text-xs mt-1 font-medium">{errors.manufacturer}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Health Rating (1–100) <span className="text-red-500">*</span>
        </label>
        <input
          type="number"
          name="healthRating"
          value={formData.healthRating}
          onChange={handleChange}
          placeholder="e.g. 98"
          className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.healthRating && (
          <p className="text-red-500 text-xs mt-1 font-medium">{errors.healthRating}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-1">
          Tech Brand Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="brandName"
          value={formData.brandName}
          onChange={handleChange}
          placeholder="e.g. Samsung Electronics"
          className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none"
        />
        {errors.brandName && (
          <p className="text-red-500 text-xs mt-1 font-medium">{errors.brandName}</p>
        )}
      </div>

      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          User Role
        </label>
        <div className="flex gap-6">
          <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-700">
            <input
              type="radio"
              name="userRole"
              value="Engineer"
              checked={formData.userRole === "Engineer"}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            Engineer
          </label>
          <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-700">
            <input
              type="radio"
              name="userRole"
              value="Tester"
              checked={formData.userRole === "Tester"}
              onChange={handleChange}
              className="w-4 h-4 text-blue-600 focus:ring-blue-500"
            />
            Tester
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg hover:bg-blue-700 transition shadow-md"
      >
        Submit Item
      </button>
    </form>
  );
}