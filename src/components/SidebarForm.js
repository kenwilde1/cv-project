import React from "react";

class SidebarForm extends React.Component {
  render() {
    return (
      <div className="sidebar-form form-style hide">
        <input
          type="text"
          id="name"
          defaultValue={this.props.info.name}
        ></input>
        <input
          type="text"
          id="email"
          defaultValue={this.props.info.email}
        ></input>
        <input
          type="text"
          id="phone"
          defaultValue={this.props.info.phone}
        ></input>
        <input
          type="text"
          id="social"
          defaultValue={this.props.info.social}
        ></input>
        <button id="save" onClick={this.props.func}>
          Save Changes
        </button>
      </div>
    );
  }
}

export default SidebarForm;
