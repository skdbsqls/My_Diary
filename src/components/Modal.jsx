import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  return (
    <>
      <div className={classes.backdrop}></div>
      <dialog className={classes.modal} open={true}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
