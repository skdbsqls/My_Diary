import { useNavigate } from "react-router-dom";

import classes from "./Modal.module.css";

const Modal = ({ children }) => {
  const navigate = useNavigate();

  const closeHandler = () => {
    // navigate("/");
    navigate("..");
  };
  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <dialog className={classes.modal} open={true}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
