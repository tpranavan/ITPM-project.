import React, { useState, useEffect } from "react";
import logo from "../../../Healistry.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import { makeStyles } from '@material-ui/core/styles';
import Col from 'react-bootstrap/esm/Col';
// import Button from '@restart/ui/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {
      width: "100%",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));

function Ambulance_update(props) {
    // const [ambulanceID, setAmbulanceID] = useState([]);
    const classes = useStyles();
    const [ambulanceid, setAmbulanceID] = useState([]);
    const [ambulance, setAmbulance] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    const getRequest = () => {
        axios
            .get('http://localhost:4000/ambulance')
            .then(response => {
                setAmbulance(response.data);

            });
    }

    useEffect(() => {
        getRequest()
    }, [ambulance]);

    function deleteAmbulance(_id) {
        alert("Are you confirm to delete?");
        fetch(`http://localhost:4000/ambulance/${_id}`, {
            method: 'DELETE'
        }).then((response) => {
            response.json();
            alert("Your Date Successfully Deleted...!");
        })
    }

    function editAmbulance(_id) {
        console.log(_id);
        window.sessionStorage.setItem("AmbulanceID", _id);
        window.location='/AmbulanceEdit'
    }
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
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                    }}
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
                                                <a href="/Ambulance_Add">
                                                    <i className="metismenu-icon" />
                                                    Ambulance | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Ambulance_update" className="mm-active">
                                                    <i className="metismenu-icon"></i> Ambulance | Edit,Delete
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
                                            <h1>Ambulance | Update</h1>
                                            <div className="page-title-subheading">
                                                {/* This is an example dashboard created using build-in elements
                                            and components. */}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>


                       
                            <div className={classes.root}>
                                {ambulance.filter((val) => {
                                    if (searchTerm == "") {
                                        return val;
                                    } else if (val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                        return val;
                                    }
                                }).map((item) => (
                                    <div className="card mb-3 melri_card" style={{ margin: '3%', width: '95%' }}>


                                        <div className="row no-gutters" width="100%">
                                            <div className="col-md-4">
                                                {/* <img src={item.ambImg} className="card-img meltri_card_img" alt="..." /> */}
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{item.name}</h5>
                                                    <table className="ambtable">
                                                        <tr style={{ padding: '25px' }}>
                                                            <td style={{ paddingLeft: '10px', paddingTop: '10px;' }}>Contact Number</td>
                                                            <td style={{ paddingLeft: '15px', paddingTop: '10px;' }}>{item.contact}</td>
                                                        </tr >
                                                        <tr style={{ padding: '25px' }}>
                                                            <td style={{ paddingLeft: '10px', paddingTop: '10px;' }}>Address</td>
                                                            <td style={{ paddingLeft: '15px', paddingTop: '10px;' }}>{item.location}</td>
                                                        </tr >
                                                        <tr style={{ padding: '25px' }}>
                                                            <td style={{ paddingLeft: '10px', paddingTop: '10px;' }}>No of ambulance</td>
                                                            <td style={{ paddingLeft: '15px', paddingTop: '10px;' }}> {item.numberofambulance}</td>
                                                        </tr>
                                                        <tr style={{ padding: '25px' }}>
                                                            <td style={{ paddingLeft: '10px', paddingTop: '10px;' }}>Registered since</td>
                                                            <td style={{ paddingLeft: '15px', paddingTop: '10px;' }}>  {item.since}</td>
                                                        </tr>
                                                        <tr style={{ padding: '25px' }}>
                                                            <td style={{ paddingLeft: '10px', paddingTop: '10px;' }}>Duty hours</td>
                                                            <td style={{ paddingLeft: '15px', paddingTop: '10px;' }}> {item.dutyhours}</td>
                                                        </tr>
                                                        <tr style={{ padding: '25px' }}>
                                                            <td style={{ paddingLeft: '10px', paddingTop: '10px;' }}>Duty Hospitals</td>
                                                            <td style={{ paddingLeft: '15px', paddingTop: '10px;' }}> {item.hospitals}</td>
                                                        </tr>

                                                    </table>
                                                    <button variant="primary" className="subbtn" size="lg" onClick={() => editAmbulance(item._id)}>
                                                        Edit
                                                    </button>{'      '}
                                                    <button variant="secondary" className="subbtn" size="lg" onClick={() => deleteAmbulance(item._id)}>
                                                        Delete
                                                    </button>
                                                    <p className="card-text">
                                                        {/* <small className="text-muted">Last updated 3 mins ago</small> */}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                ))}
</div>
                        
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

export default Ambulance_update