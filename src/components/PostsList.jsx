import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostsList.module.css";

const PostsList = () => {
  return (
    <>
      <NewPost />
      <ul className={classes.posts}>
        <Post author="짱구" body="나는 짱구야" />
        <Post author="맹구" body="나는 맹구야" />
      </ul>
    </>
  );
};

export default PostsList;
