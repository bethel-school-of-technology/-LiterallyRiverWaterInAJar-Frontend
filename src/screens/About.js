import React from 'react';


const About = () => (

  <div>
    <h2>About</h2>
    <p>
      This is a paragragh about river water. It is a thing blah blah. This is a
      paragragh about river water. It is a thing blah blah. This is a paragragh
      about river water. It is a thing blah blah. This is a paragragh about
      river water. It is a thing blah blah. This is a paragragh about river water. It is a thing blah blah. This is a
      paragragh about river water. It is a thing blah blah. This is a paragragh
      about river water. It is a thing blah blah. This is a paragragh about
      river water. It is a thing blah blah. This is a paragragh about river water. It is a thing blah blah. This is a
      paragragh about river water. It is a thing blah blah. This is a paragragh
      about river water. It is a thing blah blah. This is a paragragh about
      river water. It is a thing blah blah. This is a paragragh about river water. It is a thing blah blah. This is a
      paragragh about river water. It is a thing blah blah. This is a paragragh
      about river water. It is a thing blah blah. This is a paragragh about
      river water. It is a thing blah blah. This is a paragragh about river water. It is a thing blah blah. This is a
      paragragh about river water. It is a thing blah blah. This is a paragragh
      about river water. It is a thing blah blah. This is a paragragh about
      river water. It is a thing blah blah.
    </p>

     
        <h2>Testimonials</h2>
        <ul>
          <li></li>
          {postMessage.map((post, index) => {
            return <li key={index}>{post.content}</li>
          })}
        </ul>
      

    <form>
      <label>
        <h3>Leave A Testimonial</h3>
      <input type="text" name="testimonial" />
      </label>
      <input type="submit" value="Submit" />
    </form>

  </div>
  
);

export default About;
