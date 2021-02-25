import React from 'react';
import './Traning.scss';
import { Arrow } from '../../Icons';
const SingleItem = () => {
  return (
    <img src="https://static01.nyt.com/images/2020/09/25/sports/25soccer-nationalWEB1/merlin_177451008_91c7b66d-3c8a-4963-896e-54280f374b6d-articleLarge.jpg?quality=75&auto=webp&disable=upscale" />
  );
};

const Traning = () => {
  return (
    <div className="traning margin-top-lg">
      <div className="traning_title section-title">Training day</div>
      <div className="traning_content">
        {Array.from('............').map((item) => {
          return <SingleItem />;
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
