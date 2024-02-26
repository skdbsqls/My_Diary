import Post from "./components/Post";

function App() {
  return (
    <>
      <header>
        <h1>게시판</h1>
      </header>
      <main>
        <Post author="짱구" body="나는 짱구야" />
        <Post author="맹구" body="나는 맹구야" />
      </main>
    </>
  );
}

export default App;
