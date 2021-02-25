import React from 'react';
import './index.scss';
import {
  Coaching,
  Programs,
  Students,
  Traning,
  Carosel,
  SocialMedia,
} from '../../exports';
const HomePage = () => {
  return (
    <div className="homepage">
      <Coaching />
      <Programs />
      <Students />
      <Traning />
      <Carosel />
      <SocialMedia />
    </div>
  );
};

export default HomePage;
