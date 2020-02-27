import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import Home from '../components/Home'
import SignUp from '../components/SignUp'
import SignIn from '../components/SignIn'


export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
            </Switch>
        </Router>
    );
}
