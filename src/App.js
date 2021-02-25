import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from "./components/NavBar"
import Table from "./components/Table"
import './App.css';

function App() {
  return (
    <Router basename = "/user_directory">
    <div className="App">
      <NavBar />
      <Table />
    </div>
    </Router>
  );
}

export default App;
