import React from 'react';
import './App.css';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Container} from "reactstrap";
import Routes from "./Routes";

function App() {
  return (
    <div className="App">
      <header>
        <Toolbar/>
      </header>
      <Container>
        <Routes/>
      </Container>
    </div>
  );
}

export default App;
