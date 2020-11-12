import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Sidebar />
        <MainContent />
      </div>
    );
  }
}

export default App;
