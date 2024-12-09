import image from "../assets/no-projects.png";
import Button from "./Button";
const NoProjectSelected = ({ onAddProject }) => {
  return (
    <div className="mt-24 text-center w-2/3">
      <img className="w-28 object-contain mx-auto" src={image} alt="image" />
      <h2 className="text-xl font-bold text-stone-500 my-4">
        No Project Selected
      </h2>
      <p className="text-stone-400 mb-4">
        Select a project or get started with a new one
      </p>
      <Button
        onClick={onAddProject}
        textContent="Create new Project"
        style="bg-stone-700 text-stone-300 hover:text-stone-100"
      />
    </div>
  );
};

export default NoProjectSelected;
