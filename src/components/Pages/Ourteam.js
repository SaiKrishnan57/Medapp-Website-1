import React,{Component} from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image } from 'react-bootstrap';
import { Link }from 'react-router-dom';
import styled from 'styled-components';
import team from './images/team.jpg';
import Nisar from './images/Nisar.jpg';
import nabeel from './images/nabeel2.jpg';
import niranjan from './images/niranjan-swamy-N.jpg';
import vinod from './images/vinod-singh.jpg';
import krishna from './images/krishna.jpg';
import sinu from './images/sinu.jpg';
import './imagestyles.css';
import MediaQuery from 'react-responsive';

const Styles = styled.div`
  .jumbo {
    background-image: url(${team});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #efefef;
    margin-top:20px;
    height: 700px;
    position: relative;
    z-index: -2;
  }
  .jumbo-min{
    background: url(${team});
    background-size: cover;
    color: #efefef;
    height: 300px;
    margin-top:95px;
    position: relative;
    z-index: -2;
  }
  .overlay {
    background-color: #000;
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
  p{
    font-family:'Quicksand', sans-serif;
    font-weight:bold;
    color:black;
  }
`;

const caption = {
    fontFamily: 'Ubuntu, sans-serif',
    fontSize:'13px'
};
  
 
class Ourteam extends Component {

    render(){
  return (
    <div>
        <Styles>
        <MediaQuery query="(min-device-width: 1224px)">    
           <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="p-4" style={{marginTop:'15%'}}>
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                      <h1 className="display-4 font-weight-bold">TEAM MEMBERS</h1>
                    </Col>
                    <Col sm={6} className="mt-3 p-4">    
                        <p className="display-5 mt-2 text-white" style={{fontSize:'25px'}}>
                        We are professionals with exceptional background and years of expertise in business.
                        </p>
                    </Col>    
                </Row>
                </Container>
            </Jumbo>
       </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">    
           <Jumbo fluid className="jumbo-min">
                <div className="overlay"></div>
                <Container className="p-4">
                <Row>
                    <Col sm={6} className="p-3">
                      <h1 className="display-5 font-weight-normal">TEAM MEMBERS</h1>
                    </Col>
                    <Col sm={6} className="p-1">    
                        <p style={{fontSize:'18px',color:'white'}}>
                        We are professionals with exceptional background and years of expertise in business.
                        </p>
                    </Col>    
                </Row>
                </Container>
            </Jumbo>
       </MediaQuery>
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
                        <p className="text-center mt-2">Dr.Shiraz Nisar</p>
                        <p className="text-muted text-center" style={caption}>  Chief Medical Officer</p>
                    </Col>    
                    <Col sm={4} className="mt-3 p-4">
                    <div className="img-hover-zoom">
                    <Link to={`/Ourteam/Members/${5}`}>
                        <Image src={nabeel} fluid className="profile" style={{borderRadius:'20px',height:'400px'}}/></Link>
                    </div>
                        <p className="text-center mt-2">Nabeel Ahmed</p>
                        <p className="text-muted text-center" style={caption}>Chief Marketing Officer</p>
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
                    <Link to={`/Ourteam/Members/${2}`}><Image src={sinu} fluid className="profile" style={{borderRadius:'20px',height:'400px'}}/></Link>
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