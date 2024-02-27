// import { useState } from "react";
import { Link, Form, redirect } from "react-router-dom";

import Modal from "../components/Modal";
import classes from "./NewPost.module.css";

function NewPost() {
  // const [name, setName] = useState("");
  // const [body, setBody] = useState("");

  // const nameChangeHandler = (event) => {
  //   setName(event.target.value);
  // };
  // const bodyChangeHandler = (event) => {
  //   setBody(event.target.value);
  // };

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   const postData = {
  //     name,
  //     body,
  //   };
  //   fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // };

  return (
    <Modal>
      <Form method="post" className={classes.form}>
        <p>
          <label htmlFor="name">Your name</label>
          <input type="text" id="name" name="name" required />
        </p>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export const action = async ({ request }) => {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);
  await fetch("http://localhost:8080/posts", {
    method: "POST",
    body: JSON.stringify(postData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return redirect("/");
};
