import { forwardRef } from "react";

const InputForm = forwardRef(({ label, textarea, ...props }, ref) => {
  return (
    <div className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {textarea ? (
        <textarea ref={ref} className="input-style" {...props} />
      ) : (
        <input ref={ref} className="input-style" {...props} />
      )}
    </div>
  );
});

export default InputForm;
