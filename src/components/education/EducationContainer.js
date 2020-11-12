import React from "react";
import Education from "./Education";
import { EducationAddForm, EducationEditForm } from "./EducationForms";

class EducationContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      educationList: [
        {
          id: 0,
          schoolName: "Donabate Community College",
          titleOfStudy: "Leaving Certificate",
          dateOfStudy: "2009-2015",
        },
      ],
    };
  }

  displayForm = (e) => {
    if (e.currentTarget.id === "add-education") {
      const form = document.querySelector(".education-form");
      form.classList.toggle("hide");
      this.clearForm();
    } else {
      const form = document.querySelector(".education-edit-form");
      form.classList.toggle("hide");

      const formTwo = document.querySelector(".education-form");
      if (!formTwo.classList.contains("hide")) {
        formTwo.classList.toggle("hide");
      }

      const id = document.querySelector("#save-education-edit");
      const school = document.querySelector("#school-name-input-edit");
      const title = document.querySelector("#title-study-input-edit");
      const date = document.querySelector("#date-study-input-edit");

      for (let i = 0; i < this.state.educationList.length; i++) {
        if (this.state.educationList[i].schoolName === e.currentTarget.id) {
          id.dataset.id = this.state.educationList[i].id;
          school.value = this.state.educationList[i].schoolName;
          title.value = this.state.educationList[i].titleOfStudy;
          date.value = this.state.educationList[i].dateOfStudy;
        }
      }
    }
  };

  clearForm = () => {
    let school = document.querySelector("#school-name-input");
    let title = document.querySelector("#title-study-input");
    let date = document.querySelector("#date-study-input");

    school.value = "";
    title.value = "";
    date.value = "";
  };

  addEducation = (e) => {
    e.preventDefault();
    const school = document.querySelector("#school-name-input").value;
    const title = document.querySelector("#title-study-input").value;
    const date = document.querySelector("#date-study-input").value;

    let id;

    if (this.state.educationList.length < 1) {
      id = 0;
    } else {
      id = this.state.educationList[this.state.educationList.length - 1].id + 1;
    }

    const educationObject = {
      id: id,
      schoolName: school,
      titleOfStudy: title,
      dateOfStudy: date,
    };

    this.setState({
      educationList: this.state.educationList.concat(educationObject),
    });

    const form = document.querySelector(".education-form");
    form.classList.toggle("hide");
    console.log(this.state.educationList);
  };

  editEducation = (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    const school = document.querySelector("#school-name-input-edit").value;
    const title = document.querySelector("#title-study-input-edit").value;
    const date = document.querySelector("#date-study-input-edit").value;

    const targetObjectIndex = this.state.educationList.findIndex(
      (item) => item.id == id
    );
    let newArray = [...this.state.educationList];
    newArray[targetObjectIndex] = {
      id: id,
      schoolName: school,
      titleOfStudy: title,
      dateOfStudy: date,
    };

    this.setState({
      educationList: newArray,
    });

    const form = document.querySelector(".education-edit-form");
    form.classList.toggle("hide");
  };

  deleteEducation = (e) => {
    const id = e.currentTarget.id;
    const targetObjectIndex = this.state.educationList.findIndex(
      (item) => item.schoolName == id
    );
    console.log(targetObjectIndex);
    let newArray = [...this.state.educationList];
    console.log(newArray[targetObjectIndex]);
    newArray.splice(targetObjectIndex, 1);
    console.log(newArray);

    this.setState({
      educationList: newArray,
    });
  };

  render() {
    const { educationList } = this.state;

    return (
      <div className="edu-container">
        <div className="education-header">
          <h2>Educational History</h2>
        </div>
        <Education
          info={educationList}
          editEducation={this.displayForm}
          deleteEducation={this.deleteEducation}
        />
        <div className="education-buttons buttons">
          <button id="add-education" onClick={this.displayForm}>
            + Add Education
          </button>
        </div>
        <EducationAddForm addEducation={this.addEducation} />
        <EducationEditForm
          editEducation={this.editEducation}
          info={this.state.educationList}
        />
      </div>
    );
  }
}

export default EducationContainer;
