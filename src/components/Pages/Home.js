import React, { useState } from 'react';
import { Jumbotron as Jumbo, Container,Image,Row,Col} from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import './imagestyles.css';
import styled from 'styled-components';
import bgimg from './images/bg1.jpeg';
import naa from './images/newsandawards.jpeg';
import presence from './images/Ourpresence.jpeg';
import services from './images/Ourservices.png';
import impact from './images/Socialimpact.jpeg';
import team from './images/team.jpeg';
import wwa from './images/Whoweare.jpeg';
import scooterweb from './images/scooter-web.png';
import medappslider from './images/medapp-slider-logo.png';
import CountUp from 'react-countup';
import MediaQuery from 'react-responsive';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Styles = styled.div`
  .jumbo {
    background: url(${bgimg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 700px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;
const styleimg = {
    height: '45px'
  };

const styleimg1 = {
    height: '220px'
  }; 

  const Home = () =>{
  const [state, toggle] = useState(true)
  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 2000 } })
  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <div className="mt-5 d-flex justify-content-end animated fadeInLeft">
                        <Image src={scooterweb} style={styleimg1} fluid/>      
                    </div>    
                    <div className="d-flex justify-content-end animated fadeInLeft delay-1s">
                        <Image src={medappslider} style={styleimg} fluid/>
                    </div>
                    <p className="d-flex mt-3 justify-content-end" style={{fontFamily: 'Ubuntu, sans-serif',fontSize: '17px'}}>
                      <span className=" animated fadeInLeft delay-2s">Touching lives,</span>
                      <span className=" animated fadeIn delay-3s"> Changing lives,</span>
                      <span className="animated fadeInRight delay-4s"> Saving lives.</span>
                    </p>
                </Container>
            </Jumbo>
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
                >
                    <div className="item m-3 mt-5">
                        <Link to='/Ourteam'>
                          <Image src={team} fluid/>
                        </Link>
                    </div>
                    <div className="item m-4 mt-5">
                      <Link to='/'>
                        <Image src={naa} fluid/>
                      </Link>
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/aboutus'>
                        <Image src={wwa} fluid/>
                      </Link>
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/Presence'>
                        <Image src={presence}  fluid/>
                      </Link>
                    </div>
                    <div className="item m-3 mt-5">   
                      <Link to='/services'> 
                        <Image src={services} fluid/>
                      </Link>  
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/'>
                        <Image src={impact} fluid/>
                      </Link> 
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
                >
                    <div className="item m-3 mt-5">
                        <Link to='/Ourteam'>
                          <Image src={team} fluid/>
                        </Link>
                    </div>
                    <div className="item m-4 mt-5">
                      <Link to='/'>
                        <Image src={naa} fluid/>
                      </Link>
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/aboutus'>
                        <Image src={wwa} fluid/>
                      </Link>
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/Presence'>
                        <Image src={presence}  fluid/>
                      </Link>
                    </div>
                    <div className="item m-3 mt-5">   
                      <Link to='/services'> 
                        <Image src={services} fluid/>
                      </Link>  
                    </div>
                    <div className="item m-3 mt-5">
                      <Link to='/'>
                        <Image src={impact} style={{height:'20vw'}} fluid/>
                      </Link> 
                    </div>
                </OwlCarousel>
              
              </MediaQuery>
                </Col>
                </Row>
            </Container>

            <Container className="mt-5 p-2" >
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                      <div onClick={() => toggle(!state)}>
                        <animated.div
                          style={{
                            opacity: x.interpolate({ output: [1, 1] }),
                            transform: x
                              .interpolate({
                                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                              })
                              .interpolate(x => `scale(${x})`)
                          }}>
                          <div className="jumbotron mx-4 vision parallax">
                            <h1 className="display-4 d-flex justify-content-center text-white">Vision</h1>
                            <hr className="my-4 bg-white"/>
                            <p className="lead font-italic mt-2 text-white">
                              "Medapp.in will become the national model for the delivery of Preventive care and Primary health care at 
                              the urban & rural level by Touching life, Changing life, and saving life with out barrier of geography."</p>
                          </div>
                        </animated.div>
                      </div>        
                    </Col>
                    <Col sm={6} className="mt-3 p-4">
                    <div onClick={() => toggle(!state)}>
                        <animated.div
                          style={{
                            opacity: x.interpolate({ output: [1, 1] }),
                            transform: x
                              .interpolate({
                                range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                                output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]
                              })
                              .interpolate(x => `scale(${x})`)
                          }}>
                          <div className="jumbotron mission parallax">
                            <h1 className="display-4 d-flex justify-content-center text-white">Mission</h1>
                            <hr className="my-4 bg-white"/>
                            <p className="lead font-italic text-white">"The mission of the medapp.in is to improve the health of those we serve with a commitment to excellence in 
                            all that we do. Our goal is to offer quality care & services that set community standards, exceed patients 
                            expectations and are provided in a caring, convenient, cost effective in a accessible manner".</p>
                          </div>
                      </animated.div>
                      </div>
                    </Col>    
                </Row>
            </Container>
            <MediaQuery query="(max-device-width: 1224px)">
            <Container className="p-2">
                <Row>   
                  <MediaQuery query="(orientation: portrait)">
                    <Col sm={2} className="mt-2 mx-3 p-2 text-center" >
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'40px'}}>
                        <CountUp end={125200} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted">Patients Screened</p>         
                    </Col>
                    <Col sm={2} className="mt-2 mr-1 ml-4 p-2 text-center" >    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'40px'}}> 
                        <CountUp end={414} duration={3} />
                      </p>
                      <p className="text-muted">Camps Conducted</p> 
                    </Col> 
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'40px'}}>
                        <CountUp end={48} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">Cities</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'40px'}}>
                        <CountUp end={19} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">States</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-0 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'40px'}}>
                        <CountUp end={72000} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">Lives Impacted</p> 
                    </Col>
                    </MediaQuery>

                    <MediaQuery query="(orientation: landscape)">
                    <Col sm={2} className="mt-2 mx-3 p-2 text-center" >
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'5vw',marginRight:'2vw'}}>
                        <CountUp end={125200} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted">Patients Screened</p>         
                    </Col>
                    <Col sm={2} className="mt-2 mr-1 ml-4 p-2 text-center" >    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4.7vw',marginLeft:'3vw'}}> 
                        <CountUp end={414} duration={3} />
                      </p>
                      <p className="text-muted">Camps Conducted</p> 
                    </Col> 
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'5vw'}}>
                        <CountUp end={48} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">Cities</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'5vw'}}>
                        <CountUp end={19} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">States</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-0 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'5vw'}}>
                        <CountUp end={72000} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">Lives Impacted</p> 
                    </Col>
                    </MediaQuery>       
                </Row>
            </Container>
            </MediaQuery>
            <MediaQuery query="(min-device-width: 1224px)">
            <Container className="p-2">
                <Row>
                    <Col sm={2} className="mt-2 mr-3 ml-5 p-2 text-center" >
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4vw'}}>
                        <CountUp end={125200} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted">Patients Screened</p>         
                    </Col>
                    <Col sm={2} className="mt-2 mr-1 ml-5 p-2 text-center" >    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4vw'}}> 
                        <CountUp end={414} duration={3} />
                      </p>
                      <p className="text-muted">Camps Conducted</p> 
                    </Col> 
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4vw'}}>
                        <CountUp end={48} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">Cities</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-1 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4vw'}}>
                        <CountUp end={19} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">States</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-2 p-2 text-center">    
                      <p className="text-danger font-weight-bold" style={{fontFamily: 'Ubuntu, sans-serif',fontSize:'4vw'}}>
                        <CountUp end={72000} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">Lives Impacted</p> 
                    </Col>       
                </Row>
            </Container>
            </MediaQuery>
        </Styles>
    </div>  
  )
}

export default Home;