import React from 'react'
import Container from '@material-ui/core/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function home() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const styles_home = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = styles_home();
    return (
        <div style={{backgroundColor: '#58caed'}}>
            <Container>
                <table className="Home_1">
                    <tr>
                        {/* <td><img src="/images/doctors.jpeg" alt="Home 1"style={{width:"100%"}}></img></td> */}
                        <td className="home1_link">
                            <h3 className="home1" style={ {textAlign: 'center'}}>
                            <br />
                                <sapn >   The wish for healing has Always been half of health</sapn>
                                <br />
                                
                            </h3>
                            
                        </td>
                    </tr>
                </table>
            </Container>
            <div className="home_slider">
                <Container>
                    <div>
                        <h1 className="home2_heading">Our Focus</h1>
                    </div>
                    <Slider {...settings}>

                        <a href="Doctors" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/doctor.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Doctors Details</h5>
                                    <p>
                                        A doctor is tasked with interacting with patients, diagnosing medical problems and successfully treating illness or injury.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="Hospital" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/hospital.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Hospital Details</h5>
                                    <p>
                                        A hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="Ambulance_Details" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/ambulance.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Ambulance Details</h5>
                                    <p>
                                        They can provide first aid, emergency care, various medicines and life support, and carry patients to hospital.
                                    </p>
                                </div>
                            </div>
                        </a>
                        <a href="cleaning" className="home_slider_link">
                            <div className="contact-info-box text-center mb-30 slider_height">
                                <div className="contact-box-icon">
                                    <center>
                                        <img src="img/icon/technical-support.png" width="45px" style={{ paddingTop: "10px" }}></img>
                                    </center>
                                </div>
                                <div className="contact-info-content">
                                    <h5 className="home_slider_link_h5">Cleaning Company Details</h5>
                                    <p>
                                        Janitorial services aim to keep and maintain any kind of office clean and healthy.
                                    </p>
                                </div>
                            </div>
                        </a>
                      
                   
                    </Slider>
                </Container>
            </div>
            <Container>
                <table className="Home_1">
                    <tr>
                        <td className="home4_link">
                            <h1 className="home4_left">
                                <sapn>The Greatest Wealth Is Health</sapn><br />
                                <sapn> </sapn>
                   
                            </h1>
                        </td>
                        <td className="home4_link">
                            <p className="home4_right"><b> The entry of healthcare managemnt into the state dominated healthcare sector in 1985, 
                                saw the private health care system take root in Sri Lanka. 
                                The launch of the hospital and the overwhelming response it received from the people demonstrated a long felt need 
                                for superior healthcare in a pleasant environment.</b></p>
                        </td>
                    </tr>
                </table>
            </Container>

        </div>
    )
}

export default home
