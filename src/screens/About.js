import React, { useState, useEffect } from "react";

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

  const [post, setPost] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault()
      fetch("http://localhost:3001/testimonials/about", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(setPost),
      })
        .then((response) => response.json())
        .then((data) => setPost(data.testimonials));
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

      {/* create function, uses fetch, makes post call to backend, MD?? ex. calling post,  */}
      <h2>Testimonials</h2>
      <ul>{newPost}</ul>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          <h3>Leave A Testimonial</h3>
          <textarea rows="4" name="PostBody" />
          <br />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default About;
