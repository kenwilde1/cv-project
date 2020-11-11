import React from "react";

class Education extends React.Component {
  render() {
    const { info, editEducation } = this.props;

    return (
      <div className="education-items">
        {info.map((item) => {
          return (
            <div className="education" key={item.schoolName}>
              <h3>
                {item.schoolName}
                <button
                  id={item.schoolName}
                  onClick={editEducation}
                  className="icon-btn"
                >
                  <i className="fas fa-edit"></i>
                </button>
              </h3>
              <ul>
                <li>Title of Study: {item.titleOfStudy}</li>
                <li>Dates of Study: {item.dateOfStudy}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
