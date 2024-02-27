import { useState } from "react";
import { Link } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost({ onAddPost }) {
  const [name, setName] = useState("");
  const [body, setBody] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const postData = {
      name,
      body,
    };
    onAddPost(postData);
    // onCancel();
  };

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" required onChange={nameChangeHandler} />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </form>
    </Modal>
  );
}

export default NewPost;
