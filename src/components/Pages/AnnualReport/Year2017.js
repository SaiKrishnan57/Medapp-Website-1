import React, { Component } from 'react';
import { Button,Modal} from 'react-bootstrap';
import styled from 'styled-components';
import year2017 from '../images/year2017.jpg'

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
.jumbo2017 {
  background-size: cover;
  background-image: url(${year2017});
  height: 300px;
  box-sizing: border-box;
  box-shadow: inset -50px 0 250px rgba(255,255,255,0.4) ;
  cursor: pointer;
}
`;

export default class Year2017 extends Component {
    
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
                  <div className="container jumbo2017 rounded box bg-secondary d-flex flex-column justify-content-end" onClick={this.handleShow}>   
                    <Button variant="dark" className="p-3" style={{borderRadius:'0',opacity:'0.8'}}>
                      <h5 className="text-white" style={textstyle}>Year 2017</h5>
                     </Button>
                   </div>
                 <Modal
          show={this.state.show}
          onHide={this.handleHide}
          size="lg"
          dialogClassName="modal-90w"
        >
        <div className="container" style={{textAlign:'justify',backgroundImage: 'linear-gradient(to top, rgba(248,54,0,0.5), rgba(249,212,35,0.1))',fontSize:'20px',lineHeight:'1.8em'}}>
          <Modal.Header closeButton>
            <Modal.Title>
            <h1 className="mb-1 lead p-3" style={year}>
                        2017:
            </h1>
            </Modal.Title>
           </Modal.Header>
           <Modal.Body >
                <p style={textstyle}>
                    India has become the capital of chronic diseases like diabetes and hypertension. We at Medapp ventured into taking responsibility of catering to chronic disease management. The major issue is most of the people are not aware of the fact that they have these chronic diseases and even if they are aware of it, they tend to ignore it. Diabetes being a chronic disease, people don’t take it seriously, they have adapted it to their lifestyle. One of the major issue is most people don’t go for diagnosis, and the other issue being even if they go for diagnosis they don’t maintain their health accordingly as proper counselling isn’t provided to them. 
                </p>
                <p style={textstyle}>
                    In chronic disease management the timely medication, diet and counselling is highly required. But what happens with most of the healthcare service provider is that they provide same consultation to every patient. What we do here is first understand the history of the patient, then understand the medication, diet and lifestyle, then conduct the procedures and diagnose the patient after getting the diagnosis report we go for one-on-one counselling where depending upon the varied factors such as financial and environmental a patient is provided proper consultation for the disease management. The impact that we have created is that, understanding individuals requirement and providing them with the right requisites, thus saving them from chaos and saving lives, as ‘their lives are just not theirs alone.’
                </p>
              </Modal.Body>
            </div>
        </Modal>
        </Styles>
            </div>
        )
    }
}
