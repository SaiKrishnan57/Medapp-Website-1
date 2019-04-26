import React from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image } from 'react-bootstrap';
import styled from 'styled-components';
import bgimg from './images/bg2.jpg';
import pic1 from './images/medapp-aboutus.jpg';
import pic2 from './images/medapp-whoweare.jpg';
import dummy from './images/dummy-men.jpg';
import nabeel from './images/nabeel.jpg';
import niranjan from './images/niranjan-swamy-N.jpg';
import vinod from './images/vinod-singh.jpg';

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
 
const Aboutus = () => {
  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="p-4" style={{marginTop:'15%'}}>
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                      <h1 className="display-4 font-weight-bold">ABOUT US MEDAPP</h1>
                    </Col>
                    <Col sm={6} className="mt-3 p-4">    
                        <p className="display-5 mt-2" style={{fontSize:'25px'}}>
                            We’re all united around a common mission — touching life, changing life, and saving life.
                        </p>
                    </Col>    
                </Row>
                </Container>
            </Jumbo>
            <Container className="p-4">
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                      <h3 className="display-5 font-weight-normal">
                         We’re all united around a common mission — touching life, changing life, and saving life.
                      </h3>
                      <p className="mt-4">
                      Across our network of healthcare services, our team provide compassionate, quality care to millions of patients through a wide range of services: from primary care to chronic care management, disease management, preventive care to curative care and advanced one point solutions for all diagnostic services. 
                      </p>
                      <p className="mt-4">
                      We’re also collaborating with others to enhance healthcare solutions across the care continuum.
                      </p>
                      <p className="mt-4">
                      Healthcare is changing. medapp.in is Changing it for the Better.
                      </p>
                      <p className="mt-4">
                      At medapp.in, we’ve had a longstanding commitment to serving our clients, patients, employees, healthcare teams and partners.
                      </p>
                      <p className="mt-4">
                      Today, we’re a leading healthcare services company working across the system to improve primary healthcare service delivery, patient support programme and healthcare outcomes.
                      </p>

                    </Col>
                    <Col sm={6} className="mt-3 p-4">    
                       <Image src={pic1} className="animated bounceIn" fluid/>
                    </Col>    
                </Row>
                </Container>
                <Container className="p-4">
                 <h3 className="display-5 font-weight-normal text-center">Our Team</h3>
                <Row>
                    <Col sm={3} className="mt-3 p-4">
                        <Image src={niranjan} thumbnail/>
                        <p className="text-center">Niranjan Swamy N</p>
                    </Col>
                    <Col sm={3} className="mt-3 p-4">    
                        <Image src={dummy} thumbnail/>
                        <p className="text-center">Dr Shiraz</p>                
                    </Col>    
                    <Col sm={3} className="mt-3 p-4">
                        <Image src={nabeel} thumbnail/>
                        <p className="text-center">Nabeel</p>
                    </Col>
                    <Col sm={3} className="mt-3 p-4">
                        <Image src={vinod} thumbnail/>
                        <p className="text-center">Dr. Vinod Singh</p>
                        <p className="text-muted text-center" style={{fontSize:'12px'}}>Chief Operating Officer</p>
                    </Col>
                </Row>
                </Container>
                <Container className="p-4">
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                        <Image src={pic2} className="animated bounceIn" fluid/>
                    </Col>
                    <Col sm={6} className="mt-3 p-4">    
                      <h3 className="display-5 font-weight-normal">
                        Our Commitment to Quality
                      </h3>
                      <p className="mt-4">
                        Healthcare is changing. And at medapp.in, we have a plan to lead that charge.
                      </p>
                      <p className="mt-4">
                        How? By making safety services, innovative technology and industry-leading clinical outcomes the cornerstones of our mission. By seeking to provide high-quality, high-value care backed by compassionate service. By giving our caregivers the tools, technologies and resources they need to deliver the best care possible. By always doing what’s right for our clients and communities.
                      </p>
                      <p className="mt-4">
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