import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.post}>
      <h2>제목</h2>
      <p>작성자 : {props.author}</p>
      <p>내용 : {props.body}</p>
    </div>
  );
};

export default Post;
