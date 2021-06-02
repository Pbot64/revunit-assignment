import React, { useState, useEffect } from "react";
import axios from "axios";
import Loader from "react-loader-spinner";
import Radium from "radium";

// Local Components
import { Filter } from "../components/Filter";
import { Link } from "../components/Link";

const PostList = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const onMount = async () => {
      try {
        const { data: posts } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );

        setAllPosts(posts);
      } catch (err) {
        console.log("err", err);
      }
    };

    onMount();
  }, []);

  const filterOnChange = e => setInputValue(e.target.value);

  if (allPosts.length === 0) {
    return (
      <>
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Loader type="Oval" color="#00BFFF" height={100} width={100} />
        </div>
      </>
    );
  } else {
    return (
      <div style={{ padding: "10px" }}>
        <Filter
          style={{ margin: "30px" }}
          filterOnChange={filterOnChange}
          inputValue={inputValue}
          labelText="Filter By Title"
        />
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {allPosts
            .filter(post =>
              post.title.toLowerCase().startsWith(inputValue.toLowerCase())
            )
            .map(post => (
              <Link key={post.id} to={`${post.id}`}>
                <div
                  key={post.id}
                  style={{
                    backgroundColor: "#fafafa",
                    borderRadius: "10px",
                    boxhadow: "0 18px 56px -18px rgba(22,45,61,0)",
                    cursor: "pointer",
                    margin: "10px",
                    padding: "20px",
                    transition: "0.15s",
                    ":hover": {
                      boxShadow: "0 2px 7px 0 rgba(0, 0, 0, 0.3)",
                      transform: "translateY(-3px)"
                    }
                  }}
                >
                  <li>{post.title}</li>
                </div>
              </Link>
            ))}
        </div>
      </div>
    );
  }
};

const StyledPostList = Radium(PostList);
export { StyledPostList as PostList };
