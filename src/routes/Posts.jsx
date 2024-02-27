import { Outlet } from "react-router-dom";

import PostsList from "../components/PostsList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export const loader = async () => {
  const respose = await fetch("http://localhost:8080/posts");
  const resData = await respose.json();
  return resData.posts;
};
