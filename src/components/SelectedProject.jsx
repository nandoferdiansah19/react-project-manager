import Button from "./Button";
import Tasks from "./Tasks";

const SelectedProject = ({
  project,
  onCancelProject,
  onDeleteProject,
  onAddTask,
  onDeleteTask,
}) => {
  const { id, title, description, dueDate, tasks } = project;
  const formattedDate = new Date(dueDate).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <section className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-stone-600 mb-2">{title}</h1>
          <div className="flex gap-2">
            <Button
              onClick={onCancelProject}
              textContent="Back"
              style="text-stone-100 bg-stone-800"
            />
            <Button
              onClick={() => onDeleteProject(id)}
              textContent="Delete"
              style="text-stone-50 hover:bg-red-600 bg-red-500"
            />
          </div>
        </div>
        <p className="mb-4 text-stone-400">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{description}</p>
      </header>
      <Tasks
        project={project}
        projectId={id}
        tasks={tasks}
        onAddTask={onAddTask}
        onDeleteTask={onDeleteTask}
      />
    </section>
  );
};

export default SelectedProject;
