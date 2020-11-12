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
      <div className="sidebar-container">
        <div className="sidebar">
          <p>
            <b>{this.state.name}</b>
          </p>
          <p>
            <b>Email:</b> {this.state.email}
          </p>
          <p>
            <b>Phone:</b> {this.state.phone}
          </p>
          <a href={this.state.social}>LinkedIn</a>
        </div>
        <div className="sidebar-button">
          <button id="edit-btn" onClick={this.displayForm}>
            Edit
          </button>
        </div>
        <SidebarForm info={this.state} func={this.onSubmitForm} />
      </div>
    );
  }
}

export default Sidebar;
