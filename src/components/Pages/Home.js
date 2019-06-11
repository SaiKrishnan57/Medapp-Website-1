import React from 'react';
import { Jumbotron as Jumbo, Container,Image,Row,Col} from 'react-bootstrap';
import './imagestyles.css';
import styled from 'styled-components';
import bgimg from './images/Medapp1.jpg';
import services from './images/services.jpg';
import impact from './images/societal.jpg';
import team from './images/ourteam.jpg';
import naa from './images/newsawards.jpg';
import scooterweb from './images/scooter-web.png';
import medappslider from './images/medapp-slider-logo.png';
import CountUp from 'react-countup';
import MediaQuery from 'react-responsive';
import presence from './images/Map.png';
import bgimg3 from './images/Medapp3.jpg';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

    /**/

    const Styles = styled.div`
  .jumbo {
    background-image: url(${bgimg3});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #efefef;
    height: 780px;
    box-sizing: border-box;
    box-shadow: inset -750px 0 2500px rgba(255,255,255,0.8) ;
    position: relative;
    z-index: -2;
  }
  .jumbo-min{
    background-image: url(${bgimg3});
    background-size: cover;
    color: #efefef;
    height: 250px;
    box-sizing: border-box;
    box-shadow: inset -50px 0 2500px rgba(255,255,255,0.8) ;
    margin-top:85px;
    width:100%;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.1;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

  const styletext = {
    fontFamily: 'Ubuntu, sans-serif',
};

  const Home = () =>{
  return (
    <div>
        <Styles>
        <MediaQuery query="(min-device-width: 1224px)">   
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="py-4" align="right">
                    <div className="mt-5 mr-5 animated fadeInLeft">
                        <Image className="mr-4" src={scooterweb} style={{height: '220px'}} fluid/>      
                    </div>    
                    <div className=" animated fadeInLeft mr-5 delay-1s">
                        <Image className="mr-4" src={medappslider} style={{height:'45px'}} fluid/>
                    </div>
                    <p className="mt-3" style={{fontFamily: 'Ubuntu, sans-serif',fontSize: '22px',color:'black'}}>
                      <span className="animated fadeInLeft delay-2s font-weight-bold">Touching lives,</span>
                      <span className="animated fadeIn delay-3s font-weight-bold"> Changing lives,</span>
                      <span className="animated fadeInRight delay-4s font-weight-bold"> Saving lives.</span>
                    </p>
                </Container>
            </Jumbo>
            </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">   
            <Jumbo fluid className="jumbo-min">
                <div className="overlay"></div>
                <Container className="py-2">
                    <div className="mt-2 mr-2 d-flex justify-content-end animated fadeInLeft">
                        <Image src={scooterweb} style={{height: '100px'}} fluid/>      
                    </div>    
                    <div className="d-flex justify-content-end animated fadeInLeft mr-2 delay-1s">
                        <Image src={medappslider} style={{height:'25px'}} fluid/>
                    </div>
                    <p className="d-flex mt-1 ml-2 justify-content-end" style={{fontFamily: 'Ubuntu, sans-serif',fontSize: '10px',color:'white'}}>
                      <span className=" animated fadeInLeft delay-2s">Touching lives,</span>
                      <span className=" animated fadeIn delay-3s"> Changing lives,</span>
                      <span className="animated fadeInRight delay-4s"> Saving lives.</span>
                    </p>
                </Container>
            </Jumbo>
            </MediaQuery>
            <Container>
              <Row>
              <Col sm={12} className="p-4">
              <MediaQuery query="(max-device-width: 1224px)">    
                <OwlCarousel
                    className="owl-theme my-5"
                    loop
                    nav
                    autoplay
                    autoplayTimeout='2000'
                    autoplayHoverPause
                    dotsEach
                    items='1'
                    style={{ backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}}
                >
                    <div className="item m-3 mt-5">
                      <Link to='/aboutus'>
                        <Image src={bgimg} style={{height:'235px'}} fluid/>
                      </Link>
                        <p align="center" style={styletext}>Who we Are</p>
                    </div>
                    <div className="item m-4 mt-5">
                      <Link to='/services'> 
                        <Image src={services} style={{height:'235px'}} fluid/>
                      </Link>
                        <p align="center" style={styletext}>Our Services</p>  
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/Presence'>
                        <Image src={presence} style={{height:'235px'}} fluid/>
                      </Link>
                        <p align="center" style={styletext}>Our Presence</p>
                    </div>
                    <div className="item m-3 mt-5">
                        <Link to='/Ourteam'>
                          <Image src={team} style={{height:'235px'}} fluid/>
                        </Link>
                        <p align="center" style={styletext}>Our Team</p>
                    </div>
                    <div className="item m-3 mt-5"> 
                      <Link to='/Societalimpact'>
                        <Image src={impact} style={{height:'235px'}} fluid/>
                      </Link>
                        <p align="center" style={styletext}>Societal Impact</p>  
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/NewsandAwards'>
                        <Image src={naa} style={{height:'235px'}} fluid/>
                      </Link>
                        <p align="center" style={styletext}>News and Awards</p>  
                    </div>
                </OwlCarousel>
              </MediaQuery>
              <MediaQuery query="(min-device-width: 1224px)">
              <OwlCarousel
                    className="owl-theme my-5"
                    loop
                    nav
                    autoplay
                    autoplayTimeout='2000'
                    autoplayHoverPause
                    dotsEach
                    items='3'
                    style={{ backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}}
                >
                    <div className="item m-3 mt-5">
                      <Link to='/aboutus'>
                        <Image src={bgimg} style={{height:'235px'}} fluid/>
                      </Link>
                        <p align="center" style={styletext}>Who we Are</p>
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/services'> 
                        <Image src={services} style={{height:'235px'}} fluid/>
                      </Link>
                        <p align="center" style={styletext}>Our Services</p>
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/Presence'>
                        <Image src={presence} style={{height:'235px'}} fluid/>
                      </Link>
                        <p align="center" style={styletext}>Our Presence</p>
                    </div>
                    <div className="item m-3 mt-5">
                        <Link to='/Ourteam'>
                          <Image src={team} style={{height:'235px'}} fluid/>
                        </Link>
                        <p align="center" style={styletext}>Our Team</p>
                    </div>
                    <div className="item m-3 mt-5">   
                      <Link to='/Societalimpact'>
                        <Image src={impact} style={{height:'235px'}} fluid/>
                      </Link>
                        <p align="center" style={styletext}>Societal Impact</p>
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/NewsandAwards'>
                        <Image src={naa} style={{height:'235px'}} fluid/>
                      </Link>
                        <p align="center" style={styletext}>News and Awards</p>   
                    </div>
                </OwlCarousel>
              </MediaQuery>
                </Col>
                </Row>
            </Container>
            <Container className="mt-5 p-2" >
            <div data-aos="fade-up" data-aos-duration="1000">
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                          <div className="jumbotron mx-4 vision parallax">
                            <h1 className="display-4 d-flex justify-content-center text-white">Vision</h1>
                            <hr className="my-4 bg-white"/>
                            <p className="lead font-italic mt-2 text-white">
                              "Medapp.in will become the national model for the delivery of Preventive care and Primary health care at 
                              the urban & rural level by Touching life, Changing life, and saving life with out barrier of geography."</p>
                          </div>       
                    </Col>
                    <Col sm={6} className="mt-3 p-4">
                          <div className="jumbotron mission parallax">
                            <h1 className="display-4 d-flex justify-content-center text-white">Mission</h1>
                            <hr className="my-4 bg-white"/>
                            <p className="lead font-italic text-white">"The mission of the medapp.in is to improve the health of those we serve with a commitment to excellence in 
                            all that we do. Our goal is to offer quality care & services that set community standards, exceed patients 
                            expectations and are provided in a caring, convenient, cost effective in a accessible manner".</p>
                          </div>
                    </Col>    
                </Row>
                </div>
            </Container>
            <MediaQuery query="(max-device-width: 1224px)">
            <div data-aos="fade-up">
            <Container className="p-2">
                <Row>   
                  <MediaQuery query="(orientation: portrait)">
                    <Col sm={2} className="mt-2 mx-3 p-2 text-center" >
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'40px'}}>
                        <CountUp end={384594} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted">Patients Screened</p>         
                    </Col>
                    <Col sm={2} className="mt-2 mr-1 ml-4 p-2 text-center" >    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'40px'}}> 
                        <CountUp end={814} duration={5} />
                      </p>
                      <p className="text-muted">Camps Conducted</p> 
                    </Col> 
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'40px'}}>
                        <CountUp end={48} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted text-center">Cities</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'40px'}}>
                        <CountUp end={19} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted text-center">States</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-0 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'40px'}}>
                        <CountUp end={272844} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted text-center">Lives Impacted</p> 
                    </Col>
                    </MediaQuery>

                    <MediaQuery query="(orientation: landscape)">
                    <Col sm={2} className="mt-2 mx-3 p-2 text-center" >
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'5vw',marginRight:'2vw'}}>
                        <CountUp end={384594} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted">Patients Screened</p>         
                    </Col>
                    <Col sm={2} className="mt-2 mr-1 ml-4 p-2 text-center" >    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4.7vw',marginLeft:'3vw'}}> 
                        <CountUp end={814} duration={5} />
                      </p>
                      <p className="text-muted">Camps Conducted</p> 
                    </Col> 
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'5vw'}}>
                        <CountUp end={48} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted text-center">Cities</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'5vw'}}>
                        <CountUp end={19} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted text-center">States</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-0 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'5vw'}}>
                        <CountUp end={272844} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted text-center">Lives Impacted</p> 
                    </Col>
                    </MediaQuery>       
                </Row>
            </Container>
            </div>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 1224px)">
            <div data-aos="fade-up">
            <Container className="p-2">
                <Row className="d-flex">
                    <Col sm={2} className="mt-2 mr-3 ml-5 p-2 text-center" >
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4vw'}}>
                        <CountUp end={384594} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted">Patients Screened</p>         
                    </Col>
                    <Col sm={2} className="mt-2 mr-1 ml-5 p-2 text-center" >    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4vw'}}> 
                        <CountUp end={814} duration={5} />
                      </p>
                      <p className="text-muted">Camps Conducted</p> 
                    </Col> 
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4vw'}}>
                        <CountUp end={48} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted text-center">Cities</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4vw'}}>
                        <CountUp end={19} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted text-center">States</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-2 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4vw'}}>
                        <CountUp end={272844} suffix="+" duration={5} />
                      </p>
                      <p className="text-muted text-center">Lives Impacted</p> 
                    </Col>       
                </Row>
            </Container>
            </div>
            </MediaQuery>
        </Styles>
    </div>  
  )
}

export default Home;