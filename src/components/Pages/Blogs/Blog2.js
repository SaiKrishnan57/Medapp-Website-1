import React, { Component } from 'react';
import { Image,Button,Modal} from 'react-bootstrap';
import blog2 from '../images/Medappblog.jpg';


const styletext = {
    fontSize: '14px',
    lineHeight: '1.5em'
  };


export default class Blog1 extends Component {
    
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
                    
                    <Image src={blog2} className="animated bounceIn" fluid/> 
                        <h5 className="mt-3">ARE WE TOGETHER?</h5>
                        <p className="mt-3" style={styletext}> Abstract: This article deals with the issues concerned with poor healthcare facility among India’s rural population. It tries to cover the implementations made, loopholes involved and some suggestions in order to overcome the issue. Introduction: Roughly 70% of Indian population resides in rural areas. However, the data is sadly is not true when it comes […]</p>             
                        <Button variant="dark" onClick={this.handleShow}>Read Article</Button>
                 <Modal
          show={this.state.show}
          onHide={this.handleHide}
          size="lg"
          dialogClassName="modal-90w"
          className="animated zoomIn"
        >
          <Modal.Header closeButton>
            <Modal.Title>
            ARE WE TOGETHER?
            </Modal.Title>
          </Modal.Header>
          <Modal.Body >
            <p>his article deals with the issues concerned with poor healthcare facility among India’s rural population. It tries to cover the implementations made, loopholes involved and some suggestions in order to overcome the issue.</p>
            <p>Reasons for Hindrances in health Insurance and negative effects.</p>
            <h4>Introduction:</h4>
            <p>Roughly 70% of Indian population resides in rural areas. However, the data is sadly is not true when it comes to the facilities available to these areas; facilities in terms of infrastructure, education, agriculture and most importantly in terms of healthcare. Healthcare has been a matter of real concern in the Indian economy for several years now. With an inappropriate burden of increasing mortality rates and malnutrition.</p>
            <p>Another reason backing up this issue is the lack of education. It is due to this reason that most of the population belonging to rural population is still dependent upon unprofessional help (such as mid-wives) and continue to practice age old superstitions. As a result of this the population is facing a plethora of disorders and diseases which are beyond repair by the time they reach for medical help.</p>
            <h4>What System Does India Follow?</h4>
            <p>In India throughout the years, a few directions have been enacted and specialists made at the state and national dimensions with the point of securing patients and enhancing nature of care. At the state level, the Nursing Home Act and State Drug Controllers guarantee nature of care given by the private segment. A noteworthy force to setting up patient rights was the incorporation of private therapeutic practice under the Consumer Protection Act in 1986. Also, numerous healing centres experience accreditation and affirmation from universal bodies. The Health Management Information System was propelled in 2008 to screen health programs. Right now, around 633 of 667 areas report information by facility. Large-scale studies are occasionally attempted at the region, state, and national dimensions. What’s more, the Indian Council of Medical Research keeps up malady vaults for malignancy, diabetes, cardiovascular infections, and different sicknesses.</p>
            <h4>Insurance companies themselves:</h4>
            <p>To avert weight from the higher authority and get motivations, sales people mis-offer items. Once in a while, a wrong item is sold for a higher commission. As organization Websites and leaflets don’t uncover every one of the terms of the plans, customers fall prey to the sales representative and don’t purchase the correct strategy.</p>
            <p>The 2010 Clinical Establishments (Registration and Regulation) Act calls for endorsing least standards for all open and private clinical foundations in the nation. It has come into power in specific states and in every single association region aside from Delhi. Also, the law expects offices to charge rates for methods and administrations as dictated by the focal government in discussion with the state. The act stipulates fines and punishments if arrangements are ruptured by any office. A national chamber will supervise execution and consistence at the national dimension. Comparable gatherings at the state and area levels will be built up to uphold consistence locally. This is a standout amongst the most vital, sweeping bits of general health enactment enacted to date. Be that as it may, it is up to the states to receive this, by passing appropriate goals in their particular congregations. Whenever actualized and authorized well, it could change the supply side of health care in huge ways and go far toward meeting the far-reaching way to deal with quality confirmation visualized in the draft Health Policy for 2015.</p>
            <h4>Where does the Problem lie?</h4>
              <p>India is a developing country and many obstacles in its path of development lies in the fact that India is failing to implement its plans. Even though National Health Mission along with Health Ministry introduces several schemes for the betterment of its rural population; lack of manpower, negligence and lack of infrastructure hinder the over healthcare. Public health focuses in rustic territories of numerous states, running from West to East, the setback of the eligible and formally trained surpasses 80%. The National Sample Survey Office (NSSO) numbers demonstrate a significant shortage in the utilization of Private doctor’s facilities in the course of recent decades—just 32% of urban Indians utilize them presently, contrasted and 43% in 1995-96. However, a critical segment of these private practitioners may not be qualified or are under-qualified. General health use stays low in India. Despite the fact that genuine state use on health has expanded by 7% every year as of late, focal government use has levelled. Monetarily weaker states are especially defenceless to low general health ventures. Regardless of the nearness of numerous organizations extending from NSSO to the Registrar General of India to infection explicit program-based frameworks to overview intestinal sickness to HIV. Information is inadequate (as a rule it bars the private segment) and numerous a period, it’s duplicated. Cost of treatment ascended at a twofold digit pace of development, outpacing normal expansion in both country and urban India over the previous decade, as per the as of late distributed consequences of a cross-national overview on health directed by the National Sample Survey Office (NSSO) in the main portion of 2014.</p>
            <h4>Conclusion:</h4>
            <p>Last but not least, this problem of poor rural health care in India can be ruled out. If the country takes some serious steps, for improving infrastructural facilities, revising health sector public expenditure, providing more emphasis on the primary health care, improving the scope and allowing more man-power into the system; India can overcome the issue of poor healthcare in rural sector.</p>  
          </Modal.Body>
        </Modal>
       
            </div>
        )
    }
}
