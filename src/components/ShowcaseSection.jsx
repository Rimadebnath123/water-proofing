import React, { useEffect, useState } from "react";
import projectsData from "../data/projectsData";
import FilterBar from "./FilterBar";
import Footer from "./Footer";

const ProjectCard = ({ project, currentImage, currentJobType }) => {
  return (
    <div className="min-w-[300px] md:min-w-[350px] bg-white rounded-lg overflow-hidden shadow-md snap-start transition-transform duration-300 hover:shadow-lg hover:-translate-y-1">
      <div className="relative h-60 overflow-hidden">
        {currentImage && (
          <img
            src={currentImage}
            alt={`${project.client} project`}
            className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        )}
        {/* Single tag for current job type */}
        {currentJobType && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-white/20 text-white backdrop-blur-sm">
              {currentJobType}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{project.client}</h3>
        <p className="text-sm text-gray-500">{project.location}</p>
        <p className="text-xs text-gray-400">{project.state}</p>
      </div>
    </div>
  );
};

const ShowcaseSection = () => {
  const [selectedFilters, setSelectedFilters] = useState(["All"]);
  const [imageIndexes, setImageIndexes] = useState({});

  const toggleFilter = (type) => {
    if (type === "All") {
      setSelectedFilters(["All"]);
    } else {
      setSelectedFilters((prev) => {
        const updated =
          prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type];
        return updated.length ? updated.filter((t) => t !== "All") : ["All"];
      });
    }
  };

  const filteredProjects =
    selectedFilters.includes("All") || selectedFilters.length === 0
      ? projectsData
      : projectsData.filter((project) =>
          selectedFilters.every((filter) => project.jobTypes.includes(filter))
        );

  const getMatchingImages = (project) => {
    if (!project.images) return [];
    if (selectedFilters.includes("All")) {
      return Object.entries(project.images).flatMap(([type, imgs]) =>
        imgs.map((img) => ({ img, type }))
      );
    }
    return selectedFilters.flatMap((filter) =>
      (project.images[filter] || []).map((img) => ({ img, type: filter }))
    );
  };

  // Auto-advance image index every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prevIndexes) => {
        const newIndexes = {};
        filteredProjects.forEach((project) => {
          const key = project.client;
          const images = getMatchingImages(project);
          if (images.length > 0) {
            const current = prevIndexes[key] || 0;
            newIndexes[key] = (current + 1) % images.length;
          }
        });
        return newIndexes;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [filteredProjects, selectedFilters]);

  return (
    <>
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-3">Waterproofing Work Showcase</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          Select a job type to view related images for each project.
        </p>

        {/* New pill-style filter bar */}
        <FilterBar selectedFilters={selectedFilters} onToggle={toggleFilter} />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {filteredProjects.map((project, index) => {
            const imagesWithTypes = getMatchingImages(project);
            const currentIndex = imageIndexes[project.client] || 0;
            const currentData = imagesWithTypes[currentIndex] || {};
            return (
              <ProjectCard
                key={index}
                project={project}
                currentImage={currentData.img}
                currentJobType={currentData.type}
              />
            );
          })}
        </div>
      </div>
    </section>
    <Footer />
    </>
  );
};

export default ShowcaseSection;
