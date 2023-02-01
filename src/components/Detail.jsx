import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./detail.css";

export default function Detail({ projects }) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [object, setObject] = useState({});
  const [icons, setIcons] = useState([]);
  const [features, setFeatures] = useState([]);
  const [video, setVideo] = useState();
  useEffect(() => {
    const project = projects.find((p) => p.id.toString() === id);
    if (project) {
      setObject(project);
      setIcons(project.icon);
      setFeatures(project.feature);
      setVideo(project.video);
    }
  }, [id, projects, object]);
  return (
    <div id="detail-page">
      <h1 id="project-name">{object.name}</h1>
      <h2 id="project-headline">{object.intro}</h2>
      <span id="detail-line"></span>
      <div className="detail-nav">
        <button onClick={() => navigate(-1)}>
          &lt;- Go Back to Project List
        </button>
      </div>
      <div className="detail-core">
        <div className="detail-img">
          <img
            className="project-image"
            src={object.image}
            alt={object.imageAlt}
          />
        </div>
        <div className="detail-writing">
          <p className="features">Features</p>
          <ul>
            {features.map((f, index) => {
              return (
                <li key={index} data-emoji="🤎 ">
                  {f}
                </li>
              );
            })}
          </ul>
          <p id="learned" className="features">
            What I leared
          </p>
          <p id="learned-detail">{object.detail}</p>
          <a
            href={object.github}
            className="detail-git"
            target="_blank"
            rel="noreferrer"
          >
            <img
              id="github"
              src={require("../assets/github.png")}
              alt="github"
            />
            Check Github -&gt;
          </a>
        </div>
      </div>
      <div className="skills-group">
        <p id="skills-header">Skills</p>
        <div className="detail-skills">
          <div className="skills">
            {icons &&
              icons.map((i, index) => {
                return <img key={index} src={i} alt="icon" />;
              })}
          </div>
        </div>
      </div>
      <div className="detail-video">
        <p id="video-header">Check my project production video</p>
        <video loop autoPlay muted controls id="production-video">
          {video && <source src={video} type="video/mp4" />}
          Sorry, Could you try to reload this page? 🥹
        </video>
      </div>
    </div>
  );
}
