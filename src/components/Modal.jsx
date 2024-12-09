import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(({ children }, ref) => {
  const dialogRef = useRef();

  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialogRef.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialogRef} className="backdrop:bg-stone-900/90 p-4 rounded-lg">
      {children}
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
