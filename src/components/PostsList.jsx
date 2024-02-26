import { useState } from "react";

import Post from "./Post";
import Modal from "./Modal";
import NewPost from "./NewPost";

import classes from "./PostsList.module.css";

const PostsList = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [body, setBody] = useState("");
  const [name, setName] = useState("");

  const hideModalHandler = () => {
    setIsVisible(false);
  };
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
      {isVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onNameChange={nameChangeHandler}
          />
        </Modal>
      )}
      <ul className={classes.posts}>
        <Post author={name} body={body} />
        <Post author="맹구" body="나는 맹구야" />
      </ul>
    </>
  );
};

export default PostsList;
