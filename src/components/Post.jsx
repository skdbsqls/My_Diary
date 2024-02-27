import { Link } from "react-router-dom";

import classes from "./Post.module.css";

const Post = (post) => {
  return (
    <li className={classes.post}>
      <Link to={post.id}>
        <p className={classes.author}>{post.name}</p>
        <p className={classes.text}>{post.body}</p>
      </Link>
    </li>
  );
};

export default Post;
