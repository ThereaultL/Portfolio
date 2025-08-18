import React from "react";
import Skills from "./Skills";

export default function About() {
  return (
    <div>
      <div class="introduction" id="about">
        <h2>
          Full-stack developer passoniate about developing inovative and
          accessible products.
        </h2>
        <div class="my-story">
          <h2 class="container-title">My Story</h2>
          <p>
            Nice to meet you, I'm Lillian Thereault, a Junior studying Computer
            Science at Western Carolina University. My programming journey began
            in high school, where I first learned HTML and CSS in a webpage
            development class. Since then, I have fallen in love with coding and
            the endless opportunities it provides. In college, I have expanded
            my skills to include JavaScript, React.js, Node.js, Python, and
            Java. I have worked on varity of projects, from academic, personal,
            and even professional assignments.
          </p>
          <p>
            <b>Why is programming so important to me?</b> It’s not just about
            writing code; it’s about solving problems and creating solutions
            that can make a difference. I am passionate about building
            meaningful technology and constantly challenging myself to grow as a
            developer.
          </p>
          <p>
            What drives me most is the desire to keep learning. Whether that’s
            exploring new frameworks, debugging, or collaborating with mentors
            and peers to create something that makes life easier for others. I
            believe that tech should be both powerful and accessible, and I’m
            always looking for ways to contribute to that mission.
          </p>
        </div>
      </div>
      <Skills />
    </div>
  );
}
