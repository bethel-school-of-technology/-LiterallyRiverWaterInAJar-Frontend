import React, { useState, useEffect } from "react";

const About = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/testimonials/about")
      .then(data => data.json())
      .then((data) => {
        setPostList(data.posts);
        console.log(data);
      });
  }, []);

  let newPost = postList.map((post, index) => {
    return <li key={index}>{post.PostBody}</li>;
  });

  return (
    <div>
      <h2>About</h2>
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
      
      <ul>{newPost}</ul>
      <form> 
        <label>
          <h3>Leave A Testimonial</h3>
          <textarea  rows="4" name="PostBody" />
          <br/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default About;