// src/components/FilterBar.jsx
import React from "react";

const allJobTypes = [
  "All",
  "Toilet Waterproofing",
  "Terrace Waterproofing",
  "Overhead Tank Waterproofing",
  "Underground Tank Waterproofing",
  "Roof Waterproofing"
];

const FilterBar = ({ selectedFilters, onToggle }) => {
  return (
    <nav className="flex justify-center mb-8">
      <div className="inline-flex items-center flex-wrap gap-4">
        {allJobTypes.map((type) => {
          const isActive = selectedFilters.includes(type);
          return (
            <button
              key={type}
              onClick={() => onToggle(type)}
              className={`relative px-4 py-1.5 text-sm font-medium rounded-full shadow-md transition-all duration-300 ease-in-out
                ${
                  isActive
                    ? "bg-black text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
            >
              {isActive && (
                <span className="absolute inset-0 rounded-full -z-10 animate-fadeIn"></span>
              )}
              {type}
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default FilterBar;
