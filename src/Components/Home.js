import React from "react";
import ProjectJson from "../indvProject.json";
import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";
import fbPic from "./fb.png";
import lnkPic from "./lkn.png";

export default function Home() {
  const [indvProject, setindvProject] = useState([]);

  useEffect(() => {
    setindvProject(ProjectJson);
    console.log(indvProject);
  }, [indvProject]);

  const [project, setProject] = useState([]);
  // useState is a React Hook. This hook will return two thins, the stateful value *variable* ,
  //  and a function to set that state *setSomething*

  useEffect(() => {
    fetch("/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProject(data);
      });
  }, []);

  //set up a proxy server to ping

  return (
    <div className="Homediv">
      <h1>Welcome to Yingineering</h1>

      <div class="music">
        <p>What do I listen to?</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/jfKfPfyJRdk"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>

      <div class="cattyping">
        <div class="cattypingwords">
          <p>Behind the Scenes</p>
        </div>

        <iframe
          src="https://giphy.com/embed/o0vwzuFwCGAFO"
          width="400"
          height="300"
          frameborder="0"
          class="giphy-embed"
          allowfullscreen
        ></iframe>
      </div>

      <div className="HomeComment">
        Here are a list of projects of the past and pricing. Click on each names
        below for further information.
      </div>
      <div className="HomeContainer">
        {indvProject.map((project, index) => {
          return <ProjectCard key={index} indvProjectProps={project} />;
        })}
      </div>

      <footer>
        <div className="FooterNote">
          <p>© 2023 by YINGINEER. All rights reserved.</p>
        </div>

        <div class="fb">
          <a class="iconimg" href="https://www.facebook.com" target="_blank">
            <img src={fbPic} alt="facebook icon" />
          </a>
        </div>

        <div class="lkn">
          <a class="iconimg" href="https://www.linkedin.com" target="_blank">
            <img src={lnkPic} alt="linkedin icon" />
          </a>
        </div>
      </footer>
    </div>
  );
}
