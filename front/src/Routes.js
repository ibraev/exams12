import React from 'react';
import {Route, Switch} from "react-router-dom";
import Gallery from "./container/Gallery/Gallery";
import Register from "./container/Register/Register";
import Login from "./container/Login/Login";
import NewPhoto from "./container/NewPhoto/NewPhoto";


const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/register" exact component={Register}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/add" exact component={NewPhoto}/>
        </Switch>
    );
};

export default Routes;
