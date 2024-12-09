import { useRef, useState } from "react";
import NewTask from "./NewTask";
import Modal from "./Modal";
import Button from "./Button";

const Tasks = ({ tasks, projectId, onAddTask, onDeleteTask }) => {
  const modal = useRef();
  const [enteredTask, setEnteredTask] = useState("");

  const handleTaskChange = (event) => {
    setEnteredTask(event.target.value);
  };

  const handleAddTask = () => {
    if (enteredTask.trim() === "") {
      modal.current.open();
      return;
    }
    const newTask = {
      id: Math.random(),
      text: enteredTask,
    };
    onAddTask(projectId, newTask);
    setEnteredTask("");
  };
  return (
    <>
      <Modal ref={modal}>
        <h1 className="text-xl font-bold text-stone-500 my-4">
          Invalid Input Task!
        </h1>
        <p className="text-stone-400">
          Oops... looks like you forgot to enter a value
        </p>
        <p className="text-stone-400 mb-4">
          Please make sure you provide a valid value for every input field.
        </p>
        <form method="dialog" className="text-right">
          <Button textContent="Close" style="bg-stone-800 text-stone-200" />
        </form>
      </Modal>
      <section>
        <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
        <NewTask
          enteredTask={enteredTask}
          onChangeEnteredTask={handleTaskChange}
          onAddTask={handleAddTask}
        />
        {tasks.length === 0 && (
          <p className="text-stone-400 my-4">
            This project does not have any tasks yet.
          </p>
        )}

        {tasks.length > 0 && (
          <ul className="p-4 mt-8 rounded-lg bg-stone-100 text-stone-100">
            {tasks.map((task) => (
              <li
                key={task.id}
                className="flex justify-between my-4 bg-stone-800 py-2 px-4 rounded-md"
              >
                <span>{task.text}</span>
                <button
                  onClick={() => onDeleteTask(projectId, task.id)}
                  className="text-red-500 hover:text-red-600"
                >
                  Clear
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Tasks;
