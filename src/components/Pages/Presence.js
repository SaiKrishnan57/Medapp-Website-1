import React from 'react'
import { Jumbotron as Jumbo, Container,Row,Col } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background-size: cover;
    color: #efefef;
    height: 450px;
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

const stylealign = {
    marginTop: '17%'
    };    

const Presence = () => {

  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                <Row>
                    <Col sm={8} className="px-3">
                        <div style={stylealign}>
                            <h1 className="display-4 mt-2 font-weight-bold animated fadeIn">OUR PRESENCE</h1>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>
        </Styles>
        <div className="jumbotron">
            <h1 className="display-4 d-flex justify-content-center animated fadeIn">Hello!</h1>
            <p className="lead d-flex justify-content-center animated bounceIn">You can find our Head and Regional Offices here.</p>
            <hr className="my-4"/>
            <MediaQuery query="(min-device-width: 1224px)">
                <div align="center" className="p-0"><iframe src="https://www.google.com/maps/d/embed?mid=1h_onhN_Wm04naqwLIs9-LfQICD1LLgoX" width="1024" height="768" title="Medapp Locations"></iframe></div>
            <MediaQuery query="(min-device-width: 1824px)">
                <div align="center"><iframe src="https://www.google.com/maps/d/embed?mid=1h_onhN_Wm04naqwLIs9-LfQICD1LLgoX" width="1024" height="768" title="Medapp Locations"></iframe></div>
            </MediaQuery>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
            <div align="center"><iframe src="https://www.google.com/maps/d/embed?mid=1h_onhN_Wm04naqwLIs9-LfQICD1LLgoX" width="330" height="600" title="Medapp Locations"></iframe></div>
            </MediaQuery>
        </div>
    </div>
  )
}

export default Presence;