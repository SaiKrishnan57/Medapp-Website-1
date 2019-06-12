import React, { Component } from 'react';
import { Image,Button,Modal} from 'react-bootstrap';
import styled from 'styled-components';
import year2018 from '../images/year2018.jpg'

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
.jumbo2018 {
  background-size: cover;
  background-image: url(${year2018});
  height: 300px;
  box-sizing: border-box;
  box-shadow: inset -50px 0 250px rgba(255,255,255,0.4) ;
}
`;

export default class Year2018 extends Component {
    
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
                    <div className="container rounded jumbo2018 box bg-secondary d-flex flex-column justify-content-end" >   
                    <Button variant="dark" className="p-3" style={{borderRadius:'0',opacity:'0.8'}} onClick={this.handleShow}>
                      <h5 className="text-white" style={textstyle}>Year 2018</h5>
                    </Button>
                    </div>
                 <Modal
          show={this.state.show}
          onHide={this.handleHide}
          size="lg"
          dialogClassName="modal-90w"
        >
                <div className="container" style={{textAlign:'justify',backgroundImage: 'linear-gradient(to top, rgba(246,211,101,0.7), rgba(253,160,133,0.1))',fontSize:'20px',lineHeight:'1.8em'}}>
                  <Modal.Header closeButton>
                    <Modal.Title>
                      <h1 className="mb-1 lead p-3 " style={year}>
                        2018:
                      </h1>
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body >
                    <p style={textstyle}>
                       In India, healthcare services are advanced to a great extent, however not everyone is benefiting from these technological advancement the reason being accessibility to these services and affordability to these services. We understood that the rural areas in India are the places where the people are affected most yet they are unaware of the fact they might have the disease. Thus, we became the corporate social responsibility partners to the pharmaceuticals and started reaching out to the people in rural of India, even to those places where there is no road or rail accessibility. We bought these advanced and sophisticated technologies to the areas where there is an actual need. With our procedures and methods of providing healthcare services, many people were diagnosed with chronic diseases and many of them who had it earlier never knew how to maintain their health. With our proper diagnosis and one-on-one on ground counselling mechanism we were able to impact the lives of these millions of people. Families used to lose their family members each year to these diseases due to lack of awareness and disease management, now due to our services they come up with smiling faces thus touching lives, saving lives and changing lives. 
                    </p>
                  </Modal.Body>
                </div>
              </Modal>
           </Styles>
          </div>
        )
    }
}
