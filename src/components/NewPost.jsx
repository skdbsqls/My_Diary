import classes from "./NewPost.module.css";

function NewPost(props) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="name">작성자</label>
        <input type="text" id="name" required onChange={props.onNameChange} />
      </p>
      <p>
        <label htmlFor="body">내용</label>
        <textarea id="body" required rows={3} onChange={props.onBodyChange} />
      </p>
    </form>
  );
}

export default NewPost;
