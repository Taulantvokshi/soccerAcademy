import React from 'react';
import './Students.scss';

const SingleItem = () => {
  return (
    <div className="academy-grid">
      <img src="images/placeholder.jpg" />
      {/* <div></div> */}
    </div>
  );
};
const Students = () => {
  return (
    <div className="students margin-top-lg">
      <div className="students_title section-title">Students at academy</div>
      <div className="students_content">
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </div>
    </div>
  );
};
export default Students;
