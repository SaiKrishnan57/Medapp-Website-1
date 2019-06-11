import React, {Component} from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Form,Button} from 'react-bootstrap';
import styled from 'styled-components';
import Typist from 'react-typist';
import bgimg from './images/bg3.jpg';
import chronic from './images/chronic.jpg';
import advancement from './images/advancement.jpg';
import touching from './images/touching.jpg';
import life from './images/life.jpg';
import {Link} from 'react-router-dom';
import './imagestyles.css';

const Styles = styled.div`
  .jumbo {
    background: url(${bgimg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    z-index: -2;
  } 
  .jumbo1 {
    background-size: cover;
    background-image: url(${touching});
    height: 300px;
  }
  .jumbo2 {
    background-size: cover;
    background-image: url(${life});
    height: 300px;
  }
  .jumbo3 {
    background-size: cover;
    background-image: url(${chronic});
    height: 300px;
  }
  .jumbo4 {
    background-size: cover;
    background-image: url(${advancement});
    height: 300px;
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
    fontSize: '20px',
    fontFamily: "'Rubik, sans-serif'"
  };

const stylealign = {
    marginTop: '17%'
    };
    
class Linking extends Component{
  render(){
  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                <Row>
                    <Col sm={8} className="py-4 px-3">
                        <div style={stylealign}>
                            <h1 className="display-3 mt-2 font-weight-bold">OUR BLOGS</h1>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>
        
            <Container className="p-5" style={{fontFamily: 'Rubik, sans-serif'}}>
              <Row>
                <Col sm={6} className="p-3">  
                    <Link to="/Lifeatmedapp">
                  <div className="container jumbo1 box bg-secondary d-flex flex-column justify-content-center" >   
                  </div>
                  </Link>
                  <div className="py-2 rounded mt-4" >
                  <Typist style={styletext} avgTypingDelay={50} cursor={{hideWhenDone: true,element:" "}}>
                        <h3 className="d-flex justify-content-center mt-3" style={{fontSize:"20px",color:'black'}}>Life at MedApp.</h3>
                  </Typist>
                  </div>
                </Col>
                <Col sm={6} className="p-3"> 
                  <div className="container jumbo2 box bg-secondary d-flex flex-column justify-content-center " >   
                  </div>
                  <div className="py-2 rounded mt-4" >
                  <Typist cursor={{hideWhenDone: true,element:" "}}>
                        <h1 align="center" style={{color:'black'}}>MedApp</h1> 
                        <h5 align="center" className="mt-2" style={{fontSize:"20px",color:'black'}}>Touching lives, Changing lives, and Saving Lives</h5>
                  </Typist>   
                  </div>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm={6} className="p-3"> 
                        <div className="container jumbo3 box bg-secondary d-flex flex-column justify-content-center">
                        </div>
                    <div className="py-2 rounded mt-4" >
                    <Typist cursor={{hideWhenDone: true,element:" "}}>
                            <h4 align="center" className="mt-3" style={{fontSize:'20px',color:'black'}}>All you need to know about Chronic diseases.</h4>
                    </Typist>
                    </div>     
                </Col>  
                <Col sm={6} className="p-3"> 
                    <div className="container jumbo4 box bg-secondary d-flex flex-column justify-content-center" >   
                    </div>     
                    <div className="py-2 rounded mt-4" >
                    <Typist cursor={{hideWhenDone: true,element:" "}}>
                        <h4 align="center" className="display-5 mt-3" style={{fontSize:'20px',color:'black'}}>Innovation and advancement in healthcare.</h4>
                    </Typist>
                    </div>     
                </Col>  
              </Row>
              <Row>
                <Col sm={6} className="mt-3 p-4">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                            <Form.Control type="text" placeholder="Search..." />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                       SEARCH
                    </Button>
                    </Form>
                    </Col>
                    <Col sm={6} className="mt-3 p-4">
                    <p>RECENT POSTS</p>
                    <p className="text-muted" style={{fontSize: '12px'}}>NEGATIVE EFFECTS OF HEALTH INSURANCE: AN ELABORATED INSIGHT!</p>
                    <p className="text-muted" style={{fontSize: '12px'}}>ARE WE TOGETHER?</p>
                    <p className="text-muted" style={{fontSize: '12px'}}>KNOW YOUR HIV STATUS</p>
                    </Col>
              </Row>
            </Container>   
        </Styles>
    </div>
  )
}
}

export default Linking;