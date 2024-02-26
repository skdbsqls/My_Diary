const names = ["짱구", "맹구"];

const Post = () => {
  const choseName = Math.random() > 0.5 ? names[0] : names[1];

  return (
    <div>
      <h2>제목</h2>
      <p>작성자 : {choseName}</p>
      <p>내용</p>
    </div>
  );
};

export default Post;
