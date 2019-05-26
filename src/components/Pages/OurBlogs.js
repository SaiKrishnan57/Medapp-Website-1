import React, {Component} from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image,Form,Button,Modal} from 'react-bootstrap';
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
    
class OurBlogs extends Component{
  constructor(props, context) {
    super(props, context);

    this.state = {
      show: false,
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
            <>
        
        <Modal
          show={this.state.show}
          onHide={this.handleHide}
          dialogClassName="modal-90w"
          aria-labelledby="example-custom-modal-styling-title"
          className="animated zoomIn"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-custom-modal-styling-title">
            NEGATIVE EFFECTS OF HEALTH INSURANCE: AN ELABORATED INSIGHT!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <p>Every sweet apple even if directly plucked from Arden, brings in a flipside too. Similarly, while health insurance efficiently tries to solve various problems of our society and tries to iron out all the gaps between the population; often the situation is such that the population despite of health insurance is incapable of accessing health care.</p>           
            <p>Reasons for Hindrances in health Insurance and negative effects.</p>
            <h4>Third Party Administrators:</h4>
            <p>The most important problem associated with them is the long turnaround time (TAT). The TAT for the payment of an insured patient’s treatment in an affiliated hospital is 20 days for cashless treatment. Most TPAs fail to meet the deadline even if the insurance company has made the payment to them. This is due to the logistics involved in handling numerous hospitals and claims. Some hospitals become disgruntled with the delay and do not offer cashless treatment facilities. Also, some TPAs do not work on Saturdays, whereas most insurers do. This delays the processing of claims.</p>
            <h4>Hospital Policy:</h4>
            <p>On the off chance that you have a wellbeing spread, there is a 90 for percent chance that an empanelled healing facility will charge you more. Higher levies for guaranteed patients prompt a higher pay-out for the insurance agencies which, thusly, prompts higher premiums. The expansion is more than the ascent in the cost of restorative care. Another issue is the abuse of gathering protection by healing centres and patients. Uninsured individuals are dealt with in light of the fact that the personality cards of many gathering protection plans don’t have photos.</p>
            <h4>Customers:</h4>
            <p>Many individuals are hospitalized for a disease that does not require it. Another issue is that they take an arrangement after an ailment has been analysed. Health insurance does not cover previous infections. Likewise, patients don’t read the arrangement report and expect all costs inside the cut-off of the cover to be repaid.</p>
            <h4>Insurance companies themselves:</h4>
            <p>To avert weight from the higher authority and get motivations, sales people mis-offer items. Once in a while, a wrong item is sold for a higher commission. As organization Websites and leaflets don’t uncover every one of the terms of the plans, customers fall prey to the sales representative and don’t purchase the correct strategy.</p>
            <h4>Case Study: Who will fill the gap?</h4>
            <p> Insurance agencies are of the view that overpricing by the doctor’s facilities has significantly affected the normal claim sum when the guaranteed goes in for cashless treatment. It is not quite recently the ascent by 26% in guarantee sum (cashless) as against 9% (repayment) more than two years; the normal claim estimates today for cashless is near Rs45,000 contrasted with normal repayment claim of Rs25,000. While lack of concern with respect to patients, bringing about overtreatment and cheating by clinics have been frequently rebuked for the higher bills related with cashless exchanges, it is additionally a reality that individuals have a tendency to settle on cashless office for costly medications. If there should be an occurrence of hospitalization for reasonable methods, the guaranteed may pay forthright and go in for repayment.
              The outcomes depended on Vantage Insurance Brokers and Risk Advisors investigation of cases information of 4,90,000 workers of 285 managers crosswise over significant ventures. The insurance agency pattern of going for in-house claims handling is to help in better haggling with doctor’s facilities for technique rates, yet the absence of control in healing centre estimating implies that the guarantor can impact the clinic rates just to a specific degree. As per insurance agency study done by a similar gathering, safety net providers trust that having in-assembled confinements in the strategy is the best measure to control claims (92%). This inclination was trailed by need to arrange focused rates with the healing centres (75%) and having in-house TPA (75%), survey courses of events for assert suggestion and accommodation (67%). The other claim control measures from insurance agencies are claims review (58%) and confining the system rundown of doctor’s facilities (58%).
              On the retail front as well, cashless Mediclaim had seen cheating by doctor’s facilities. In an offer to check the expanding misfortunes caused by doctor’s facilities because of false and swelled cases, General Insurance Public Sector Association (GIPSA), a gathering of four government insurance agencies had chosen to confine the cashless medicinal office just to healing centres that consent to join the Preferred Provider Network (PPN). The run, which was executed on 1 July 2010, offers an arranged rate for 43 medications that are secured under the cashless strategy. The four insurance agencies are New India Assurance Company Ltd, United India Insurance Company Ltd, Oriental Insurance Company Ltd and National Insurance Company Ltd. While there has been some accomplishment in bringing top of the line healing centres like Jaslok and Fortis in the PPN, a large portion of driving doctor’s facilities in Mumbai are not on PPN.</p>
            <h4>Certain Suggestions:</h4>
              <p>Please spend enough time with your insurance provider for understanding all aspects of the insurance policy before availing the service.
              Before approaching a provider make sure that you jot down all needs and expectations from the provider.
              Do not accept any policy from an unknown source; check the authenticity and goodwill of the provider company.
            </p>
          </Modal.Body>
        </Modal>
      </>
            <Container className="p-4" style={{fontFamily: 'Rubik, sans-serif'}}>
                <Row>
                <Col sm={4} className="mt-3 p-4">
                        <Image src={blog1} className="animated bounceIn" fluid/>
                        <h5 className="mt-3">NEGATIVE EFFECTS OF HEALTH INSURANCE: AN ELABORATED INSIGHT!</h5>
                        <p className="mt-3" style={styletext}>Every sweet apple even if directly plucked from Arden, brings in a flipside too. Similarly, while health insurance efficiently tries to solve various problems of our society and tries to iron out all the gaps between the population; often the situation is such that the population despite of health insurance is incapable of accessing health […]</p>
                        <Button variant="dark" onClick={this.handleShow}>Read Article</Button>
                    </Col>
                    <Col sm={4} className="mt-3 p-4">    
                        <Image src={blog2} className="animated bounceIn" fluid/> 
                        <h5 className="mt-3">ARE WE TOGETHER?</h5>
                        <p className="mt-3" style={styletext}> Abstract: This article deals with the issues concerned with poor healthcare facility among India’s rural population. It tries to cover the implementations made, loopholes involved and some suggestions in order to overcome the issue. Introduction: Roughly 70% of Indian population resides in rural areas. However, the data is sadly is not true when it comes […]</p>             
                        <Button variant="dark" onClick={this.handleShow}>Read Article</Button>
                    </Col>
                    <Col sm={4} className="mt-3 p-4">    
                        <Image src={blog3} className="animated bounceIn" fluid/> 
                        <h5 className="mt-3">KNOW YOUR HIV STATUS!</h5>
                        <p className="mt-3" style={styletext}>ABSTRACT: On the eve of World AIDS Day, it is important for each and every citizen to become aware of this chronic vibe. This problem of HIV and AIDS can be identified or cured only if we are aware of the problem. Therefore, this article deals with basic information of AIDS today, India’s stance and […]</p>             
                        <Button variant="dark" onClick={this.handleShow}>Read Article</Button>
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