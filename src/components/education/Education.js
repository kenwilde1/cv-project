import React from "react";

class Education extends React.Component {
  render() {
    const { info, editEducation, deleteEducation } = this.props;

    return (
      <div className="education-items">
        {info.map((item) => {
          return (
            <div className="education" key={item.id}>
              <h3>
                <p>{item.schoolName}</p>
                <button
                  id={item.schoolName}
                  onClick={editEducation}
                  className="icon-btn"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  id={item.schoolName}
                  onClick={deleteEducation}
                  className="icon-btn trash"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </h3>
              <ul>
                <li>Title of Study: {item.titleOfStudy}</li>
                <li>Date of Study: {item.dateOfStudy}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Education;
