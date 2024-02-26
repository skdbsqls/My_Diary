import { useState } from "react";
import classes from "./NewPost.module.css";

function NewPost() {
  const [body, setBody] = useState("");
  const changeBodyHandler = (event) => {
    setBody(event.target.value);
  };

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">작성자</label>
        <input type="text" id="name" required />
      </p>
      <p>
        <label htmlFor="body">내용</label>
        <textarea id="body" required rows={3} onChange={changeBodyHandler} />
        <p>{body}</p>
      </p>
    </form>
  );
}

export default NewPost;
