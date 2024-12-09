import { useState } from "react";
import Button from "./Button";

const NewTask = ({ enteredTask, onChangeEnteredTask, onAddTask }) => {
  return (
    <div className="flex items-center gap-2">
      <input
        onChange={onChangeEnteredTask}
        type="text"
        className="w-64 px-3 py-2 rounded-md bg-stone-200"
        value={enteredTask}
      />
      <Button
        onClick={onAddTask}
        textContent="Add Task"
        style="text-stone-400 hover:text-stone-100 bg-stone-800"
      />
    </div>
  );
};

export default NewTask;
