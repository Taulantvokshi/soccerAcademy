import React, { useEffect } from "react";
import "./Programs.scss";
import { Arrow } from "../../Icons";
import { Link } from "react-router-dom";

const programData = [
  {
    title: "GROUP PROGRAM",
    image: "images/Group.png",
  },
  {
    title: "FINISHING PROGRAM",
    image: "images/Group3381.png",
  },
  {
    title: "DEFENSIVE PROGRAM",
    image: "images/Group3380.png",
  },
  {
    title: "GOALKEEPER PROGRAM",
    image: "images/Group3380.png",
  },
];

const SingleItemS = ({ imageUrl, imageText }) => {
  return (
    <div className="training-grid">
      <div className="training-grid_image">
        <img src={imageUrl} />
        <div className="training-grid_image-name">{imageText}</div>
      </div>

      <div className="training-grid_button underline">
        <Link to="/register">REGISTER NOW</Link>
        <Arrow />
      </div>
    </div>
  );
};

const Programs = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.programs`,

          start: "top 80%",
          end: "bottom 80%",

          //   scrub: true,
          //events     //onEnter onLeave onEterBack onLeaveBack
          toggleActions: "play none none none",
          //options play, pause, resume,reset, restart, complete, reverse, none
        },
      })
      .to(`.programs`, { opacity: 1, duration: 0.4, x: 0 });
  }, []);

  return (
    <section className="programs margin-top-lg">
      <div className="section-title programs--title">
        Our soccer training programs
      </div>
      <div className="programs_content">
        {programData.map((program) => {
          return (
            <SingleItemS
              key={program.title}
              imageText={program.title}
              imageUrl={program.image}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Programs;
