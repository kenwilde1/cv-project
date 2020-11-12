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
          schoolName: "Hogwarts",
          titleOfStudy: "Gryffindor",
          startDate: "2009",
          endDate: "2010",
        },
      ],
    };
  }

  displayForm = (e) => {
    if (e.currentTarget.id === "add-education") {
      const form = document.querySelector(".education-form");
      form.classList.toggle("hide");

      const formTwo = document.querySelector(".education-edit-form");
      if (!formTwo.classList.contains("hide")) {
        formTwo.classList.toggle("hide");
      }

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
      const startDate = document.querySelector("#start-date-input-edit");
      const endDate = document.querySelector("#end-date-input-edit");

      for (let i = 0; i < this.state.educationList.length; i++) {
        if (this.state.educationList[i].schoolName === e.currentTarget.id) {
          id.dataset.id = this.state.educationList[i].id;
          school.value = this.state.educationList[i].schoolName;
          title.value = this.state.educationList[i].titleOfStudy;
          startDate.value = this.state.educationList[i].startDate;
          endDate.value = this.state.educationList[i].endDate;
        }
      }
    }
  };

  clearForm = () => {
    let school = document.querySelector("#school-name-input");
    let title = document.querySelector("#title-study-input");
    let startDate = document.querySelector("#start-date-input");
    let endDate = document.querySelector("#end-date-input");

    school.value = "";
    title.value = "";
    startDate.value = "";
    endDate.value = "";
  };

  addEducation = (e) => {
    e.preventDefault();
    const school = document.querySelector("#school-name-input").value;
    const title = document.querySelector("#title-study-input").value;
    const startDate = document.querySelector("#start-date-input").value;
    const endDate = document.querySelector("#end-date-input").value;

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
      startDate: startDate,
      endDate: endDate,
    };

    this.setState({
      educationList: this.state.educationList.concat(educationObject),
    });

    const form = document.querySelector(".education-form");
    form.classList.toggle("hide");
  };

  editEducation = (e) => {
    e.preventDefault();
    const id = e.currentTarget.dataset.id;
    const school = document.querySelector("#school-name-input-edit").value;
    const title = document.querySelector("#title-study-input-edit").value;
    const startDate = document.querySelector("#start-date-input-edit").value;
    const endDate = document.querySelector("#end-date-input-edit").value;

    const targetObjectIndex = this.state.educationList.findIndex(
      (item) => item.id == id
    );
    let newArray = [...this.state.educationList];
    newArray[targetObjectIndex] = {
      id: id,
      schoolName: school,
      titleOfStudy: title,
      startDate: startDate,
      endDate: endDate,
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
    let newArray = [...this.state.educationList];
    newArray.splice(targetObjectIndex, 1);

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
