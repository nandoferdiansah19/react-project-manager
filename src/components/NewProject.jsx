import { useRef } from "react";
import InputForm from "./InputForm";
import Button from "./Button";
import Modal from "./Modal";

const NewProject = ({ onSaveProject, onCancelAddProject }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    // Form Validations
    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    // if valid input
    const newProject = {
      id: Math.random() * 100,
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      tasks: [],
    };
    onSaveProject(newProject);

    title.current.value = "";
    description.current.value = "";
    dueDate.current.value = "";
  };

  return (
    <>
      {/* Modal component if invalid input */}
      <Modal ref={modal}>
        <h1 className="text-xl font-bold text-stone-500 my-4">
          Invalid Input!
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

      {/* Form Add Project */}
      <div className="w-[35rem] mt-16">
        <menu className="flex justify-end">
          <Button
            onClick={onCancelAddProject}
            textContent="Cancel"
            style="text-stone-800 hover:text-stone-950"
          />
          <Button
            onClick={handleSave}
            textContent="Save"
            style="bg-stone-800 text-stone-50 hover:bg-stone-950"
          />
        </menu>
        <div className="">
          <InputForm ref={title} label="Title" type="text" />
          <InputForm ref={description} label="Description" textarea />
          <InputForm ref={dueDate} label="Due Date" type="date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;
