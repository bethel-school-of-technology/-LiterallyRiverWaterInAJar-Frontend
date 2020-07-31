import React, { useState, useEffect } from "react";
import axios from "axios";

const About = () => {
  // GET testimonials from database
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/testimonials/about")
      .then((data) => data.json())
      .then((data) => {
        setPostList(data.posts);
        console.log(data);
      });
  }, []);

  let newPost = postList.map((post, index) => {
    return <li key={index}>{post.PostBody}</li>;
  });

  // POST testimonials to database
  const [post, setPost] = useState("");
  console.log(post);
  const handleSubmit = (event) => {
    // event.preventDefault();
    const newPost = {
      postBody: post,
    };
    axios
      .post("http://localhost:3001/testimonials/about", { newPost })
      .then((response) => {
        console.log(response);
      });

    // fetch("http://localhost:3001/testimonials/about", {
    //   method: "POST",
    //   // headers: { "Content-Type": "application/json" },
    //   body: {post: post}
    // }).then((response) => response.json())
    // .then(response => console.log(response));
    // console.log(data.postBody);
  };

  return (
    <div>
      <h2>About Our River Water</h2>
      <p>
        This is a paragragh about river water. It is a thing blah blah. This is
        a paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah. This is a
        paragragh about river water. It is a thing blah blah.
      </p>

      <h2>Testimonials</h2>
      <ul style={{ listStyleType: "none" }}>{newPost}</ul>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Leave A Testimonial</h3>
        </label>
        <input
          onChange={(e) => setPost(e.target.value)}
          type="text"
          name="postBody"
        />
        <input type="submit" value="Submit" />
      </form>
      <br />
    </div>
  );
};

export default About;
