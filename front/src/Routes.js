import React from 'react';
import {Route, Switch} from "react-router-dom";
import Gallery from "./container/Gallery/Gallery";


const Routes = ({user}) => {
    return (
        <Switch>
            <Route path="/" exact component={Gallery} />
        </Switch>
    );
};

export default Routes;
