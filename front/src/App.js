import React from 'react';
import './App.css';
import Toolbar from "./components/UI/Toolbar/Toolbar";
import {Container} from "reactstrap";
import Routes from "./Routes";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {NotificationContainer} from "react-notifications";

function App() {
  return (
    <div className="App">
        <NotificationContainer/>
      <header>
        <Toolbar/>
      </header>
      <Container>
        <Routes/>
      </Container>
    </div>
  );
}
const mapStateToProps = state => ({
    user: state.users.user,
});

export default withRouter(connect(mapStateToProps, null)(App));
