import React from "react";

class EmploymentAddForm extends React.Component {
  render() {
    const { addEmployment } = this.props;
    return (
      <div className="employment-form form-style hide">
        <input
          type="text"
          placeholder="Company Name"
          id="company-name-input"
        ></input>
        <input type="text" placeholder="Position" id="position-input"></input>
        <input
          type="text"
          placeholder="Responsibilities"
          id="resp-input"
        ></input>
        <input type="date" id="date-start-input"></input>
        <input type="date" id="date-end-input"></input>
        <button id="save-employment" onClick={addEmployment}>
          Save
        </button>
      </div>
    );
  }
}

class EmploymentEditForm extends React.Component {
  render() {
    const { editEmployment } = this.props;

    return (
      <div className="employment-edit-form form-style hide">
        <input type="text" id="company-name-input-edit"></input>
        <input type="text" id="position-input-edit"></input>
        <input type="text" id="resp-input-edit"></input>
        <input type="date" id="date-start-input-edit"></input>
        <input type="date" id="date-end-input-edit"></input>
        <button id="save-employment-edit" onClick={editEmployment}>
          Save
        </button>
      </div>
    );
  }
}

export { EmploymentAddForm, EmploymentEditForm };
