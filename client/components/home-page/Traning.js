import React, { useEffect } from "react";
import "./Traning.scss";
import { Arrow } from "../../Icons";

const imageData = [
  {
    id: 1,
    image: "images/Group 3385@2x.jpg",
  },
  {
    id: 2,
    image: "images/Group 3386@2x.jpg",
  },
  {
    id: 3,
    image: "images/Group 3387@2x.jpg",
  },
  {
    id: 4,
    image: "images/Group 3388@2x.jpg",
  },
  {
    id: 5,
    image: "images/Group 3389@2x.jpg",
  },
  {
    id: 6,
    image: "images/Group 3390@2x.jpg",
  },
  {
    id: 7,
    image: "images/Group 3391@2x.jpg",
  },
  {
    id: 8,
    image: "images/Group 3392@2x.jpg",
  },
  {
    id: 9,
    image: "images/Group 3393@2x.jpg",
  },
  {
    id: 10,
    image: "images/Group 3394@2x.jpg",
  },
  {
    id: 11,
    image: "images/Group 3395@2x.jpg",
  },
  {
    id: 12,
    image: "images/Group 3396@2x.jpg",
  },
];

const SingleItem = ({ imageUrl }) => {
  return <img src={imageUrl} />;
};

const Traning = () => {
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.traning_content`,

          start: "top 80%",
          end: "bottom 80%",

          //   scrub: true,
          //events     //onEnter onLeave onEterBack onLeaveBack
          toggleActions: "play none none none",
          //options play, pause, resume,reset, restart, complete, reverse, none
        },
      })
      .to(`.traning_content`, {
        opacity: 1,
      });
  }, []);
  return (
    <div className="traning margin-top-lg">
      <div className="traning_title section-title">Training day</div>
      <div className="traning_content">
        {imageData.map((item) => {
          return <SingleItem key={item.id} imageUrl={item.image} />;
        })}
      </div>

      <div className="underline traning_more">
        <div>SEE MORE</div>
        <Arrow />
      </div>
    </div>
  );
};

export default Traning;
