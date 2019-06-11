import React, {Component} from 'react'
import { Jumbotron as Jumbo, Container,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import bgimg from './images/lifeatmedapp.jpg';

const Styles = styled.div`
  .jumbo {
    background-image: url(${bgimg});
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    color: #efefef
    height: 800px;
    position: relative;
    z-index: -2;
  }
   .jumbo-min {
    background: url(${bgimg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 400px;
    margin-top:85px;
    width:100%;
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
  .stylecontent{
      font-size:20px;
      line-height:1.8em;
  }
  p{
    font-family:'Quicksand', sans-serif;
    font-weight:bold;
  }
`;

const stylealign = {
    marginTop: '30%'
    };
    
class Lifeatmedapp extends Component{
  render(){
  return (
    <div>
        <Styles>
        <MediaQuery query="(min-device-width: 1224px)">   
           <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container>
                <Row>
                    <Col sm={8} className="py-4 px-3">
                        <div style={stylealign}>
                            <h1 className="font-weight-bold" style={{fontFamily:"'Quicksand', sans-serif",fontSize:'5rem'}}>Life At MedApp</h1>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>   
        </MediaQuery>
        <MediaQuery query="(max-device-width: 1224px)">   
           <Jumbo fluid className="jumbo-min">
                <div className="overlay"></div>
                <Container>
                <Row>
                    <Col sm={8} className="py-4 px-3">
                        <div style={stylealign}>
                            <h1 className="mt-2 font-weight-bold" style={{fontFamily:"'Quicksand', sans-serif",fontSize:'3rem'}}>Life At MedApp</h1>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>   
        </MediaQuery>
        <div className="mb-5" data-aos="fade-right">
            <div className="container p-5 stylecontent" style={{backgroundImage: 'linear-gradient(120deg, rgba(146,254,157,0.4) , rgba(0,201,255,0.4))'}}>
                <p>
                You must have the experience when your parents have to miss work in order to make the doctor's appointment. Again, miss a few more days for tests, revisiting with reports etc and the process continues. Some might have been through the above themselves.
                </p>
                <p>
                It's fine to prioritize health. But, Medapp makes it even more convenient, where we will prioritize your health without compromising your work or other such essentials. Medapp brings all primary health care services right at your door step, which makes you able to consult a doctor or send your reports or your diagnostic tests right from your home or office or any place you want to be at the same time. We believe in this service oriented environment people should also be able to avail services beyond buying food and accessories online.
                </p>
                <p>
                Medapp does the same for its customers. We want to build a parallelism with the health and the daily life of a customer, where there is no hindrance in maintaining both with equal pace and mettle.
                </p>
                <p>
                We are focused on bridging the gap of access to medical services to the people who still remains unaware of it. Besides, the grown IT sector where access to information is fast paced, we intend to bring the same at the ground level through our operations.
                </p>
                <p>
                Our services are wide spread among sample collection, tests, ECG at site, dressing wounds, injections, nursing care, catheterization. Moreover, we have camps for diabetes, oncology, diagnostics & phlebotomy, on site infusions, injections, occupational health care centers, vaccinations, government health care projects etc.
                </p>
                <p>
                Our onshore integrated healthcare delivery services is composed of an experienced team and more than 7000 nurses. Medapp has successfully started it's operations since 2015 and from then on exploring the market with integrated, innovated and efficient models has been adopted to ensure and deliver it's services has been it's only objective.
                </p>
                <p>
                Obliging to our valuable service takers we have successfully built an one stop point for almost all kinds of primary healthcare services. We take immense care and responsibility in developing our operations in accordance to the personalised needs and views of our customers. Being healthcare a very personal issue of a person. We are always uplifting our services to ensure the same . Alongside, we all ensure that the services are delivered in accordance to the bearable financial status of our service providers.
                </p>
                <p>
                Medapp services builds a provision where the service products are delivered to our service takers in the least cost, saving their time and money at the same time. Fluctuating, flexible and customer oriented models have been adopted throughout our establishment to ensure the satisfaction and hassle free investment in availing the same services through our organization.
                </p>
                <p>
                We devise to build a sustainable and responsible team of service providers and services, taking care of our social and corporate responsibilities to the standards of our national and international interests.
                </p>
            </div>
        </div>
        </Styles>
    </div>
  )
}
}

export default Lifeatmedapp;