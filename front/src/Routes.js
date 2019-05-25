import React from 'react';
import {Route, Switch} from "react-router-dom";
import Gallery from "./container/Gallery/Gallery";
import Register from "./container/Register/Register";


const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Gallery} />
            <Route path="/register" exact component={Register}/>
        </Switch>
    );
};

export default Routes;
