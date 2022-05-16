import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

import Ambulance_add from "./components/pages/Ambulance/Ambulance_add";
import Ambulance_update from "./components/pages/Ambulance/Ambulance_update";
import Dashbord from "./components/Dashbord";
import Doctors_add from "./components/pages/Doctors/Doctors_add";
import Doctors_update from "./components/pages/Doctors/Doctors_update";
import cleaning_update from "./components/pages/Cleaning_com/cleaning_update";
import cleaning_add from "./components/pages/Cleaning_com/cleaning_service_add";
import add from "./components/pages/Hospital/add";
import page1 from "./components/pages/Hospital/page1";
import Doctors_Edit from "./components/pages/Doctors/Doctors_Edit";
import DReport from "./components/pages/Doctors/Report";
import C_Report from "./components/pages/Cleaning_com/C_Report";
import cleaning_service_edit from "./components/pages/Cleaning_com/cleaning_service_edit";
import Ambulance_edit from "./components/pages/Ambulance/Ambulance_edit";
import Hospital_edit from "./components/pages/Hospital/Hospital_edit";
import AReport from "./components/pages/Ambulance/Report";
import HReport from "./components/pages/Hospital/Report";

// All routing routes ddefined here
const Routing = () => {
  return (
    <Switch>
      <Route exact path="/" component={Dashbord} />
      <Route exact path="/Doctors_update" component={Doctors_update} />
      <Route exact path="/Doctors_add/" component={Doctors_add} />
      <Route exact path="/Ambulance_Add" component={Ambulance_add} />
      <Route exact path="/Ambulance_update" component={Ambulance_update} />
      <Route exact path="/cleaning_add" component={cleaning_add} />
      <Route exact path="/cleaning_update" component={cleaning_update} />
      <Route exact path="/Hospital_add" component={add} />
      <Route exact path="/Hospital_update" component={page1} />
      <Route exact path="/Doctors_Edit" component={Doctors_Edit} />
      <Route exact path="/Doctros_Report" component={DReport} />
      <Route exact path="/Cleaning_Report" component={C_Report} />
      <Route exact path="/Cleaning_edit" component={cleaning_service_edit} />
      <Route exact path="/AmbulanceEdit" component={Ambulance_edit} />
      <Route exact path="/editHospital" component={Hospital_edit}/>
      <Route exact path="/Ambulance_report" component={AReport}/>
      <Route exact path="/Hospital_report" component={HReport}/>

      {/* <Route exact path="/Cleaning_edit" component={cleaning_service_edit} /> */}
    </Switch>
  );
};

function App() {
  return (
    <Router>
      <Routing />
    </Router>
  );
}

export default App;
