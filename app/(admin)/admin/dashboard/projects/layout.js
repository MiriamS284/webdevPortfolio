import ProjectsMenu from "../../../../_components/ProjectsMenu";

export default function ProjectLayout({ children }) {
  return (
    <div className="min-h-screen bg-gray-100 flex">
      <div className="w-1/4 bg-white shadow-lg p-4 rounded-lg">
        <ProjectsMenu />
      </div>

      <div className="w-2/3 p-8">{children} </div>
    </div>
  );
}
