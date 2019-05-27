import React, { Component } from 'react'
import { Container,Row,Col,Form,Button} from 'react-bootstrap';
import './imagestyles.css';

const styletext = {
       fontSize:'18px',
       textTransform: 'uppercase',
       fontFamily:'Rubik, sans-serif',
  };

class Contacts extends Component {
  render() {
    return (
      <div>
         <Container className="p-4 contacts">
            <h1 align="center">Get in Touch with Us.</h1>
                <Row>
                    <Col sm={4} style={{marginTop:'10%'}}>
                      <h3 className="display-5 font-weight-normal">
                        Our Contacts
                      </h3>
                      <p className="mt-4" style={styletext}>
                        Bengaluru
                      </p>
                      <p className="mt-2 text-muted" style={styletext}>
                        701, 7th Floor, B wing, Mittal Towers, M G Road, Bengaluru, 560001
                      </p>
                    </Col>
                    <Col sm={8} className="mt-3 p-4">    
                    <Form>
                      <Row>
                        <Col sm={4} className="mt-3 p-1">
                          <p style={styletext}>Your name</p>
                          <Form.Control placeholder=" " />
                        </Col>
                        <Col sm={4} className="mt-3 p-1">
                          <p style={styletext}>Your Email</p>
                          <Form.Control placeholder=" " />
                        </Col>
                        <Col sm={4} className="mt-3 p-1">
                          <p style={styletext}>Phone Number</p>
                          <Form.Control placeholder=" " />
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12} className="mt-3 p-1">
                          <p style={styletext}>Subject</p>
                          <Form.Control placeholder=" " />
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={12} className="mt-3 p-1">
                          <p style={styletext}>Your Message</p>
                          <Form.Control as="textarea" rows="5" />
                        </Col>
                      </Row>
                      <Row className="mt-3 p-1">
                        <Button className="px-5 py-2" variant="primary" type="submit">
                          Send Message
                        </Button>
                      </Row>
                    </Form>
                    </Col>    
                </Row>
                </Container>
    </div>
  )
}
}

export default Contacts;
