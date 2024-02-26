import classes from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
  return (
    <>
      <div className={classes.backdrop} onClick={onClose}></div>
      <dialog className={classes.modal} open={true}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
