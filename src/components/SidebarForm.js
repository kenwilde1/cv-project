import React from "react";

class SidebarForm extends React.Component {
  render() {
    return (
      <div className="sidebar-form hide">
        <form>
          <input
            type="text"
            id="name"
            placeholder={this.props.info.name}
          ></input>
          <input
            type="text"
            id="email"
            placeholder={this.props.info.email}
          ></input>
          <input
            type="text"
            id="phone"
            placeholder={this.props.info.phone}
          ></input>
          <input
            type="text"
            id="social"
            placeholder={this.props.info.social}
          ></input>
          <button id="save" onClick={this.props.func}>
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}

export default SidebarForm;
