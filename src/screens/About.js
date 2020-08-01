import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container, Row, Col, Image } from "react-bootstrap"


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
    <Container >
      <h2>About Our River Water</h2>
      <p>
        Building a successful business is all about identifying a need in the market and
        effectively filling that need. In the summer of 2020, that is exactly what we did.
          <br />
        We all know those people who have a stockpile of their own jars that they take to the river
        and fill with water whenever they want to. The "go-getters", the "self-motivators", the "not lazy"...they're
        all content to get river water the old fashioned way. But what about all of those forgotten people who
        just want to buy their river water instead? Who is serving them?
          <br />
        We're glad you asked!
          <br />
        In the summer of 2020, four courageous men stepped forward to provide you with the most groundbreaking innovation
        in river water since the advent of the cup. Now, not only can you have river water in a jar, but you can actually
        buy any quantity you need using only your smart phone or computer and a credit card! That's right! You don't have
        to make those frequent trips down to the river bank to fill up your jars any longer! We will ship your river water
        directly to your doorstep!
        Here at LiterallyRiverWaterInAJar.com, our motto is "Some people will pay for anything and we're here to serve those people!".
        That's the type of service you'll receive when you purchase river water from LiterallyRiverWaterInAJar.com. We look forward to
        meeting all of your river water needs!
      </p>

      <h2>Testimonials</h2>
      <ul style={{ listStyleType: "none" }}>{newPost}</ul>
      <br />


      <form onSubmit={handleSubmit}>
        <label>
          <h3>Leave A Testimonial</h3>
        </label>
        <br />
        <textarea
          rows="4"
          onChange={(e) => setPost(e.target.value)}
          type="text"
          name="postBody"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
    </Container>
  );
};

export default About;
