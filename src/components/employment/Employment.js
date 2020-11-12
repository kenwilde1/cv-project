import React from "react";

class Employment extends React.Component {
  render() {
    const { list, editEmployment, deleteEmployment } = this.props;
    return (
      <div className="employment-items">
        {list.map((item) => {
          return (
            <div className="employment" key={item.id}>
              <h3>
                {item.companyName}
                <button
                  id={item.companyName}
                  onClick={editEmployment}
                  className="icon-btn"
                >
                  <i className="fas fa-edit"></i>
                </button>
                <button
                  id={item.companyName}
                  onClick={deleteEmployment}
                  className="icon-btn trash"
                >
                  <i className="fas fa-trash-alt"></i>
                </button>
              </h3>
              <ul>
                <li>Position: {item.position}</li>
                <li>Responsibilites: {item.responsibilites}</li>
                <li>Start Date: {item.dateStart}</li>
                <li>End Date: {item.dateEnd}</li>
              </ul>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Employment;
