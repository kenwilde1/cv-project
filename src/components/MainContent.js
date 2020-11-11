import React from "react";
import EducationContainer from "./education/EducationContainer";
import Employment from "./Employment";

class MainContent extends React.Component {
  constructor() {
    super();
    this.state = {
      work: {
        companyName: "AWS",
        positionTitle: "Cloud Support Associate",
        responsibilites:
          "Provide Support for AWS users in Analytics based services.",
        dates: "Aug 2019 - Sep 2020",
      },
    };
  }

  render() {
    return (
      <div className="main">
        <EducationContainer />
        <Employment info={this.state.work} />
      </div>
    );
  }
}

export default MainContent;
