import React, { Component } from 'react';
import { Image,Button,Modal} from 'react-bootstrap';
import styled from 'styled-components';
import year2016 from '../images/year2016.jpg'

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
.jumbo2016 {
  background-size: cover;
  background-image: url(${year2016});
  height: 300px;
  box-sizing: border-box;
  box-shadow: inset -50px 0 250px rgba(255,255,255,0.4) ;
}
`;

export default class Year2016 extends Component {
    
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
                    <div className="container jumbo2016 rounded box bg-secondary d-flex flex-column justify-content-end ">   
                    <Button variant="dark" className="p-3" style={{borderRadius:'0',opacity:'0.8'}} onClick={this.handleShow}>
                      <h5 className="text-white" style={textstyle}>Year 2016</h5>
                    </Button>
                    </div>
                 <Modal
          show={this.state.show}
          onHide={this.handleHide}
          size="lg"
          dialogClassName="modal-90w"
        >
        <div className="container" style={{textAlign:'justify',backgroundImage: 'linear-gradient(to top, rgba(15,216,80,0.5), rgba(249,240,71,0.1))',fontSize:'20px',lineHeight:'1.8em'}}>
          <Modal.Header closeButton>
            <Modal.Title>
            <h1 className="mb-1 lead p-3" style={year}>
                        2016:
            </h1>
            </Modal.Title>
           </Modal.Header>
           <Modal.Body >
            <p style={textstyle}>
                In the modern societies of India, say metropolitan cities and cosmopolitan cities where no one has time for anything, managing personal health becomes difficult and research says one out of two people ignore their health until it becomes worse. The major reason for the negligence towards health was the non-availability of time and easier accessibility to the healthcare providers. We at Medapp tied to understand the issues from ground level, where we found that out of 100 patients in a hospital 70 of them go for the primary healthcare services. Now, for this primary health issues an individual tends to wait unless the condition becomes worse just because they don’t want to go to a hospital for treatment. We understood the issue here and the psychological factors associated. 
            </p>
            <p style={textstyle}>
                We came up with healthcare at your doorstep model, where for any primary healthcare services, be it blood sample collection, wound dressing or even fever management an individual doesn’t require to go to hospital. With one click our team of experts would come to their doorstep and provide the necessary services. The impact that we created was that now a patient is not afraid to get treated as the treatment happens at his comfort zone; many times we have found that hospital environment panic the individuals and they don’t go because of this panic. Also coming to the factor of cost, it would have been highly expensive and taking a private transport to the hospitals and then the fees of the consultation and procedures at hospital; the model that we have is highly affordable for any individual of any income group. Third major impact that we have created is bringing the uberization of healthcare services in India, thus making healthcare accessible, affordable and convenient to all.
            </p>
            </Modal.Body>
            </div>
        </Modal>
        </Styles>
            </div>
        )
    }
}
