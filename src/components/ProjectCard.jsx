// ProjectCard.jsx
const ProjectCard = ({ client, location, workType, state }) => (
  <div className="bg-white p-4 shadow-md rounded-md border">
    <h3 className="text-lg font-semibold">{client}</h3>
    <p className="text-sm text-gray-600">{location}</p>
    <p className="text-sm text-gray-800 mt-1"><span className="font-medium">Type:</span> {workType}</p>
    <p className="text-xs text-gray-500 mt-1">📍 {state}</p>
  </div>
);

export default ProjectCard;