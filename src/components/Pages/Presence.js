import React,{Component} from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image,Modal,Button } from 'react-bootstrap';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import map from './images/Map.png';

const Styles = styled.div`
  .jumbo {
    background-size: cover;
    background-image: url(${map});
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

class Presence extends Component {
  constructor(props, context) {
    super(props, context);
    console.log(props);

    this.state = {
      show: false
    };

    this.handleShow = () => {
      this.setState({ show: true });
    };

    this.handleHide = () => {
      this.setState({ show: false });
    };
  }
render(){
  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo mt-5">
                <div className="overlay"></div>
                <Container>
                <Row>
                    <Col sm={8} className="px-3">
                        <div style={stylealign}>
                            <h1 className="display-4 mt-5 font-weight-bold animated fadeIn">OUR PRESENCE</h1>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>
        </Styles>
        <div className="bgimg">
        <div className="container">
            <MediaQuery query="(min-device-width: 1224px)">
              <div>
                <Image src="https://img.icons8.com/ios/50/000000/quote-left-filled.png" className="my-2"/>
                <h3 className="ml-5 mt-2 lead display-4" style={{color:'black'}}>Good health and good sense are two of life's greatest blessings - </h3>
                <h2 className="ml-5 m-3">Publilius Syrus</h2>
              </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
              <div>
                <Image src="https://img.icons8.com/ios/50/000000/quote-left-filled.png"/>
                <h3 className="ml-5 mt-2 lead display-5" style={{color:'black'}}>Good health and good sense are two of life's greatest blessings - </h3>
                <h2 className="ml-5 m-3">Publilius Syrus</h2>
              </div>
           </MediaQuery>
        </div>
        <Row >
          <Col>
              <p className="container font-weight-bold p-5" style={{fontFamily: 'Ubuntu, sans-serif',lineHeight:'2em'}}>
                In recent times, it has become apparent that increasing health system cannot be resolved only by adding resources, but must also be addressed with far-reaching methods of service delivery. Therefore, through Medapp we endeavor to provide prompt medical attention along with the right medical equipment at your door-step. 
                Medapp believes in addressing the impoverished areas of India by embracing new and facile ways of healthcare, by hosting health camps and motivating the underprivileged population to live an assured life. This is accomplished by providing primary health care services in remote areas of our country, where we make a run at catering health counselling as well as regular follow ups, in order to lessen the rate at which lives are jeopardized because unawareness and negligence. 
                With Medapp we strive to ensure that the right medical resources are provided to the right people, within the right time-frame for their medical needs, thereby prioritizing health before anything else.
              </p>
          </Col>
        </Row>
        </div> 
        <div className="jumbotron">
            <h1 className="display-4 d-flex justify-content-center animated fadeIn">Hello!</h1>
            <p className="lead d-flex justify-content-center animated bounceIn">You can find our Head and Regional Offices here.</p>
            <hr className="my-4"/>
            <MediaQuery query="(min-device-width: 1224px)">
                <div className="holder d-flex justify-content-center">
                  <iframe className="frame" src="https://www.google.com/maps/d/embed?mid=1h_onhN_Wm04naqwLIs9-LfQICD1LLgoX" width="1000" height="750" title="Medapp Locations"></iframe>
                  <div className="bar">
                      <p className="d-flex justify-content-start bg-white p-2 stats" >Patients Screened: <span className="ml-2">384594+</span></p>
                      <p className="d-flex justify-content-start bg-white p-2 stats" >Camps Conducted:<span className="ml-2">814</span></p>
                      <p className="d-flex justify-content-start bg-white p-2 stats" >Cities:<span className="ml-2">48+</span> </p>
                      <p className="d-flex justify-content-start bg-white p-2 stats" >States:<span className="ml-2">19+</span></p>
                      <p className="d-flex justify-content-start bg-white p-2 stats" >Lives Impacted:<span className="ml-2">272844+</span></p>
                  </div>
                </div>
            </MediaQuery>
            <MediaQuery query="(max-device-width: 1224px)">
              <MediaQuery query="(orientation: portrait)">
                <div className="holder-min ">
                  <iframe className="frame" src="https://www.google.com/maps/d/embed?mid=1h_onhN_Wm04naqwLIs9-LfQICD1LLgoX" width="330" height="600" title="Medapp Locations"></iframe>    
                      <Button variant="dark" align="center" onClick={this.handleShow}>Our Influence</Button>
                  <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    size="md"
                    dialogClassName="modal-50w"
                    className="animated zoomIn mt-5"
                  >
                  <Modal.Header closeButton>
                    </Modal.Header>
                  <Modal.Body >
                    <p className="d-flex justify-content-start bg-white p-2 stats" >Patients Screened: <span className="ml-2">384594+</span></p>
                    <p className="d-flex justify-content-start bg-white p-2 stats" >Camps Conducted:<span className="ml-2">814</span></p>
                    <p className="d-flex justify-content-start bg-white p-2 stats" >Cities:<span className="ml-2">48+</span> </p>
                    <p className="d-flex justify-content-start bg-white p-2 stats" >States:<span className="ml-2">19+</span></p>
                    <p className="d-flex justify-content-start bg-white p-2 stats" >Lives Impacted:<span className="ml-2">272844+</span></p>
                  </Modal.Body>
                </Modal>
                </div>
                </MediaQuery>
              <MediaQuery query="(orientation: landscape)">
                <div className="holder d-flex justify-content-center">
                  <iframe className="frame" src="https://www.google.com/maps/d/embed?mid=1h_onhN_Wm04naqwLIs9-LfQICD1LLgoX" width="575" height="400" title="Medapp Locations"></iframe>    
                  <div className="bar-min-landscape">
                    <p className="d-flex justify-content-start bg-white stats-min" >Patients Screened: <span className="ml-2">384594+</span></p>
                    <p className="d-flex justify-content-start bg-white stats-min" >Camps Conducted:<span className="ml-2">814</span></p>
                    <p className="d-flex justify-content-start bg-white stats-min" >Cities:<span className="ml-2">48+</span> </p>
                    <p className="d-flex justify-content-start bg-white stats-min" >States:<span className="ml-2">19+</span></p>
                    <p className="d-flex justify-content-start bg-white stats-min" >Lives Impacted:<span className="ml-2">272844+</span></p>
                  </div>
                </div>
                </MediaQuery>
            </MediaQuery>
        </div>          
    </div>
  )
}
}

export default Presence;