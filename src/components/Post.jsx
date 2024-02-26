const names = ["짱구", "맹구"];

const Post = (props) => {
  return (
    <div>
      <h2>제목</h2>
      <p>작성자 : {props.author}</p>
      <p>내용 : {props.body}</p>
    </div>
  );
};

export default Post;
