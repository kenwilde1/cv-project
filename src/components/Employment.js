import React from "react";

class Employment extends React.Component {
  render() {
    return (
      <div className="work-container">
        <div className="work">
          <h2>
            <u>Employment History</u>
          </h2>
          <h3>Company: {this.props.companyName}</h3>
          <ul>
            <li>Position: {this.props.positionTitle}</li>
            <li>Responsiblities: {this.props.responsibilites}</li>
            <li>Dates of Employment: {this.props.dates}</li>
          </ul>
        </div>
        <div className="buttons">
          <button>+ Add Work</button>
          <button>Edit</button>
        </div>
      </div>
    );
  }
}

export default Employment;
