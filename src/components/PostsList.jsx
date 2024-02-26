import { useState } from "react";

import Post from "./Post";
import Modal from "./Modal";
import NewPost from "./NewPost";

import classes from "./PostsList.module.css";

const PostsList = () => {
  const [body, setBody] = useState("");
  const [name, setName] = useState("");

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <Modal>
        <NewPost
          onBodyChange={bodyChangeHandler}
          onNameChange={nameChangeHandler}
        />
      </Modal>
      <ul className={classes.posts}>
        <Post author={name} body={body} />
        <Post author="맹구" body="나는 맹구야" />
      </ul>
    </>
  );
};

export default PostsList;
