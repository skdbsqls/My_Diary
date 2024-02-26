import classes from "./NewPost.module.css";

function NewPost() {
  const changeBodyHandler = (event) => {
    console.log(event.target.value);
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
      </p>
    </form>
  );
}

export default NewPost;
