import React from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image } from 'react-bootstrap';
import styled from 'styled-components';
import bgimg from './images/bg-4.jpg';
import './imagestyles.css';
import MediaQuery from 'react-responsive';

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

const caption = {
  fontFamily: 'Ubuntu, sans-serif'
};

const Aboutus = () => {
  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="p-4" style={{marginTop:'15%'}}>
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                      <h1 className="display-4 font-weight-bold">ABOUT US </h1>
                    </Col>
                    <Col sm={6} className="mt-3 p-4">    
                        <p className="display-5 mt-2" style={{fontSize:'25px'}}>
                            We’re all united around a common mission — touching life, changing life, and saving life.
                        </p>
                    </Col>    
                </Row>
                </Container>
            </Jumbo>
            <Container className="p-4 animated bounceIn">
                <Row className="p-3">
                    <Col sm={6} className="mt-3 p-4 jumbotron" style={{borderBottomLeftRadius:'50px'}}>
                      <hr/>
                      <p style={caption}>
                      Across our network of healthcare services, our team provide compassionate, quality care to millions of patients through a wide range of services: from primary care to chronic care management, disease management, preventive care to curative care and advanced one point solutions for all diagnostic services. 
                      </p>
                    <div>
                      <Image src="https://img.icons8.com/ios/50/000000/quote-left-filled.png"/>
                        <h2 className="ml-5 font-weight-normal lead d-flex justify-content-center" style={{fontSize:'25px',color:'black'}}>
                          <u>We’re also collaborating with others to enhance healthcare solutions across the care continuum.</u>
                        </h2>
                    </div>
                      <p className="mt-3"  style={caption}>
                      Healthcare is changing. medapp.in is Changing it for the Better.
                      </p>
                      <p className="mt-2"  style={caption}>
                      At medapp.in, we’ve had a longstanding commitment to serving our clients, patients, employees, healthcare teams and partners.
                      </p>
                      <p className="mt-2"  style={caption}>
                      Today, we’re a leading healthcare services company working across the system to improve primary healthcare service delivery, patient support programme and healthcare outcomes.
                      </p>
                    </Col>
                  <MediaQuery query="(min-device-width: 1224px)">      
                    <Col sm={6} className="d-flex flex-column justify-content-center mt-3 p-4 jumbotron" style={{backgroundColor:'skyblue',borderTopRightRadius:'50px'}}>
                        <div className="mt-2" align="center">
                          <h3>We’re all united around a common mission</h3>
                          <u style={{color:"white"}}><span className="mt-5"><h2 className="animated fadeIn display-4 font-weight-bold" style={{color:'Purple'}}>Touching life, changing life, and saving life.</h2></span></u>
                        </div>    
                    </Col> 
                  </MediaQuery>     
                  <MediaQuery query="(max-device-width: 1224px)">      
                    <Col sm={6} className="d-flex flex-column justify-content-center mt-3 p-4 jumbotron" style={{backgroundColor:'skyblue',borderTopRightRadius:'50px'}}>
                        <div className="mt-2" align="center">
                          <h4>We’re all united around a common mission</h4>
                          <u style={{color:"white"}}><span className="mt-5"><h2 className="animated fadeIn" style={{color:'Purple'}}>Touching life, changing life, and saving life.</h2></span></u>
                        </div>    
                    </Col> 
                  </MediaQuery>
                </Row>
                </Container>
                <Container className="p-2 animated bounceIn delay-1s">
                <Row className="p-3">
                  <MediaQuery query="(min-device-width: 1224px)">    
                      <Col sm={6} className="d-flex flex-column justify-content-center mt-3 p-4 jumbotron" style={{backgroundColor:'pink',borderTopLeftRadius:'50px'}}>
                        <div className="mt-2" align="center">
                          <h1 className="animated zoomIn display-4">Our Commitment to Quality</h1>
                        </div>    
                      </Col> 
                  </MediaQuery>
                    <MediaQuery query="(max-device-width: 1224px)">    
                        <Col sm={6} className="d-flex flex-column justify-content-center mt-3 p-4 jumbotron" style={{backgroundColor:'pink',borderTopLeftRadius:'50px'}}>
                         <div className="mt-2 p-3" align="center">
                            <h1 className="animated zoomIn display-5">Our Commitment to Quality</h1>
                         </div>
                        </Col>        
                    </MediaQuery>
                   <Col sm={6} className="mt-3 p-5 jumbotron" style={{borderBottomRightRadius:'50px'}}>    
                      <hr/>
                    <div>
                      <Image src="https://img.icons8.com/ios/50/000000/quote-left-filled.png"/>
                        <h2 className="ml-5 mt-2 font-weight-normal lead d-flex justify-content-center" style={{fontSize:'25px',color:'black'}}>
                          <u>Healthcare is changing. And at medapp.in, we have a plan to lead that charge.</u>
                        </h2>
                    </div>
                      <p className="mt-4" style={caption}>
                        How? By making safety services, innovative technology and industry-leading clinical outcomes the cornerstones of our mission. By seeking to provide high-quality, high-value care backed by compassionate service. By giving our caregivers the tools, technologies and resources they need to deliver the best care possible. By always doing what’s right for our clients and communities.
                      </p>
                      <p className="mt-2" style={caption}>
                        Our Commitment to Quality honors the trust that our clients and communities place in our services, like disease management, patient support programme, health promotion and disease prevention practices and other health care facilities. It's at the core of everything we do and every decision our client make.
                      </p>                     
                    </Col>    
                </Row>
                </Container>                
        </Styles>
    </div>
  )
}

export default Aboutus;