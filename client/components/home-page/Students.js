import React, { useState, useEffect } from "react";
import "./Students.scss";
import { Modal, Video } from "../../exports";
import { Camera } from "../../Icons";

const Students = () => {
  const [open, setOpen] = useState(false);
  const [selectVideo, setSelectVideo] = useState("");
  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: `.students`,

          start: "top 80%",
          end: "bottom 80%",

          //   scrub: true,
          //events     //onEnter onLeave onEterBack onLeaveBack
          toggleActions: "play none none none",
          //options play, pause, resume,reset, restart, complete, reverse, none
        },
      })
      .to(`.students`, { opacity: 1, duration: 0.4, x: 0 });
  }, []);
  return (
    <>
      <Modal isOpen={open} closeModal={setOpen}>
        <Video clip={selectVideo} />
      </Modal>
      <div className="students margin-top-lg">
        <div className="section-title">Students at academy</div>
        <div className="students_content">
          <div
            onClick={() => {
              setOpen(true);
              setSelectVideo("https://www.youtube.com/watch?v=6gjXwsPbaiE");
            }}
            className="academy-grid"
          >
            <img src="images/Group 3393@2x.jpg" />
            <div className="academy-grid-hidden">
              <Camera />
            </div>
          </div>

          <div
            onClick={() => {
              setOpen(true);
              setSelectVideo(
                "https://www.youtube.com/watch?v=L-0hkvk1Ky0&ab_channel=JonerFootball"
              );
            }}
            className="academy-grid"
          >
            <img src="images/Group 3393@2x.jpg" />
            <div className="academy-grid-hidden">
              <Camera />
            </div>
          </div>

          <div
            onClick={() => {
              setOpen(true);
              setSelectVideo(
                "https://www.youtube.com/watch?v=qqoiJYUE0Do&ab_channel=AllAttack"
              );
            }}
            className="academy-grid"
          >
            <img src="images/Group 3393@2x.jpg" />
            <div className="academy-grid-hidden">
              <Camera />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Students;
