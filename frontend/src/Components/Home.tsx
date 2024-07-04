import { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      async function fetchPost() {
        await axios
          .get(`${import.meta.env.VITE_BASE_URL}/post`, {
            withCredentials: true,
          })
          .then((data) =>   // @ts-ignore
          setPosts((prev) => (prev = data.data)))
          .catch((err) => {
            if (err.code === "ERR_NETWORK") {
                // @ts-ignore

              setError((prev) => (prev = err.code));
            }
          });
      }
      fetchPost();
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <>
      {error && <h1>Error Connecting Server</h1>}
      {/* {console.log(posts)} */}
      {!error && (
        <ul className="">
          {posts.map((post) => (
            // @ts-ignore
            <Post key={post._id} title={post.title} desc={post.desc} authorName={post.authorName} createdAt={post.createdAt}
            />
          ))}
        </ul>
      )}
    </>
  );
}
