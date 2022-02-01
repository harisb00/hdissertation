import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import Physical from "./Pages/Physical";
import Social from "./Pages/Social";

import Treatments from  "./Pages/Treatments";
import ReachOut from "./Pages/ReachOut";
import Help from "./Pages/Help";
import Plan from "./Pages/AsthmaPlan";



import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/Physical" exact component={Physical}/>
                    <Route path="/Social" exact component={Social}/>
                    <Route path="/Social" exact component={Social}/>
                    <Route path="/Treatments" exact component={Treatments}/>
                    <Route path="/Videos" exact component={Help}/>
                    <Route path="/ReachOut" exact component={ReachOut}/>
                    <Route path="/AsthmaPlan" exact component={Plan}/>

                    
                    


                </Switch>
            </Router>
        )
    }
}
