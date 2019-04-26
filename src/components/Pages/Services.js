import React from 'react'
import { Jumbotron as Jumbo, Container,Row,Col } from 'react-bootstrap';
import styled from 'styled-components';
import bgimg from './images/bg1.jpeg';

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

const styletext = {
    fontSize: '15px',
    lineHeight: '1.5em',
    color: '#E8E8E8'
  };

const stylealign = {
    marginTop: '17%'
    };

const icon = {
    fontSize: '40px'
    };
    
const Services = (props) => {
    console.log(props);
  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                <Row>
                    <Col sm={8} className="py-4 px-3">
                        <div style={stylealign}>
                            <h1 className="display-3 mt-2 font-weight-bold" >OUR SERVICES</h1>
                            <p style={styletext} className="mt-3">Initiating Compassionate Care & service to Communities (touching life, changing life, saving life )</p>
                            <p style={styletext}>Chronic disease accounts for at least 6 to 7 of the 10 leading causes of death and 85% of all healthcare spending.
                            Healthcare systems are poorly-equipped to handle this epidemic as most chronic diseases require continuous intervention
                            to make the behavioral and lifestyle changes needed to effectively manage them. medapp.in enables broad scaling of frequent screening,
                            high-touch, personalized,behavioral interventions & counselling at low cost, and as such has become an essential part
                            of preventing and managing chronic conditions.</p>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>
            <Container className="mt-5 p-2" >
                <div style={{marginLeft:'14%'}}>
                <Row>
                    <Col sm={3} className="mt-1 p-4 text-center" style={{color:'#FFD700'}}>
                        <i className="fas fa-medkit" style={icon}></i> 
                        <p>Diabetic Screening Camps</p>  
                    </Col>
                    <Col sm={3} className="mt-1 p-4 text-center" style={{color:'#5F9EA0'}}>    
                        <i className="fas fa-medkit" style={icon}></i>
                        <p>Primary Health care services at door step</p>
                    </Col>
                    <Col sm={3} className="mt-1 p-4 text-center" style={{color:'#8B4513'}}>    
                        <i className="fas fa-medkit" style={icon}></i>
                        <p>Diabetic Care & Counselling</p>
                    </Col>     
                </Row>
                </div>
                <div style={{marginLeft:'14%'}}>  
                <Row>
                    <Col sm={3} className="mt-1 p-4 text-center" style={{color:'#0000CD'}}>
                        <i className="fas fa-medkit" style={icon}></i> 
                        <p>Chronic Disease Management</p>  
                    </Col>
                    <Col sm={3} className="mt-1 p-4 text-center" style={{color:'#00BFFF'}}>    
                        <i className="fas fa-medkit" style={icon}></i>
                        <p>Patient Support Programme</p>
                    </Col>
                    <Col sm={3} className="mt-1 p-4 text-center" style={{color:'#FF4500'}}>    
                        <i className="fas fa-medkit" style={icon}></i>
                        <p>Training for Nurses & Paramedics</p>
                    </Col>     
                </Row>
                </div>
                <div style={{marginLeft:'14%'}}>
                <Row>
                    <Col sm={3} className="mt-1 p-4 text-center" style={{color:'#32CD32'}}>
                        <i className="fas fa-medkit" style={icon}></i> 
                        <p>Screening for Asthma & Respiratory diseases</p>  
                    </Col>
                    <Col sm={3} className="mt-1 p-4 text-center" style={{color:'#B22222'}}>    
                        <i className="fas fa-medkit" style={icon}></i>
                        <p>One shop solution for all diagnostic services</p>
                    </Col>
                    <Col sm={3} className="mt-1 p-4 text-center" style={{color:'#FF1493'}}>    
                        <i className="fas fa-medkit" style={icon}></i>
                        <p>Onsite Injection & Infusions</p>
                    </Col>     
                </Row>
                </div>
            </Container>
        </Styles>
    </div>
  )
}

export default Services;