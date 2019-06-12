import React, { Component } from 'react';
import { Image,Button,Modal} from 'react-bootstrap';
import year2015 from '../images/year2015.jpg'
import styled from 'styled-components';

const stylecontent={
    fontSize:'20px',
    lineHeight:'1.8em'
}

const textstyle ={
    fontFamily:"'Quicksand', sans-serif",
    fontWeight:'bold',
    color:'black'
}

const year = {
    fontSize:'50px',
    color: 'black',
    fontWeight:'bold'
}
const Styles = styled.div`
.jumbo2015 {
  background-size: cover;
  background-image: url(${year2015});
  height: 300px;
  box-sizing: border-box;
  box-shadow: inset -50px 0 250px rgba(255,255,255,0.4) ;
}
`;

export default class Year2015 extends Component {
    
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

    render() {
        return (
            <div>
              <Styles>
                    <div className="container jumbo2015 rounded box bg-secondary d-flex flex-column justify-content-end">   
                      <Button variant="dark" className="p-3" id="mybutton" style={{borderRadius:'0',opacity:'0.8'}} onClick={this.handleShow}>
                        <h5 className="text-white" style={textstyle}>Year 2015</h5>
                      </Button>
                    </div>
                 <Modal
          show={this.state.show}
          onHide={this.handleHide}
          size="lg"
          dialogClassName="modal-90w"
        >
             <div className="container" style={{textAlign:'justify',backgroundImage: 'linear-gradient(-225deg, rgba(105,234,203,0.9) , rgba(234,204,248,0.5) , rgba(102,84,241,0.2) )',fontSize:'20px',lineHeight:'1.8em'}}>
          <Modal.Header closeButton>
            <Modal.Title>
            <h1 className="mb-1 lead p-3" style={year}>
                        2015:
            </h1>
            </Modal.Title>
           </Modal.Header>
           <Modal.Body>
                <p style={textstyle}>
                Healthcare in modern society is no doubt growing fourfold but however is becoming inaccessible due varied reasons. We at Medapp.in identified three major factors and incorporated the organisation to make healthcare accessible, affordable and convenient. 
                </p>
                <p style={textstyle}>
                With our unique model of healthcare delivery service we were able to create a major impact in the society. To brief it out, when an individual is having blood-sugar disease or diabetes, then he/she would have to visit to the path-labs once in a while every now and then to check the level of sugar. For these tests, an individual has to visit the path-lab before consuming food and again after consuming food; these entire process takes at least half a day as when individual visits the lab, he/she has to wait for the turn and then again have to come back in evening to collect the reports. The to and fro movement to hospital is fine for middle age person, but what about the senior citizens? They cannot travel alone to the hospitals or the path-labs, for them one has to take along with them. In this busy would where no one has time, we often tend to ignore or delay our healthcare requirements. Over here at Medapp, an individual doesn’t need to go to the hospital, whenever any service is required they have to just book the service and our team of expert nurses will be right there at the doorstep to conduct the procedures, and using AI technologies, the reports will be shared instantly within 60 seconds. Now, an individual do not have to reschedule their work timing, or any plans for their health. Now, one doesn’t have to worry about their parents to be taken to hospitals for tests, thus we are trying towards bringing a paradigm shift towards healthcare. 
                </p>
                <p style={textstyle}>
                Now, an individual do not have to reschedule their work timing, or any plans for their health. Now, one doesn’t have to worry about their parents to be taken to hospitals for tests, thus we are trying towards bringing a paradigm shift towards healthcare.    
                </p>
            </Modal.Body>
            </div>
        </Modal>
        </Styles>
            </div>
        )
    }
}
