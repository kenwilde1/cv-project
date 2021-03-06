import React from "react";

class EducationAddForm extends React.Component {
  render() {
    const { addEducation } = this.props;
    return (
      <div className="education-form form-style hide">
        <input
          type="text"
          placeholder="School Name"
          id="school-name-input"
        ></input>
        <input
          type="text"
          placeholder="Title of Study"
          id="title-study-input"
        ></input>
        <input type="date" id="start-date-input"></input>
        <input type="date" id="end-date-input"></input>
        <button id="save-education" onClick={addEducation}>
          Save Changes
        </button>
      </div>
    );
  }
}

class EducationEditForm extends React.Component {
  render() {
    const { editEducation } = this.props;

    return (
      <div className="education-edit-form form-style hide">
        <input type="text" id="school-name-input-edit"></input>
        <input type="text" id="title-study-input-edit"></input>
        <input type="date" id="start-date-input-edit"></input>
        <input type="date" id="end-date-input-edit"></input>
        <button id="save-education-edit" onClick={editEducation}>
          Save
        </button>
      </div>
    );
  }
}

export { EducationAddForm, EducationEditForm };
