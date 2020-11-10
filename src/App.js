import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      sidebar: {
        name: "Kenny Wilde",
        email: "kennywilde00@gmail.com",
        phone: "018882822",
        social: "https://linkedin.com/kennywilde",
      },
      mainContent: {
        school: {
          schoolName: "Donabate Community College",
          titleOfStudy: "Leaving Certificate",
          dateOfStudy: "2009-2015",
        },
        work: {
          companyName: "AWS",
          positionTitle: "Cloud Support Associate",
          responsibilites:
            "Provide Support for AWS users in Analytics based services.",
          dates: "Aug 2019 - Sep 2020",
        },
      },
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <MainContent info={this.state.mainContent} />
      </div>
    );
  }
}

export default App;
