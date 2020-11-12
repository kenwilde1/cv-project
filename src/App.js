import "./App.css";
import Header from "./components/Header";
import About from "./components/about/About";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import React from "react";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <MainContent />
        <Footer />
      </div>
    );
  }
}

export default App;
