import React, {Component} from 'react'
import { Jumbotron as Jumbo, Container,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import bgimg from './images/life.jpg';
import Year2015 from './AnnualReport/Year2015';
import Year2016 from './AnnualReport/Year2016';
import Year2017 from './AnnualReport/Year2017';
import Year2018 from './AnnualReport/Year2018';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const Styles = styled.div`
  .jumbo {
    background-image: url(${bgimg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #efefef
    height: 800px;
    position: relative;
    z-index: -2;
  }
   .jumbo-min {
    background: url(${bgimg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    margin-top:85px;
    width:100%;
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
  .stylecontent{
      font-size:20px;
      line-height:1.8em;
  }
  p{
    font-family:'Quicksand', sans-serif;
    font-weight:bold;
    color:black;
  }
  .year{
      font-size:50px;
      color: black;
      font-weight:bold;
  }
`;

const stylealign = {
    marginTop: '17%'
    };
    
class Societalimpact extends Component{
    
  render(){
  return (
    <div  className="mb-5">
        <Styles>
        <MediaQuery query="(min-device-width: 1224px)">   
           <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                <Row>
                    <Col sm={8} className="py-4 px-3">
                        <div style={stylealign}>
                            <h1 className="mt-2 font-weight-bold" style={{fontFamily:"'Quicksand', sans-serif",fontSize:'5rem'}}>Societal Impact</h1>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>   
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">   
           <Jumbo fluid className="jumbo-min">
                <div className="overlay"></div>
                <Container>
                <Row>
                    <Col sm={8} className="py-4 px-3">
                        <div style={stylealign}>
                            <h1 className="mt-2 font-weight-bold" style={{fontFamily:"'Quicksand', sans-serif",fontSize:'3rem'}}>Societal Impact</h1>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>   
        </MediaQuery>
        <div data-aos="fade-down">
            <div className="container mt-5">
            <Row>
                <Col className="mt-3" sm={6}>
                 <Year2015/>
                </Col>
                <Col className="mt-3" sm={6}>
                 <Year2016/>
                </Col>
            </Row>
            </div>
            </div>
            <div  data-aos="fade-up">
            <div className="container mt-5">
            <Row>
                <Col className="mt-3" sm={6}>
                 <Year2017/>
                </Col>
                <Col className="mt-3" sm={6}>
                 <Year2018/>
                </Col>
            </Row>
            </div>
            </div>
        </Styles>
    </div>
  )
}
}

export default Societalimpact;