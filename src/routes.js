import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import App from './App';
import { Catalogo } from './component/catologo/Catalogo';
import { Nosotros } from './component/nosotros/Nosotros';




function Routes(){
    return(
        <Router>
            <Switch>
               <Route  exact path= "/" component ={App}/>
               <Route  path= "/catalogo" component ={Catalogo}/>
               <Route  path= "/nosotros" component ={Nosotros}/>
            </Switch>
        </Router>
    );
}
export default Routes;



