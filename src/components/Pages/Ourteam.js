import React from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image } from 'react-bootstrap';
import styled from 'styled-components';
import bgimg from './images/bg2.jpg';
import dummym from './images/dummy-men.jpg';
import nabeel from './images/nabeel.jpg';
import niranjan from './images/niranjan-swamy-N.jpg';
import vinod from './images/vinod-singh.jpg';
import krishna from './images/krishna.jpg';
import dummywo from './images/dummy-women.jpg';
import './imagestyles.css';

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
    fontFamily: 'Ubuntu, sans-serif',
    fontSize:'12px'
};
  
 
const Ourteam = () => {
  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="p-4" style={{marginTop:'15%'}}>
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                      <h1 className="display-4 font-weight-bold">TEAM MEMBERS</h1>
                    </Col>
                    <Col sm={6} className="mt-3 p-4">    
                        <p className="display-5 mt-2" style={{fontSize:'25px'}}>
                        We are professionals with exceptional background and years of expertise in business.
                        </p>
                    </Col>    
                </Row>
                </Container>
            </Jumbo>
                <Container className="p-4">
                 <h1 className="display-5 font-weight-normal text-center">Our Team</h1>
                <Row>
                    <Col sm={4} className="mt-3 p-4" >
                    <div class="img-hover-zoom">
                        <Image src={niranjan} thumbnail className="profile" style={{borderRadius:'20px'}}/>
                    </div>    
                        <p className="text-center">Niranjan Swamy N</p>
                    </Col>
                    <Col sm={4} className="mt-3 p-4">
                    <div class="img-hover-zoom">    
                        <Image src={dummym} thumbnail className="profile" style={{borderRadius:'20px'}}/>
                    </div>
                        <p className="text-center">Dr Shiraz</p>                
                    </Col>    
                    <Col sm={4} className="mt-3 p-4">
                    <div class="img-hover-zoom">
                        <Image src={nabeel} thumbnail className="profile" style={{borderRadius:'20px'}}/>
                    </div>
                        <p className="text-center">Nabeel</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="mt-3 p-4">
                    <div class="img-hover-zoom">
                        <Image src={vinod} thumbnail className="profile" style={{borderRadius:'20px'}}/>
                        </div>    
                        <p className="text-center">Dr. Vinod Singh</p>
                        <p className="text-muted text-center" style={caption}>Chief Operating Officer</p>
                    </Col>
                    <Col sm={4} className="mt-3 p-4">
                    <div class="img-hover-zoom">    
                        <Image src={dummywo} thumbnail className="profile" style={{borderRadius:'20px'}}/>
                    </div>    
                        <p className="text-center">Sinu George</p>
                        <p className="text-muted text-center" style={caption}>Director</p>                
                    </Col>    
                    <Col sm={4} className="mt-3 p-4">
                    <div class="img-hover-zoom">
                        <Image src={krishna} thumbnail className="profile" style={{borderRadius:'20px'}}/>
                    </div>    
                        <p className="text-center">Krishna Raghavan</p>
                        <p className="text-muted text-center" style={caption}>Director</p>
                    </Col>
                </Row>
                </Container>             
        </Styles>
    </div>
  )
}

export default Ourteam;