import React, { Component } from "react";
// import Counter from "./Components/Counter";
// import FunctionalCounter from "./Components/FunctionalCounter";
import { Routes, Route } from "react-router-dom";
import LoginClass from "./Components/LoginClass";
import "./App.css";

class App extends Component {
  state = {
    heading: "Counter component props",
  };
  render() {
    // const {heading} = this.state;
    return (
      <>
          <Routes>
            <Route path="/" element={<LoginClass />} />
          </Routes>
        {/* <h1>Learning react js by class component</h1>
        <Counter heading={heading} />
        <FunctionalCounter  heading={heading}/> */}
      </>
    );
  }
}

export default App;
