import React,{Component} from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image } from 'react-bootstrap';
import { Link }from 'react-router-dom';
import styled from 'styled-components';
import bgimg from './images/bg2.jpg';
import Nisar from './images/Nisar.jpg';
import nabeel from './images/nabeel2.jpg';
import niranjan from './images/niranjan-swamy-N.jpg';
import vinod from './images/vinod-singh.jpg';
import krishna from './images/krishna.jpg';
import sinu from './images/sinu.jpg';
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
  
 
class Ourteam extends Component {

    render(){
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
                    <div className="img-hover-zoom">
                    <Link to={`/Ourteam/Members/${0}`}><Image src={niranjan} fluid className="profile" style={{borderRadius:'20px'}}/></Link>
                    </div>    
                        <p className="text-center mt-2">Niranjan Swamy N</p>
                        <p className="text-muted text-center" style={caption}>Founder and CEO</p> 
                    </Col>
                    <Col sm={4} className="mt-3 p-4">
                    <div className="img-hover-zoom">    
                    <Link to={`/Ourteam/Members/${4}`}><Image src={Nisar} fluid className="profile" style={{borderRadius:'20px'}}/></Link>
                    </div>
                        <p className="text-center mt-2">Dr Shiraz</p>
                        <p className="text-muted text-center" style={caption}>  Chief Medical Officer</p>
                    </Col>    
                    <Col sm={4} className="mt-3 p-4">
                    <div className="img-hover-zoom">
                        <Image src={nabeel} fluid className="profile" style={{borderRadius:'20px'}}/>
                    </div>
                        <p className="text-center mt-2">Nabeel</p>
                    </Col>
                </Row>
                <Row>
                    <Col sm={4} className="mt-3 p-4">
                    <div className="img-hover-zoom">
                        <Link to={`/Ourteam/Members/${1}`}><Image src={vinod} fluid className="profile" style={{borderRadius:'20px'}}/></Link>
                        </div>    
                        <p className="text-center mt-2">Dr. Vinod Singh</p>
                        <p className="text-muted text-center" style={caption}>Chief Operating Officer</p>
                    </Col>
                    <Col sm={4} className="mt-3 p-4">
                    <div className="img-hover-zoom">    
                    <Link to={`/Ourteam/Members/${2}`}><Image src={sinu} fluid className="profile" style={{borderRadius:'20px',height:'100%'}}/></Link>
                    </div>    
                        <p className="text-center mt-2">Sinu George</p>
                        <p className="text-muted text-center" style={caption}>Nurse Trainer and Director</p>                
                    </Col>    
                    <Col sm={4} className="mt-3 p-4">
                    <div className="img-hover-zoom">
                    <Link to={`/Ourteam/Members/${3}`}><Image src={krishna} fluid className="profile" style={{borderRadius:'20px'}}/></Link>
                    </div>    
                        <p className="text-center mt-2">Krishna Raghavan</p>
                        <p className="text-muted text-center" style={caption}>Director</p>
                    </Col>
                </Row>
                </Container>             
        </Styles>
    </div>
  )
}
}

export default Ourteam;