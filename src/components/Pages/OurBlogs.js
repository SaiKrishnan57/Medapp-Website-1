import React from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image,Form,Button} from 'react-bootstrap';
import styled from 'styled-components';
import bgimg from './images/bg3.jpg';
import blog1 from './images/negative-effect.jpg';
import blog2 from './images/Medappblog.jpg';
import blog3 from './images/medapp1.png';

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
    fontSize: '14px',
    lineHeight: '1.5em'
  };

const stylealign = {
    marginTop: '17%'
    };
    
const OurBlogs = () => {
  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                <Row>
                    <Col sm={8} className="py-4 px-3">
                        <div style={stylealign}>
                            <h1 className="display-3 mt-2 font-weight-bold">OUR BLOG</h1>
                            <p style={styletext} className="mt-3"> Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Praesent commodo cursus magna, vel scelerisque nisl consectetur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>
            <Container className="p-4" style={{fontFamily: 'Rubik, sans-serif'}}>
                <Row>
                <Col sm={4} className="mt-3 p-4">
                        <Image src={blog1} className="animated bounceIn" fluid/>
                        <h5 className="mt-3">NEGATIVE EFFECTS OF HEALTH INSURANCE: AN ELABORATED INSIGHT!</h5>
                        <p className="mt-3" style={styletext}>Every sweet apple even if directly plucked from Arden, brings in a flipside too. Similarly, while health insurance efficiently tries to solve various problems of our society and tries to iron out all the gaps between the population; often the situation is such that the population despite of health insurance is incapable of accessing health […]</p>
                    </Col>
                    <Col sm={4} className="mt-3 p-4">    
                        <Image src={blog2} className="animated bounceIn" fluid/> 
                        <h5 className="mt-3">ARE WE TOGETHER?</h5>
                        <p className="mt-3" style={styletext}> Abstract: This article deals with the issues concerned with poor healthcare facility among India’s rural population. It tries to cover the implementations made, loopholes involved and some suggestions in order to overcome the issue. Introduction: Roughly 70% of Indian population resides in rural areas. However, the data is sadly is not true when it comes […]</p>             
                    </Col>
                <Col sm={4} className="mt-3 p-4">    
                        <Image src={blog3} className="animated bounceIn" fluid/> 
                        <h5 className="mt-3">KNOW YOUR HIV STATUS!</h5>
                        <p className="mt-3" style={styletext}>ABSTRACT: On the eve of World AIDS Day, it is important for each and every citizen to become aware of this chronic vibe. This problem of HIV and AIDS can be identified or cured only if we are aware of the problem. Therefore, this article deals with basic information of AIDS today, India’s stance and […]</p>             
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

export default OurBlogs;