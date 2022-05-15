// import React from 'react'
// import Container from '@material-ui/core/Container';
import Grid from "@material-ui/core/Grid";
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import GrainIcon from "@material-ui/icons/Grain";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";
import ReactPaginate from "react-paginate";


const useStyles = makeStyles((theme) => ({
  link: {
    display: "flex",
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}



function Ambulance() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState("");
  const [ambulance, setAmbulance] = useState([]);

  const getRequest = () => {
    axios.get("http://localhost:4000/ambulance").then((response) => {
      setAmbulance(response.data);
    });
  };

  useEffect(() => {
    getRequest();
  }, []);
  
  return (
    <div>
      <Container>
        <main>
          {/* shop-area */}
          <div className="shop-area gray-bg pt-10 pb-100">
            <div className="custom-container-two">
              <Breadcrumbs aria-label="breadcrumb" className="Breadcrumbs">
                <Link color="inherit" href="./" className={classes.link}>
                  <HomeIcon className={classes.icon} />
                  Home
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                  <GrainIcon className={classes.icon} />
                  Ambulance Details
                </Typography>
              </Breadcrumbs>
       
                <div className="col-xl-9 col-lg-8">
                  {ambulance
                    .filter((val) => {
                      if (searchTerm == "") {
                        return val;
                      } else if (
                        val.name.toLocaleLowerCase().includes(
                          searchTerm.toLocaleLowerCase()
                        )
                      ) {
                        return val;
                      }
                    })
                    .map((item, index) => (
                      <div className="pagination-wrap" key={index}>
                        <div className="pagination-wrap_column1">
                          <img
                            src={
                              item.selectedFile
                                ? item.selectedFile
                                : "./images/profile.jpeg"
                            }
                            alt="Profile01"
                            className="pagination-wrap_image"
                            height="350px"
                            width="200px"
                          />
                        </div>
                        {console.log(item.selectedFile)}
                        <div className="pagination-wrap_column2">
                          <h2>{item.name}</h2>
                          <p>{item.location}</p>
                          <table>
                          <tr>
                              <th>since  </th>
                              <td>{item.since}</td>
                          </tr>
                              <tr>
                              <th>numberofambulance </th>
                              <td>{item.numberofambulance}</td>
                              </tr>
                          <tr>
                              <th>contact </th>
                              <td >{item.contact}</td>
                          </tr>
                         

                            <tr>
                              <th>dutyhours </th>
                              <td >{item.dutyhours}</td>
                          </tr>
                          <tr>
                              <th>location </th>
                              <td >{item.location}</td>
                          </tr>
                         

                            <tr>
                            
                           
                              <td>{item.image}</td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
      
          {/* shop-area-end */}
        </main>
      </Container>
    </div>
  );
}

export default Ambulance;
