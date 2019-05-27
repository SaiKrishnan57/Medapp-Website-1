import React, {Component} from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Form,Button} from 'react-bootstrap';
import styled from 'styled-components';
import Blog1 from './Blogs/Blog1';
import Blog2 from './Blogs/Blog2';
import Blog3 from './Blogs/Blog3';
import bgimg from './images/bg3.jpg';

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
    
class OurBlogs extends Component{
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
                        <Blog1/>
                  </Col>
                    <Col sm={4} className="mt-3 p-4">
                      <Blog2/>
                    </Col>
                    <Col sm={4} className="mt-3 p-4">    
                      <Blog3/>
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

export default OurBlogs;