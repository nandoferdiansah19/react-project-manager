import Button from "./Button";

const Sidebar = ({ onAddProject, projects, onSelectedProject, projectId }) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <Button
        onClick={onAddProject}
        textContent="+Add Project"
        style="bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100"
      />
      <ul className="mt-8">
        {projects?.map((project) => {
          return (
            <li key={project.id}>
              <Button
                onClick={() => onSelectedProject(project.id)}
                textContent={project.title}
                style={`w-full text-left mt-1 font-semibold uppercase text-stone-400 hover:text-stone-200 hover:bg-stone-800 ${
                  project.id == projectId
                    ? "bg-stone-800 text-stone-200"
                    : undefined
                }`}
              />
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
