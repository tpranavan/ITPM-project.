import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../../Healistry.png";
import Form from "react-bootstrap/Form";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import "bootstrap/dist/css/bootstrap.min.css";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";
import swal from "sweetalert";
import { useHistory } from "react-router-dom";

function Ambulance_edit() {
  const [name, setName] = useState("");
  const [since, setSince] = useState("");
  const [numberofambulance, setNumberofambulance] = useState("");
  const [contact, setContact] = useState("");
  const [dutyhours, setDutyhours] = useState("");
  const [hospitals, setHospitals] = useState("");
  const [image, setImage] = useState("");
  const [postImage, setPostImage] = useState({ myFile: "" });
  
  const [location, setLocation] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
 
  const [Ambulance, setAmbulance] = useState([]);

  // let [errors_dname, seterrors_dname] = useState("");
  // let [errors_location, seterrors_location] = useState("");
  // let [errors_noe, seterrors_noe] = useState("");
  // let [errors_since, seterrors_since] = useState("");
  // let [errors_description, seterrors_description] = useState("");
  // let [errors_cnumber, seterrors_cnumber] = useState("");

  const id = window.sessionStorage.getItem("AmbulanceID");

  useEffect(() => {
    axios.get(`http://localhost:4000/ambulance/${id}`).then((response) => {
      //   console.log(response.data);
      setName(response.data.name);
      setSince(response.data.since);
      setNumberofambulance(response.data.numberofambulance);
      setContact(response.data.contact);
      setDutyhours(response.data.dutyhours);
      setLocation(response.data.location);
      setHospitals(response.data.hospitals);
      
      setAmbulance(response.data);
      console.log(response.data);
    });
  }, []);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      margin: 50,
    },
    paper: {
      padding: theme.spacing(5),
      margin: "auto",
      maxWidth: 1000,
    },
  }));

  const classes = useStyles();
  const history = useHistory();

  function UpdateAmbulanceCompany() {
    // setError(null);
    // setLoading(true);

    // let errors = {};

    // //Form Validation
    // if (!name.trim()) {
    //   errors.name = "Company Name field required";
    //   seterrors_dname(errors.name);
    // }
    // if (!location.trim()) {
    //   errors.location = "Location field required";
    //   seterrors_location(errors.location);
    // }
    // if (!noe.trim()) {
    //   errors.noe = "Number of Employee field required";
    //   seterrors_noe(errors.noe);
    // }
    // if (!since.trim()) {
    //   errors.since = "Since field required";
    //   seterrors_since(errors.since);
    // }
    // if (!description.trim()) {
    //   errors.description = "Description field required";
    //   seterrors_description(errors.description);
    // }
    // if (!cnumber.trim()) {
    //   errors.cnumber = "Contact Number field required";
    //   seterrors_cnumber(errors.cnumber);
    // }

    // if (
    //   name === "" ||
    //   location === "" ||
    //   noe === "" ||
    //   since === "" ||
    //   description === ""
    // ) {
    //   setLoading(false);
    // } else {
    //   console.log({
    //     CName: name,
    //     Location: location,
    //     NOE: noe,
    //     CNumber: cnumber,
    //     Since: since,
    //     Image: postImage.myFile,
    //     Description: description,
    //   });
      axios
        .patch(`http://localhost:4000/ambulance/${id}`, {
          name: name,
          since: since,
          numberofambulance: numberofambulance,
          contact: contact,
          dutyhours: dutyhours,
          location: location,
          hospitals: hospitals,
          image:image
        })
        .then((response) => {
          setLoading(false);
          swal(
            "Good job!",
            "Your data has been successfully Updated..!",
            "success"
          );
          // window.location.reload();
          history.push("/Ambulance_update");
        })
        .catch((error) => {
          setLoading(false);
          alert("Sorry, Something Error...");
          swal("Sorry!", "Something Error..!", "warning");
        });
    }
  

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    // setPostImage({ ...postImage, myFile: base64 });
    setPostImage({ myFile: base64 });
    // console.log(base64);
  };

  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <div className="app-header header-shadow">
          <div className="app-header__logo">
            Dashboard
            <div className="header__pane ml-auto">
              <div>
                <button
                  type="button"
                  className="hamburger close-sidebar-btn hamburger--elastic"
                  data-class="closed-sidebar"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="app-header__mobile-menu">
            <div>
              <button
                type="button"
                className="hamburger hamburger--elastic mobile-toggle-nav"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
          <div className="app-header__menu">
            <span>
              <button
                type="button"
                className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
              >
                <span className="btn-icon-wrapper">
                  <i className="fa fa-ellipsis-v fa-w-6" />
                </span>
              </button>
            </span>
          </div>
          <div className="app-header__content">
            <div className="app-header-left">
              <div className="search-wrapper">
                <div className="input-holder">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Type to search"
                  />
                  <button className="search-icon">
                    <span />
                  </button>
                </div>
                <button className="close" />
              </div>
            </div>
            <div className="app-header-right">
              <div className="header-btn-lg pr-0">
                <div className="widget-content p-0">
                  <div className="widget-content-wrapper">
                    <div className="widget-content-left">
                      <div className="btn-group">
                        <a
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          className="p-0 btn"
                        >
                          <i className="fa fa-angle-down ml-2 opacity-8" />
                        </a>
                        <div
                          tabIndex={-1}
                          role="menu"
                          aria-hidden="true"
                          className="dropdown-menu dropdown-menu-right"
                        >
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            User Account
                          </button>
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            Settings
                          </button>
                          <h6 tabIndex={-1} className="dropdown-header">
                            Header
                          </h6>
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            Actions
                          </button>
                          <div tabIndex={-1} className="dropdown-divider" />
                          <button
                            type="button"
                            tabIndex={0}
                            className="dropdown-item"
                          >
                            Dividers
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="widget-content-left  ml-3 header-user-info">
                      <div className="widget-heading">Admin Sadhu </div>
                      <div className="widget-subheading">
                        Full-Stack Developer
                      </div>
                    </div>
                    <div className="widget-content-right header-user-info ml-3">
                      <button
                        type="button"
                        className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                      >
                        <i className="fa text-white fa-calendar pr-1 pl-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="app-main">
          <div className="app-sidebar sidebar-shadow">
            <div className="app-header__logo">
              <div className="logo-src" />
              <div className="header__pane ml-auto">
                <div>
                  <button
                    type="button"
                    className="hamburger close-sidebar-btn hamburger--elastic"
                    data-class="closed-sidebar"
                  >
                    <span className="hamburger-box">
                      <span className="hamburger-inner" />
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="app-header__mobile-menu">
              <div>
                <button
                  type="button"
                  className="hamburger hamburger--elastic mobile-toggle-nav"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
            <div className="app-header__menu">
              <span>
                <button
                  type="button"
                  className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                >
                  <span className="btn-icon-wrapper">
                    <i className="fa fa-ellipsis-v fa-w-6" />
                  </span>
                </button>
              </span>
            </div>
            <div className="scrollbar-sidebar">
              <div className="app-sidebar__inner">
                <ul className="vertical-nav-menu">
                  <li className="app-sidebar__heading">Dashboards</li>
                  <li>
                    <a href="/">
                      <i className="metismenu-icon pe-7s-rocket" />
                      Dashboard
                    </a>
                  </li>
                  <li className="app-sidebar__heading">Components</li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      Doctors' Details
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/Doctors_Add">
                          <i className="metismenu-icon" />
                          Doctors | Add
                        </a>
                      </li>
                      <li>
                        <a href="/Doctors_update">
                          <i className="metismenu-icon"></i> Doctors |
                          Edit,Delete
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      Hospitals Details
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="Hospital_add">
                          <i className="metismenu-icon" />
                          Hospitals | Add
                        </a>
                      </li>
                      <li>
                        <a href="Hospital_update">
                          <i className="metismenu-icon"></i> Hospitals |
                          Edit,Delete
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#" className="mm-active">
                      <i className="metismenu-icon pe-7s-diamond" />
                      Cleaning Company
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="cleaning_add" className="mm-active">
                          <i className="metismenu-icon" />
                          Cleaning Company | Add
                        </a>
                      </li>
                      <li>
                        <a href="cleaning_update">
                          <i className="metismenu-icon"></i> Cleaning Co... |
                          Update
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="#">
                      <i className="metismenu-icon pe-7s-diamond" />
                      Ambulance Details
                      <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                    </a>
                    <ul>
                      <li>
                        <a href="/Ambulance_Add">
                          <i className="metismenu-icon" />
                          Ambulance | Add
                        </a>
                      </li>
                      <li>
                        <a href="/Ambulance_update">
                          <i className="metismenu-icon"></i> Ambulance |
                          Edit,Delete
                        </a>
                      </li>
                    </ul>
                  </li>
                
                 
                </ul>
              </div>
            </div>
          </div>
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <div className="page-title-wrapper">
                  <div className="page-title-heading">
                    <div className="page-title-icon">
                      <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                    </div>
                    <div>
                      Add Cleaning Company Details
                      <div className="page-title-subheading">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Duis risus massa, tempor a imperdiet vel, faucibus sit
                        amet arcu.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Form Here */}
              <div className={classes.root}>
                <Paper className={classes.paper}>
                  <Form>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                       Organization Name
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          defaultValue={Ambulance.name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Company Name"
                        />
                        {/* {errors_dname && (
                          <span style={{ color: "red" }} className="errors">
                            {errors_dname}
                          </span>
                        )} */}
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Since
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          defaultValue={Ambulance.since}
                          onChange={(e) => setSince(e.target.value)}
                          placeholder="Since"
                        />
                        {/* {errors_location && (
                          <span style={{ color: "red" }} className="errors">
                            {errors_location}
                          </span>
                        )} */}
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Number of Ambulance
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="number"
                          defaultValue={Ambulance.numberofambulance}
                          onChange={(e) => setNumberofambulance(e.target.value)}
                          placeholder="Number of Employees"
                        />
                        {/* {errors_noe && (
                          <span style={{ color: "red" }} className="errors">
                            {errors_noe}
                          </span>
                        )} */}
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Contact Number
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="number"
                          defaultValue={Ambulance.contact}
                          onChange={(e) => setContact(e.target.value)}
                          placeholder="Contact Number"
                        />
                        {/* {errors_cnumber && (
                          <span style={{ color: "red" }} className="errors">
                            {errors_cnumber}
                          </span>
                        )} */}
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Duty Hours
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="number"
                          defaultValue={Ambulance.dutyhours}
                          onChange={(e) => setDutyhours(e.target.value)}
                          placeholder="Since Year"
                        />
                        {/* {errors_since && (
                          <span style={{ color: "red" }} className="errors">
                            {errors_since}
                          </span>
                        )} */}
                      </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Location
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          defaultValue={Ambulance.location}
                          onChange={(e) => setLocation(e.target.value)}
                          placeholder="Description"
                        />
                        {/* {errors_description && (
                          <span style={{ color: "red" }} className="errors">
                            {errors_description}
                          </span>
                        )} */}
                      </Col>
                    </Form.Group>
                    
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Hospitals
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          defaultValue={Ambulance.hospitals}
                          onChange={(e) => setHospitals(e.target.value)}
                          placeholder="Description"
                        />
                        {/* {errors_description && (
                          <span style={{ color: "red" }} className="errors">
                            {errors_description}
                          </span>
                        )} */}
                      </Col>
                    </Form.Group>

                    {/* <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Description
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="text"
                          defaultValue={Ambulance.image}
                          onChange={(e) => setImage(e.target.value)}
                          placeholder="Description"
                        />
                      
                      </Col>
                    </Form.Group> */}
                    
                    <Form.Group as={Row} className="mb-3" controlId="">
                      <Form.Label column sm={3}>
                        Image
                      </Form.Label>
                      <Col sm={9}>
                        <Form.Control
                          type="file"
                          label="Image"
                          name="myFile"
                          accept=".jpeg, .png, .jpg"
                          onChange={(e) => handleFileUpload(e)}
                        />
                      </Col>
                    </Form.Group>
                    <center>
                      <div className="button">
                        <input
                          type="button"
                          className="Login-Button"
                          onClick={UpdateAmbulanceCompany}
                          value={loading ? "Loading... Please Wait!" : "SUBMIT"}
                          // className="btn btn-block app-sidebar__heading"
                        />
                      </div>
                    </center>
                  </Form>
                </Paper>
              </div>
            </div>
            <div className="app-wrapper-footer">
              <div className="app-footer">
                <div className="app-footer__inner">
                  <div className="app-footer-left"></div>
                  <div className="app-footer-right">
                    <ul className="nav">
                      <li className="nav-item">
                        <a href="javascript:void(0);" className="nav-link">
                        Copyright 2022 . All rights reserved
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Ambulance_edit;
