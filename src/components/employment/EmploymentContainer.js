import React from "react";
import Employment from "./Employment";
import { EmploymentAddForm, EmploymentEditForm } from "./EmploymentForms";

class EmploymentContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      employmentList: [
        {
          id: 0,
          companyName: "Boojum",
          position: "Sales Assistant",
          responsibilites: "Roll burritos",
          dateStart: "",
          dateEnd: "",
        },
      ],
    };
  }

  displayForm = (e) => {
    if (e.currentTarget.id === "add-employment") {
      const form = document.querySelector(".employment-form");
      form.classList.toggle("hide");
      this.clearForm();
    } else {
      console.log("hi");
      const form = document.querySelector(".employment-edit-form");
      form.classList.toggle("hide");

      const id = document.querySelector("#save-employment-edit");
      const company = document.querySelector("#company-name-input-edit");
      const position = document.querySelector("#position-input-edit");
      const responsibilites = document.querySelector("#resp-input-edit");
      const dateStart = document.querySelector("#date-start-input-edit");
      const dateEnd = document.querySelector("#date-end-input-edit");

      for (let i = 0; i < this.state.employmentList.length; i++) {
        if (this.state.employmentList[i].companyName === e.currentTarget.id) {
          id.dataset.id = this.state.employmentList[i].id;
          company.value = this.state.employmentList[i].companyName;
          position.value = this.state.employmentList[i].position;
          responsibilites.value = this.state.employmentList[i].responsibilites;
          dateStart.value = this.state.employmentList[i].dateStart;
          dateEnd.value = this.state.employmentList[i].dateEnd;
        }
      }
    }
  };

  clearForm = () => {
    let company = document.querySelector("#company-name-input");
    let position = document.querySelector("#position-input");
    let responsibilites = document.querySelector("#resp-input");
    let dateStart = document.querySelector("#date-start-input");
    let dateEnd = document.querySelector("#date-end-input");

    company.value = "";
    position.value = "";
    responsibilites.value = "";
    dateStart.value = "";
    dateEnd.value = "";
  };

  addEmployment = (e) => {
    e.preventDefault();
    const company = document.querySelector("#company-name-input").value;
    const position = document.querySelector("#position-input").value;
    const responsibilites = document.querySelector("#resp-input").value;
    const dateStart = document.querySelector("#date-start-input").value;
    const dateEnd = document.querySelector("#date-end-input").value;

    let id;

    if (this.state.employmentList.length < 1) {
      id = 0;
    } else {
      id = this.state.employmentList[this.state.employmentList.length - 1];
    }

    const employmentObject = {
      id: id,
      companyName: company,
      position: position,
      responsibilites: responsibilites,
      dateStart: dateStart,
      dateEnd: dateEnd,
    };

    this.setState({
      employmentList: this.state.employmentList.concat(employmentObject),
    });

    const form = document.querySelector(".employment-form");
    form.classList.toggle("hide");
  };

  editEmployment = (e) => {
    e.preventDefault();
    console.log("hi");
    const id = e.currentTarget.dataset.id;
    const company = document.querySelector("#company-name-input-edit").value;
    const position = document.querySelector("#position-input-edit").value;
    const responsibilites = document.querySelector("#resp-input-edit").value;
    const dateStart = document.querySelector("#date-start-input-edit").value;
    const dateEnd = document.querySelector("#date-end-input-edit").value;

    const targetObjectIndex = this.state.employmentList.findIndex(
      (item) => item.id == id
    );
    let newArray = [...this.state.employmentList];
    newArray[targetObjectIndex] = {
      id: id,
      companyName: company,
      position: position,
      responsibilites: responsibilites,
      dateStart: dateStart,
      dateEnd: dateEnd,
    };

    this.setState({
      employmentList: newArray,
    });

    const form = document.querySelector(".employment-edit-form");
    form.classList.toggle("hide");
  };

  deleteEmployment = (e) => {
    const id = e.currentTarget.id;
    const targetObjectIndex = this.state.employmentList.findIndex(
      (item) => item.companyName == id
    );
    console.log(targetObjectIndex);
    let newArray = [...this.state.employmentList];
    console.log(newArray[targetObjectIndex]);
    newArray.splice(targetObjectIndex, 1);
    console.log(newArray);

    this.setState({
      employmentList: newArray,
    });
  };

  render() {
    const { employmentList } = this.state;

    return (
      <div className="employment-container">
        <div className="employment-header">
          <h2>Employment History</h2>
        </div>
        <Employment
          list={employmentList}
          editEmployment={this.displayForm}
          deleteEmployment={this.deleteEmployment}
        />
        <div className="employment-buttons buttons">
          <button id="add-employment" onClick={this.displayForm}>
            + Add Employment
          </button>
        </div>
        <EmploymentAddForm addEmployment={this.addEmployment} />
        <EmploymentEditForm
          editEmployment={this.editEmployment}
          info={employmentList}
        />
      </div>
    );
  }
}

export default EmploymentContainer;
