import React, { useState, useEffect } from "react";
import logo from "../../../Healistry.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@restart/ui/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import axios from "axios";

const Ambulance_add = (props, errors) => {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            margin: 50
        },
        paper: {
            padding: theme.spacing(5),
            margin: 'auto',
            maxWidth: 1000,
        },
    }));

    const classes = useStyles();


    const [name, setName] = useState('')
    const [since, setSince] = useState('')
    const [numberofambulance, setNumberofambulance] = useState('')
    const [contact, setContact] = useState('')
    const [dutyhours, setDutyhours] = useState('')
    const [location, setLocation] = useState('')
    const [hospitals, setHospitals] = useState('')

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);


  let [errors_name, seterrors_name] = useState("");
  let [errors_since, seterrors_since] = useState("");
  let [errors_numberofambulance, seterrors_numberofambulance] = useState("");
  let [errors_contact, seterrors_contact] = useState("");
  let [errors_dutyhours, seterrors_dutyhours] = useState("");
  let [errors_location, seterrors_location] = useState("");
  let [errors_hospitals, seterrors_hospitals] = useState("");

    function CreateAmbulance() {
        console.log("working");
        let item = { name, since, numberofambulance, contact, dutyhours, location, hospitals }
        console.log(item);
        setError(null);
        setLoading(true);
    
        let errors = {};

        if (!name.trim()) {
            errors.name = "Company Name field required";
            seterrors_name(errors.name);
          }
          if (!since.trim()) {
            errors.since = "since field required";
            seterrors_since(errors.since);
          }
          if (!numberofambulance.trim()) {
            errors.numberofambulance = "numberofambulance field required";
            seterrors_numberofambulance(errors.numberofambulance);
          }
          if (!contact.trim()) {
            errors.contact = "Please Enter a Valid contact";
            seterrors_contact(errors.contact);
          }
          if (contact.length < 10) {
            errors.since = "Please Enter a Valid contact";
            seterrors_contact(errors.contact);
          }
          if (!dutyhours.trim()) {
            errors.dutyhours = "dutyhours field required";
            seterrors_dutyhours(errors.dutyhours);
          }
          if (!location.trim()) {
            errors.location = "Please Enter a Valid  location";
            seterrors_location(errors.location);
          }
          if (!hospitals.trim) {
            errors.hospitals = "Please Enter a Valid  hospitals";
            seterrors_hospitals(errors.hospitals);
          }

        if (
            name === "" ||
            location === "" ||
            numberofambulance === "" ||
            contact === "" ||
            dutyhours === "" ||
            location === "" ||
            hospitals === ""
          ) {
            setLoading(false);
          } else {

        axios.post("http://localhost:4000/ambulance",
            {
                name: name,
                since: since,
                numberofambulance: numberofambulance,
                contact: contact,
                dutyhours: dutyhours,
                hospitals: hospitals,
  
                
            }
        ).then(response => {
            alert("Registation Finished");
        }).catch(error => {
            alert("Registation Faild");
        })
    }
    }
    // function Ambulance_add() {

    return (
        <div>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <div className="app-header header-shadow">
                    <div className="app-header__logo">
                        {/* <div className="logo-src" /> */}
                        Dashboard
                        {/* <div style={{ fontFamily: "lyncer", fontSize: "10" }}>Healistry</div> */}
                        <div className="header__pane ml-auto">
                            <div>
                                <button
                                    type="button"
                                    className="hamburger close-sidebar-btn hamburger--elastic"
                                    data-class="closed-sidebar">
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
                                className="hamburger hamburger--elastic mobile-toggle-nav">
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
                                            <div className="widget-heading">Admin Sadhu</div>
                                            <div className="widget-subheading">Full-Stack Developer</div>
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
                                                    <i className="metismenu-icon"></i> Doctors | Edit,Delete
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
                                                    <i className="metismenu-icon"></i> Hospitals | Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Cleaning Company
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="cleaning_add">
                                                    <i className="metismenu-icon" />
                                                    Cleaning Company | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="cleaning_update">
                                                    <i className="metismenu-icon"></i> Cleaning Co... | Update
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mm-active">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Ambulance Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/Ambulance_Add" className="mm-active">
                                                    <i className="metismenu-icon" />
                                                    Ambulance | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Ambulance_update">
                                                    <i className="metismenu-icon"></i> Ambulance | Edit,Delete
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Ambulance_report">
                                                    <i className="metismenu-icon"></i> Ambulance | Report
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
                                            <h1>Ambulance | Add</h1>
                                            <div className="page-title-subheading">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* add form */}
                            <Card>

                                <Form style={{ marginLeft: '5%', marginTop: '3%', marginBottom: '3%' }}>
                                    <Form.Group as={Row} className="mb-3" controlId="" >
                                        <Form.Label column sm={3}>
                                            Organization Name
                                        </Form.Label>
                                        <Col sm={5}>
                                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="" >
                                        <Form.Label column sm={3}>
                                            Registered Since
                                        </Form.Label>
                                        <Col sm={5}>
                                            <Form.Control type="number" value={since} onChange={(e) => setSince(e.target.value)} />
                                        </Col>
                                    </Form.Group>
                                    {/* <Form.Group as={Row} className="mb-3" controlId="" >
                                        <Form.Label column sm={3}>
                                            No of Ambulance
                                        </Form.Label>
                                        <Col sm={5}>
                                            <Form.Control type="number" />
                                        </Col>
                                    </Form.Group> */}
                                    <Form.Group as={Row} className="mb-3" controlId="">
                                        <Form.Label column sm={3}>
                                            No of Ambulance Registered
                                        </Form.Label>
                                        <Col sm={5}>
                                            <Form.Control type="number" value={numberofambulance} onChange={(e) => setNumberofambulance(e.target.value)} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="">
                                        <Form.Label column sm={3}>
                                            Contact Number
                                        </Form.Label>
                                        <Col sm={5}>
                                            <Form.Control type="number" value={contact} onChange={(e) => setContact(e.target.value)} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="">
                                        <Form.Label column sm={3}>
                                            Duty Hours
                                        </Form.Label>
                                        <Col sm={5}>
                                            <Form.Control type="number" value={dutyhours} onChange={(e) => setDutyhours(e.target.value)} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="">
                                        <Form.Label column sm={3}>
                                            Location
                                        </Form.Label>
                                        <Col sm={5}>
                                            <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
                                        </Col>
                                    </Form.Group>
                                    <Form.Group as={Row} className="mb-3" controlId="">
                                        <Form.Label column sm={3}>
                                            Servicing Hospitals
                                        </Form.Label>
                                        <Col sm={5}>
                                            <Form.Control type="text" value={hospitals} onChange={(e) => setHospitals(e.target.value)} />
                                        </Col>
                                    </Form.Group>
                                    {/* <Form.Group as={Row} className="mb-3" controlId="">
                                        <Form.Label column sm={3}>
                                            Image
                                        </Form.Label>
                                        <Col sm={5}>
                                            <Form.Control type="file" value={image} onChange={(e) => setImage(e.target.value)} />
                                        </Col>
                                    </Form.Group> */}
                                    <div style={{ marginTop: '5%', marginLeft: '65%' }}>

                                        <div class="btn-group mr-2" role="group" aria-label="Second group">
                                            <button type="button" onClick={CreateAmbulance} class="btn btn-secondary">SUBMIT</button>
                                        </div>

                                    </div>

                                </Form>
                            </Card>

                            {/* Body Part */}
                        </div >
                        <div className="app-wrapper-footer" style={{ marginTop: '3%' }}>
                            <div className="app-footer">
                                <div className="app-footer__inner">
                                    <div className="app-footer-left">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Footer Link 1
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Footer Link 2
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="app-footer-right">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Footer Link 3
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    <div className="badge badge-success mr-1 ml-0">
                                                        <small>NEW</small>
                                                    </div>
                                                    Footer Link 4
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >

        </div >
    )
                                }

export default Ambulance_add;