import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// Local Components
import { Link } from "../components/Link";

const Post = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    const onMount = async () => {
      try {
        const { data: post } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}`
        );

        setPost(post);
      } catch (err) {
        console.log("err", err);
      }
    };

    onMount();
  }, [id]);

  useEffect(() => {
    const onMount = async () => {
      try {
        const { data: comments } = await axios.get(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );

        setComments(comments);
      } catch (err) {
        console.log("err", err);
      }
    };

    onMount();
  }, [post, id]);

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <Link to="/">
        <button
          style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
        >
          &#8592; &nbsp;
          <p>Return Home</p>
        </button>
      </Link>
      <div>
        <div
          style={{
            borderBottom: "1px solid rgba(32, 156, 255, 1)",
            paddingBottom: "20px"
          }}
        >
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
        <h3>Comments</h3>
        {comments.map((comment, i) => (
          <div
            key={comment.id}
            style={{
              marginBottom: "50px",
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShawdow: "0 18px 56px -18px rgb(22 45 61)",
              padding: "10px"
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p style={{ margin: "30px" }}>{i + 1}</p>
              <div>
                <p>{comment.body}</p>
                <h5 style={{ margin: "5px" }}>{comment.name}</h5>
                <h6 style={{ margin: "5px" }}>{comment.email}</h6>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Post };
