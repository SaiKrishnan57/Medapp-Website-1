import React from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image } from 'react-bootstrap';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import bgimg from './images/services.jpg';

const Styles = styled.div`
  .jumbo {
    background-image: url(${bgimg});
    background-size: cover;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: #efefef;
    height: 500px;
    position: relative;
    margin-top:100px;
    z-index: -2;
  }
  .jumbo-min{
    background-image: url(${bgimg});
    background-size: cover;
    color: #efefef;
    height: 300px;
    position: relative;
    margin-top:100px;
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
  .para{
    color:#af1512;
    font-family: 'Quicksand', sans-serif;
    line-height:2em;
    font-weight:bold;
  }
`;

const caption = {
    fontFamily: "'Quicksand', sans-serif",
    fontWeight:'bold'
};

const Services = () => {
  return (
    <div>
        <Styles> 
          <MediaQuery query="(min-device-width: 1224px)">   
              <Jumbo fluid className="jumbo">
                    <div className="overlay"></div>
              </Jumbo>
           </MediaQuery>   
          <MediaQuery query="(max-device-width: 1224px)">   
              <Jumbo fluid className="jumbo-min">
                    <div className="overlay"></div>
              </Jumbo>
           </MediaQuery>
        <div className="servicesbgimg">
        <div className="container">
            <MediaQuery query="(min-device-width: 1224px)">
              <div>
                <Image src="https://img.icons8.com/ios/50/000000/quote-left-filled.png" className="my-2"/>
                <h3 className="ml-5 lead" style={{fontSize:'45px',color:'black'}}> 
                    Initiating Compassionate Care & service to Communities (touching lives, changing lives, saving lives )
                </h3>

              </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
              <div>
                <Image src="https://img.icons8.com/ios/50/000000/quote-left-filled.png"/>
                <h3 className="ml-5 mt-2 lead display-5" style={{color:'black'}}>
                    Initiating Compassionate Care & service to Communities (touching lives, changing lives, saving lives )
                </h3>
              </div>
           </MediaQuery>
        </div>
        <Row>
          <Col>
              <p className="para container animated fadeIn font-weight-bold p-5">
                    Chronic disease accounts for at least 6 to 7 of the 10 leading causes of deaths and 85% of all healthcare spendings.
                    Healthcare systems are poorly-equipped to handle this epidemic as most chronic diseases require continuous intervention
                    to make the behavioral and lifestyle changes needed to effectively manage them. medapp.in enables broad scaling of frequent screening,
                    high-touch, personalized,behavioral interventions & counselling at low cost, and as such has become an essential part
                    of preventing and managing chronic conditions.
                </p>
          </Col>
        </Row>
        </div>
            <Container className="animated fadeIn mt-5 p-2">
                <div >
                <Row>
                    <Col sm={3} className="mt-1 ml-5 p-4 icon text-center" style={{color:'#FFD700'}}>
                        <div> 
                            <i className="fas fa-stethoscope icon1" ></i> 
                            <p style={caption}>Diabetic Screening Camps</p>
                        </div>
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 icon text-center" style={{color:'#5F9EA0'}}>
                        <div>    
                            <i className="fas fa-ambulance icon1" ></i>
                            <p style={caption}>Primary Health care services at door step</p>
                            </div>
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 icon text-center" style={{color:'#8B4513'}}>
                        <div>
                            <i className="fas fa-medkit icon1" ></i>
                            <p style={caption}>Diabetic Care & Counselling</p>
                        </div>
                    </Col>     
                </Row>
                </div>
                <div >  
                <Row>
                    <Col sm={3} className="mt-1 ml-5 p-4 icon text-center" style={{color:'#0000CD'}}>
                        <div>
                          <i className="fas fa-file-medical-alt icon1" ></i> 
                          <p style={caption}>Chronic Disease Management</p>
                        </div>  
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 icon text-center" style={{color:'#00BFFF'}}>
                        <div> 
                            <i className="fas fa-user-md icon1" ></i>
                            <p style={caption}>Patient Support Programme</p>
                        </div>
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 icon text-center" style={{color:'#FF4500'}}>
                        <div> 
                            <i className="fas fa-user-nurse icon1" ></i>
                            <p style={caption}>Training for Nurses & Paramedics</p>
                        </div>
                    </Col>     
                </Row>
                </div>
                <div >
                <Row>
                    <Col sm={3} className="mt-1 ml-5 p-4 icon text-center" style={{color:'#32CD32'}}>
                        <div>
                            <i className="fas fa-procedures icon1" ></i> 
                            <p style={caption}>Screening for Asthma & Respiratory diseases</p>
                        </div>                          
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 icon text-center" style={{color:'#B22222'}}>
                        <div>
                            <i className="fas fa-clinic-medical icon1" ></i>
                            <p style={caption}>One shop solution for all diagnostic services</p>
                        </div>      
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 icon text-center" style={{color:'#FF1493'}}>    
                        <div>
                         <i className="fas fa-syringe icon1"></i>
                         <p style={caption}>Onsite Injection & Infusions</p>
                        </div>   
                    </Col>     
                </Row>
                </div>
            </Container>
        </Styles>
    </div>
  )
}

export default Services;