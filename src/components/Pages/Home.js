import React from 'react';
import { Jumbotron as Jumbo, Container,Image,Row,Col } from 'react-bootstrap';
import styled from 'styled-components';
import bgimg from './images/bg1.jpeg';
import scooterweb from './images/scooter-web.png';
import medappslider from './images/medapp-slider-logo.png';
import CountUp from 'react-countup';

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
    height: '50px'
  };

const styleimg1 = {
    height: '250px'
  }; 

const Home = () =>{
  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                    <div className="mt-5 d-flex justify-content-end animated fadeInLeft">
                        <Image src={scooterweb} style={styleimg1}/>      
                    </div>    
                    <div className="d-flex justify-content-end animated fadeInLeft">
                        <Image src={medappslider} style={styleimg}/>
                    </div>
                    <p className="d-flex mt-3 justify-content-end animated fadeInLeft">Touching lives,Changing lives, Saving lives.</p>
                </Container>
            </Jumbo>
            <Container>
                <div className="mt-5 d-flex justify-content-center">
                        <Image src={scooterweb} style={styleimg1}/>      
                </div>    
                <div className="d-flex justify-content-center">
                        <Image src={medappslider} style={styleimg}/>
                </div>
            </Container>

            <Container className="mt-5 p-2" >
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                      <h2>Mission</h2>
                      <p className="font-italic mt-2">
                        "The mission of the medapp.in is to improve the health of those we serve with a commitment to excellence in 
                        all that we do. Our goal is to offer quality care & services that set community standards, exceed patients 
                        expectations and are provided in a caring, convenient, cost effective in a accessible manner"
                      </p>         
                    </Col>
                    <Col sm={6} className="mt-3 p-4">    
                      <h2>Vision</h2>
                      <p className="font-italic mt-2">
                          "medapp.in will become the national model for the delivery of Preventive care and Primary health care at 
                          the urban & rural level by Touching life, Changing life, and saving life with out barrier of geography."
                      </p>
                    </Col>    
                </Row>
            </Container>
            <Container className="mt-5 p-2">
                <Row>
                    <Col sm={2} className="mt-2 mx-3 p-0 text-center">
                      <p className="display-4 text-danger">
                        <CountUp end={50000} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted ">Patients Screened</p>         
                    </Col>
                    <Col sm={2} className="mt-2 mx-3 p-0 text-center">    
                      <p className="display-4 text-danger"> 
                        <CountUp end={200} duration={3} />
                      </p>
                      <p className="text-muted">Camps Conducted</p> 
                    </Col> 
                    <Col sm={2} className="mt-2 mx-3 p-0 text-center">    
                      <p className="display-4 text-danger">
                        <CountUp end={30} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">Cities</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-3 p-0 text-center">    
                      <p className="display-4 text-danger">
                        <CountUp end={15} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">States</p> 
                    </Col>    
                    <Col sm={2} className="mt-2 mx-3 p-0 text-center">    
                      <p className="display-4 text-danger">
                        <CountUp end={35000} suffix="+" duration={3} />
                      </p>
                      <p className="text-muted text-center">Lives Impacted</p> 
                    </Col>       
                </Row>
            </Container>
        </Styles>
    </div>  
  )
}

export default Home;