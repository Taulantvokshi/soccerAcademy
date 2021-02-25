import React from 'react';
import './Programs.scss';
import { Arrow } from '../../Icons';

const SingleItemS = ({ imageUrl, imageText }) => {
  return (
    <div className="training-grid">
      <div className="training-grid_image">
        <img src="images/Group.png" />
        <div>Text</div>
      </div>

      <div className="training-grid_button underline">
        <div>REGISTER NOW</div>
        <Arrow />
      </div>
    </div>
  );
};

const Programs = () => {
  return (
    <section className="programs margin-top-lg">
      <div className="section-title">Our soccer training programs</div>
      <div className="programs_content">
        <SingleItemS />
        <SingleItemS />
        <SingleItemS />
        <SingleItemS />
      </div>
    </section>
  );
};

export default Programs;
