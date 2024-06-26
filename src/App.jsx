import React, { useState } from "react";
import Post from "./Post.jsx";

function App() {
  const [posts, setPosts] = useState(["demo post"]);
  const [inputValue, setInputValue] = useState("");

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  function handleClick() {
    setPosts([...posts, inputValue].reverse());
  }

  return (
    <>
      <header>
        <h1>Meows</h1>
      </header>

      <div className="post_box_container">
        <div className="post_box">
          <textarea
            onChange={handleChange}
            name="inputText"
            id="inputText"
            placeholder="meow meow?"
          ></textarea>
          <button id="postBtn" onClick={handleClick}>
            post
          </button>
        </div>
      </div>
      <div className="news_feed">
        {posts.map((post) => (
          <Post string={post}></Post>
        ))}
      </div>
    </>
  );
}

export default App;
