import Post from "./Post";
import NewPost from "./NewPost";
import { useState } from "react";
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
      <NewPost
        onBodyChange={bodyChangeHandler}
        onNameChange={nameChangeHandler}
      />
      <ul className={classes.posts}>
        <Post author={name} body={body} />
        <Post author="맹구" body="나는 맹구야" />
      </ul>
    </>
  );
};

export default PostsList;
