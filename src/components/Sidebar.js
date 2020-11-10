import React from "react";
import SidebarForm from "./SidebarForm";

class Sidebar extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Jane Doe",
      email: "janedoe@gmail.com",
      phone: "0123456789",
      social: "https://linkedin.com/janedoe",
    };
  }

  displayForm = () => {
    const sidebarForm = document.querySelector(".sidebar-form");
    sidebarForm.classList.toggle("hide");
  };

  onSubmitForm = (e) => {
    e.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const social = document.querySelector("#social").value;
    this.setState({
      name: name,
      email: email,
      phone: phone,
      social: social,
    });
    this.displayForm();
  };

  render() {
    return (
      <div className="sidebar">
        <p>{this.state.name}</p>
        <p>Email: {this.state.email}</p>
        <p>Phone: {this.state.phone}</p>
        <a href={this.state.social}>LinkedIn</a>
        <button id="edit-btn" onClick={this.displayForm}>
          Edit
        </button>
        <SidebarForm info={this.state} func={this.onSubmitForm} />
      </div>
    );
  }
}

export default Sidebar;
