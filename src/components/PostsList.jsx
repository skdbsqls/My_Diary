import { useState } from "react";

import Post from "./Post";
import Modal from "./Modal";
import NewPost from "./NewPost";

import classes from "./PostsList.module.css";

const PostsList = ({ isPosting, onStopPosting }) => {
  const [body, setBody] = useState("");
  const [name, setName] = useState("");

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  // let modalContent;

  // if (isVisible) {
  //   modalContent = (
  //     <Modal onClose={hideModalHandler}>
  //       <NewPost
  //         onBodyChange={bodyChangeHandler}
  //         onNameChange={nameChangeHandler}
  //       />
  //     </Modal>
  //   );
  // }

  return (
    <>
      {/* {modalContent} */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onNameChange={nameChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={name} body={body} />
        <Post author="emily" body="Hello React!" />
      </ul>
    </>
  );
};

export default PostsList;
