import React from 'react';
import './Coaching.scss';
import { Arrow, Twitter, Instagram } from '../../Icons';
const SingleItem = (image, name, team, position) => {
  return (
    <div className="item-grid">
      <img className="item-grid-image" src="images/player-one2x.png" />
      <div className="item-grid-info">
        <div className="item-grid-info--name">Anis Agolli</div>
        <div className="item-grid-info--team">National Team</div>
        <div className="item-grid-info--position">Captain of America</div>
        <div className="item-grid-info--media">
          <Instagram />
          <Twitter />
        </div>
      </div>
      <div className="item-grid-more">
        <div>LEARN MORE</div>
        <Arrow />
      </div>
    </div>
  );
};

const Coaching = () => {
  React.useEffect(() => {
    // eslint-disable-next-line no-undef
    gsap.timeline().to('.coaching', { opacity: 1, y: 0, duration: 1.2 });
  }, []);
  return (
    <section className="coaching">
      <div className="coaching_info">
        <div className="coaching_info-title">Coaching Leadership</div>
        <div className="coaching_info-text">
          AB7 Soccer academy Is a{' '}
          <span style={{ fontWeight: 600 }}>youth soccer program </span>youth
          soccer program for different ages founded and coached by two
          professional soccer players,{' '}
          <span style={{ color: '#C81C28' }}>Ansi Agolli </span> and{' '}
          <span style={{ color: '#C81C28' }}>Bledi Bardic. </span>
        </div>
      </div>
      <div className="coaching_stories">
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </div>
    </section>
  );
};

export default Coaching;
