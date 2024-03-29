import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Ambulance from './component/pages/Ambulance';

import Home from "./component/pages/home";
import Nav from "./component/templates/header";
import Footer from "./component/templates/footer";
import doctor from './component/pages/doctor';
import about from './component/pages/about';
import contact from './component/pages/contact';
import cleaning from './component/pages/cleaning';
import Hospital from "./component/pages/Hospital";




// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Ambulance_Details" component={Ambulance} />
      <Route exact path="/Hospital" component={Hospital} />
      <Route exact path="/Doctors" component={doctor} />
      <Route exact path="/about" component={about} />
      <Route exact path="/contact" component={contact} />
      <Route exact path="/cleaning" component={cleaning} />
  


    </Switch>
  );
};


const App = () => {
  return (
    <Router>
      <Nav />
      <Routing />
      <Footer />
    </Router>
  );
};

export default App;
