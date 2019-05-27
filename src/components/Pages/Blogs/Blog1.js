import React, { Component } from 'react';
import { Image,Button,Modal} from 'react-bootstrap';
import blog1 from '../images/negative-effect.jpg';


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
                
                <Image src={blog1} className="animated bounceIn" fluid/>
                        <h5 className="mt-3">NEGATIVE EFFECTS OF HEALTH INSURANCE: AN ELABORATED INSIGHT!</h5>
                        <p className="mt-3" style={styletext}>Every sweet apple even if directly plucked from Arden, brings in a flipside too. Similarly, while health insurance efficiently tries to solve various problems of our society and tries to iron out all the gaps between the population; often the situation is such that the population despite of health insurance is incapable of accessing health […]</p>
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
       
            </div>
        )
    }
}
