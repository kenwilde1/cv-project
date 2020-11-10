import React from "react";

const MainContent = (props) => {
  return (
    <div className="main">
      <div className="edu-container">
        <div className="education">
          <h2>
            <u>Educational History</u>
          </h2>
          <h3>School: {props.info.school.schoolName}</h3>
          <ul>
            <li>Title of Study: {props.info.school.titleOfStudy}</li>
            <li>Dates of Study: {props.info.school.dateOfStudy}</li>
          </ul>
        </div>
        <div className="buttons">
          <button>+ Add Education</button>
          <button>Edit</button>
        </div>
      </div>

      <div className="work-container">
        <div className="work">
          <h2>
            <u>Employment History</u>
          </h2>
          <h3>Company: {props.info.work.companyName}</h3>
          <ul>
            <li>Position: {props.info.work.positionTitle}</li>
            <li>Responsiblities: {props.info.work.responsibilites}</li>
            <li>Dates of Employment: {props.info.work.dates}</li>
          </ul>
        </div>
        <div className="buttons">
          <button>+ Add Work</button>
          <button>Edit</button>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
