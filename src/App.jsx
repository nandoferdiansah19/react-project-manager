import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });

  // Handle Project
  const handleAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  };

  const handleSaveProject = (newProject) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  };

  const handleCancelAddProject = () => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  };

  const handleSelectedProject = (id) => {
    setProjectsState((prevState) => {
      const selectedProjectId = prevState.projects.find(
        (project) => project.id === id
      );
      return {
        ...prevState,
        selectedProjectId,
      };
    });
  };

  const handleDeleteProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter((project) => project.id !== id),
      };
    });
  };

  // Handle Tasks
  const handleAddTask = (projectId, newTask) => {
    setProjectsState((prevState) => {
      const findProjectIndex = prevState.projects.findIndex(
        (project) => project.id === projectId
      );

      if (findProjectIndex === -1) {
        console.info("Project not found");
        return prevState;
      }

      const updateProject = [...prevState.projects];
      const selectedProject = { ...updateProject[findProjectIndex] };

      selectedProject.tasks = [...selectedProject.tasks, newTask];

      updateProject[findProjectIndex] = selectedProject;

      return {
        ...prevState,
        selectedProjectId: selectedProject,
        projects: updateProject,
      };
    });
  };

  const handleDeleteTask = (projectId, taskId) => {
    setProjectsState((prevState) => {
      const findProjectIndex = prevState.projects.findIndex(
        (project) => project.id === projectId
      );

      if (findProjectIndex === -1) {
        console.info("Project not found");
        return prevState;
      }

      const updateProject = [...prevState.projects];
      const selectedProject = { ...updateProject[findProjectIndex] };

      selectedProject.tasks = [
        ...selectedProject.tasks.filter((task) => task.id !== taskId),
      ];

      updateProject[findProjectIndex] = selectedProject;
      return {
        ...prevState,
        selectedProjectId: selectedProject,
        projects: updateProject,
      };
    });
  };
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onAddProject={handleAddProject}
        projects={projectsState.projects}
        onSelectedProject={handleSelectedProject}
        projectId={projectsState?.selectedProjectId?.id}
      />
      {projectsState.selectedProjectId === undefined && (
        <NoProjectSelected onAddProject={handleAddProject} />
      )}
      {projectsState.selectedProjectId === null && (
        <NewProject
          onSaveProject={handleSaveProject}
          onCancelAddProject={handleCancelAddProject}
        />
      )}
      {projectsState.selectedProjectId && (
        <SelectedProject
          project={projectsState.selectedProjectId}
          onCancelProject={handleCancelAddProject}
          onDeleteProject={handleDeleteProject}
          onAddTask={handleAddTask}
          onDeleteTask={handleDeleteTask}
        />
      )}
    </main>
  );
}

export default App;
