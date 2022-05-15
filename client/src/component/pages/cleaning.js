import React, { useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Breadcrumbs from "@material-ui/core/Breadcrumbs";
import Link from "@material-ui/core/Link";
import HomeIcon from "@material-ui/icons/Home";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import GrainIcon from "@material-ui/icons/Grain";
import axios from "axios";
import SearchIcon from "@material-ui/icons/Search";

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

function Cleaning() {
  const classes = useStyles();

  const [cleaning, setCleaning] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getRequest = () => {
    axios.get("http://localhost:4000/cleaning").then((response) => {
      setCleaning(response.data);
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
                <Link color="inherit" href="/" className={classes.link}>
                  <HomeIcon className={classes.icon} />
                  Home
                </Link>
                <Link
                  color="inherit"
                  href="/getting-started/installation/"
                  onClick={handleClick}
                  className={classes.link}
                >
                  <WhatshotIcon className={classes.icon} />
                  Services
                </Link>
                <Typography color="textPrimary" className={classes.link}>
                  <GrainIcon className={classes.icon} />
                  Cleaning Companies
                </Typography>
              </Breadcrumbs>
       
                <div className="col-xl-9 col-lg-8">
                  {cleaning
                    .filter((val) => {
                      if (searchTerm == "") {
                        return val;
                      } else if (
                        val.CName.toLocaleLowerCase().includes(
                          searchTerm.toLocaleLowerCase()
                        )
                      ) {
                        return val;
                      }
                    })
                    .map((item) => (
                      <div className="pagination-wrap">
                        <div className="pagination-wrap_column1">
                          <img
                            src={
                              item.Image ? item.Image : "./images/cleaning.png"
                            }
                            alt="Profile01"
                            className="pagination-wrap_image"
                          />
                        </div>
                        <div className="pagination-wrap_column2">
                          <h2>{item.CName}</h2>
                          <p>Since {item.Since}</p>
                          <table>
                            <tr>
                              <th>Number of Employees</th>
                              <td>{item.NOE} Employees</td>
                              <th>Contact Numeber</th>
                              <td>{item.CNumber}</td>
                            </tr>
                            <tr>
                              <th>Location</th>
                              <td colspan="3">{item.Location}</td>
                            </tr>
                            <tr>
                              <th>Description</th>
                              <td colspan="3">{item.Description}</td>
                            </tr>
                            <tr>
                              <th colspan="2">
                                <p>{item.createdAt}</p>
                              </th>
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

export default Cleaning;
