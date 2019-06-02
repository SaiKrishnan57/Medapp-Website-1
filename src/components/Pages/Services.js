import React from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import bgimg from './images/services.jpg';

const Styles = styled.div`
  .jumbo {
    background-image: url(${bgimg});
    background-size: cover;
    color: #efefef;
    height: 500px;
    position: relative;
    margin-top:50px;
    z-index: -2;
  }
  .jumbo-min{
    background-image: url(${bgimg});
    background-size: cover;
    color: #efefef;
    height: 300px;
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

const icon = {
    fontSize: '40px'
    };

const caption = {
    fontFamily: 'Ubuntu, sans-serif'
};
    
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Services = () => {

    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))
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
                    Initiating Compassionate Care & service to Communities (touching life, changing life, saving life )
                </h3>

              </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
              <div>
                <Image src="https://img.icons8.com/ios/50/000000/quote-left-filled.png"/>
                <h3 className="ml-5 mt-2 lead display-5" style={{color:'black'}}>
                    Initiating Compassionate Care & service to Communities (touching life, changing life, saving life )
                </h3>
              </div>
           </MediaQuery>
        </div>
        <Row >
          <Col>
              <p className="container animated fadeIn font-weight-bold p-5" style={{fontFamily: 'Ubuntu, sans-serif',lineHeight:'2em'}}>
                    Chronic disease accounts for at least 6 to 7 of the 10 leading causes of death and 85% of all healthcare spending.
                    Healthcare systems are poorly-equipped to handle this epidemic as most chronic diseases require continuous intervention
                    to make the behavioral and lifestyle changes needed to effectively manage them. medapp.in enables broad scaling of frequent screening,
                    high-touch, personalized,behavioral interventions & counselling at low cost, and as such has become an essential part
                    of preventing and managing chronic conditions.
                </p>
          </Col>
        </Row>
        </div>
            <Container className="mt-5 p-2">
                <div >
                <Row className="animated fadeIn delay-1s">
                    <Col sm={3} className="mt-1 ml-5 p-4 text-center" style={{color:'#FFD700'}}>
                        <animated.div 
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x+45, y+45) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }} > 
                            <i className="fas fa-stethoscope" style={icon}></i> 
                            <p style={caption}>Diabetic Screening Camps</p>
                        </animated.div>
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 text-center" style={{color:'#5F9EA0'}}>
                        <animated.div 
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x+45, y+45) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }} >     
                            <i className="fas fa-ambulance" style={icon}></i>
                            <p style={caption}>Primary Health care services at door step</p>
                        </animated.div>
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 text-center" style={{color:'#8B4513'}}>
                        <animated.div 
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys:calc(x+45, y+45) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }} >     
                            <i className="fas fa-medkit" style={icon}></i>
                            <p style={caption}>Diabetic Care & Counselling</p>
                        </animated.div>
                    </Col>     
                </Row>
                </div>
                <div >  
                <Row className="animated fadeIn delay-2s">
                    <Col sm={3} className="mt-1 ml-5 p-4 text-center" style={{color:'#0000CD'}}>
                        <animated.div 
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x+45, y+45) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }} > 
                            <i className="fas fa-file-medical-alt" style={icon}></i> 
                            <p style={caption}>Chronic Disease Management</p>
                        </animated.div>  
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 text-center" style={{color:'#00BFFF'}}>
                        <animated.div 
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x+45, y+45) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }} >     
                            <i className="fas fa-user-md" style={icon}></i>
                            <p style={caption}>Patient Support Programme</p>
                        </animated.div>
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 text-center" style={{color:'#FF4500'}}>
                        <animated.div 
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x+45, y+45) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }} >     
                            <i className="fas fa-user-nurse" style={icon}></i>
                            <p style={caption}>Training for Nurses & Paramedics</p>
                        </animated.div>
                    </Col>     
                </Row>
                </div>
                <div >
                <Row className="animated fadeIn delay-3s">
                    <Col sm={3} className="mt-1 ml-5 p-4 text-center" style={{color:'#32CD32'}}>
                        <animated.div 
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x+45, y+45) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }} > 
                            <i className="fas fa-procedures" style={icon}></i> 
                            <p style={caption}>Screening for Asthma & Respiratory diseases</p>
                        </animated.div>                          
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 text-center" style={{color:'#B22222'}}>
                        <animated.div 
                            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x+45, y+45) })}
                            onMouseLeave={() => set({ xys: [0, 0, 1] })}
                            style={{ transform: props.xys.interpolate(trans) }} >         
                            <i className="fas fa-clinic-medical" style={icon}></i>
                            <p style={caption}>One shop solution for all diagnostic services</p>
                        </animated.div>      
                    </Col>
                    <Col sm={3} className="mt-1 ml-5 p-4 text-center" style={{color:'#FF1493'}}>    
                      <animated.div 
                        onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x+45, y+45) })}
                        onMouseLeave={() => set({ xys: [0, 0, 1] })}
                        style={{ transform: props.xys.interpolate(trans) }} >         
                         <i className="fas fa-syringe" style={icon}></i>
                         <p style={caption}>Onsite Injection & Infusions</p>
                    </animated.div>   
                    </Col>     
                </Row>
                </div>
            </Container>
        </Styles>
    </div>
  )
}

export default Services;