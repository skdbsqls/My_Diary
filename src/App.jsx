import { useState } from "react";

import MainHeader from "./components/MainHeader";
import PostsList from "./components/PostsList";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  const showModalHandler = () => {
    setIsVisible(true);
  };
  const hideModalHandler = () => {
    setIsVisible(false);
  };

  return (
    <>
      <MainHeader onCreatePost={showModalHandler} />
      <main>
        <PostsList isPosting={isVisible} onStopPosting={hideModalHandler} />
      </main>
    </>
  );
}

export default App;
