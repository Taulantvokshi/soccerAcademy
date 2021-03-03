import React from "react";
import "./Coaching.scss";
import { Arrow, Twitter, Instagram } from "../../Icons";

const coachingData = [
  {
    id: "kajshdkajshf",
    image: "./images/player-one2x.png",
    name: "Ansi Agolli",
    team: "National Team",
    position: "Captain of America",
    fbLink: "",
    igLink: "",
  },
  {
    id: "k23j4kq234jkf",
    image: "./images/blejdi-berdic@2x.png",
    name: "Bljedi Bardic",
    team: "New York",
    position: "Cosmos Player",
    fbLink: "",
    igLink: "",
  },
  {
    id: "asjfhaskfhask3",
    image: "./images/unnamed@2x.png",
    name: "Armando Guarnera",
    team: "",
    position: "",
    fbLink: "",
    igLink: "",
  },
];

const SingleItem = ({ image, name, team, position }) => {
  return (
    <div className="item-grid">
      <img className="item-grid-image" src={image} />
      <div className="item-grid-info">
        <div className="item-grid-info--name">{name}</div>
        <div className="item-grid-info--team">{team}</div>
        <div className="item-grid-info--position">{position}</div>
        <div className="item-grid-info--media">
          <Instagram />
          <Twitter />
        </div>
      </div>
      <div className="item-grid-more underline">
        <div>LEARN MORE</div>
        <Arrow />
      </div>
    </div>
  );
};

const Coaching = () => {
  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    gsap.timeline().to(".coaching", { opacity: 1, y: 0, duration: 1.2 });
  }, []);
  return (
    <section className="coaching">
      <div className="coaching_info">
        <div className="coaching_info-title">Coaching Leadership</div>
        <div className="coaching_info-text">
          AB7 Soccer academy Is a{" "}
          <span style={{ fontWeight: 600 }}>youth soccer program </span>youth
          soccer program for different ages founded and coached by two
          professional soccer players,
          <span style={{ color: "#C81C28" }}> Ansi Agolli </span> and
          <span style={{ color: "#C81C28" }}> Bledi Bardic. </span>
        </div>
        <div id="coaching_info-hiddenText" className="underline">
          <div>Read more about us</div>
          <Arrow />
        </div>
      </div>
      <div className="coaching_info-hiddenTitle">Coaching Leadership</div>
      <div className="coaching_stories">
        {coachingData.map((player) => {
          return (
            <SingleItem
              key={player.id}
              image={player.image}
              name={player.name}
              team={player.team}
              position={player.position}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Coaching;
