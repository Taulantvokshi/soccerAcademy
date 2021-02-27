import React, { useState } from 'react';
import './Carosel.scss';
const Carosel = () => {
  const sliderArray = [1, 2, 3, 4];
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (sliderArray.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (sliderArray.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="carosel margin-top-lg">
      <div className="carosel_text">
        What other Professional players say about our coaching staff
      </div>
      <div className="carosel_container">
        <div className="carosel_slider">
          {sliderArray.map((item, index) => {
            return (
              <div
                style={{ transform: `translateX(${x}%)` }}
                key={index}
                className="carosel_slider-slide"
              >
                {/* <img src="images/carosel-image1.png" /> */}

                <div className="carosel_slider-slide--img">
                  <img src="images/carosel-image1.png" />
                </div>

                <div className="carosel_slider-slide--text">
                  <p className="carosel_slider-slide--text-italic">
                    “I’ve known Ansi since we played together in the Champions
                    League with Qarabag, and I have no doubt in my mind that he
                    has the ability to help others reach their potential. His
                    awareness and leadership on the pitch is next level, and
                    that’s why he played against the words best”
                  </p>
                  <p className="carosel_slider-slide--text-author">
                    —Hannes Halldorsson
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons">
          <div className="goLeft" onClick={goLeft}>
            <img src="images/left-arrow.svg" />
          </div>
          <div className="goRight" onClick={goRight}>
            <img src="images/right-arrow.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carosel;
