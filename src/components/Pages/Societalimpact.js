import React, {Component} from 'react'
import { Jumbotron as Jumbo, Container,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';
import bgimg from './images/life.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

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
    color:black;
  }
  .year{
      font-size:50px;
      color: black;
      font-weight:bold;
  }
`;

const stylealign = {
    marginTop: '17%'
    };
    
class Societalimpact extends Component{
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
                            <h1 className="mt-2 font-weight-bold" style={{fontFamily:"'Quicksand', sans-serif",fontSize:'5rem'}}>Societal Impact</h1>
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
                            <h1 className="mt-2 font-weight-bold" style={{fontFamily:"'Quicksand', sans-serif",fontSize:'3rem'}}>Societal Impact</h1>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>   
        </MediaQuery>
        <div className="mb-5">
            <div data-aos="fade-down">
            <div className="box container p-5 stylecontent" style={{backgroundImage: 'linear-gradient(-225deg, rgba(105,234,203,0.9) , rgba(234,204,248,0.5) , rgba(102,84,241,0.4) )'}}>
                <h1 className="mb-1 lead p-3 year">
                        2015:
                </h1>
                <p>
                Healthcare in modern society is no doubt growing fourfold but however is becoming inaccessible due varied reasons. We at Medapp.in identified three major factors and incorporated the organisation to make healthcare accessible, affordable and convenient. 
                </p>
                <p>
                With our unique model of healthcare delivery service we were able to create a major impact in the society. To brief it out, when an individual is having blood-sugar disease or diabetes, then he/she would have to visit to the path-labs once in a while every now and then to check the level of sugar. For these tests, an individual has to visit the path-lab before consuming food and again after consuming food; these entire process takes at least half a day as when individual visits the lab, he/she has to wait for the turn and then again have to come back in evening to collect the reports. The to and fro movement to hospital is fine for middle age person, but what about the senior citizens? They cannot travel alone to the hospitals or the path-labs, for them one has to take along with them. In this busy would where no one has time, we often tend to ignore or delay our healthcare requirements. Over here at Medapp, an individual doesn’t need to go to the hospital, whenever any service is required they have to just book the service and our team of expert nurses will be right there at the doorstep to conduct the procedures, and using AI technologies, the reports will be shared instantly within 60 seconds. Now, an individual do not have to reschedule their work timing, or any plans for their health. Now, one doesn’t have to worry about their parents to be taken to hospitals for tests, thus we are trying towards bringing a paradigm shift towards healthcare. 
                </p>
                <p>
                Now, an individual do not have to reschedule their work timing, or any plans for their health. Now, one doesn’t have to worry about their parents to be taken to hospitals for tests, thus we are trying towards bringing a paradigm shift towards healthcare.    
                </p>
            </div>
            </div>
            <div data-aos="fade-left">
            <div className="box container mt-5 p-5 stylecontent" style={{backgroundImage: 'linear-gradient(to top, rgba(15,216,80,0.5), rgba(249,240,71,0.1))'}}>
                <h1 className="mb-1 lead p-3 year">
                        2016:
                </h1>
                <p>
                In the modern societies of India, say metropolitan cities and cosmopolitan cities where no one has time for anything, managing personal health becomes difficult and research says one out of two people ignore their health until it becomes worse. The major reason for the negligence towards health was the non-availability of time and easier accessibility to the healthcare providers. We at Medapp tied to understand the issues from ground level, where we found that out of 100 patients in a hospital 70 of them go for the primary healthcare services. Now, for this primary health issues an individual tends to wait unless the condition becomes worse just because they don’t want to go to a hospital for treatment. We understood the issue here and the psychological factors associated. 
                </p>
                <p>
                We came up with healthcare at your doorstep model, where for any primary healthcare services, be it blood sample collection, wound dressing or even fever management an individual doesn’t require to go to hospital. With one click our team of experts would come to their doorstep and provide the necessary services. The impact that we created was that now a patient is not afraid to get treated as the treatment happens at his comfort zone; many times we have found that hospital environment panic the individuals and they don’t go because of this panic. Also coming to the factor of cost, it would have been highly expensive and taking a private transport to the hospitals and then the fees of the consultation and procedures at hospital; the model that we have is highly affordable for any individual of any income group. Third major impact that we have created is bringing the uberization of healthcare services in India, thus making healthcare accessible, affordable and convenient to all.
                </p>
            </div>
            </div>
            <div  data-aos="fade-up">
            <div className="box container mt-5 p-5 stylecontent" style={{backgroundImage: 'linear-gradient(to right, #f83600 0%, #f9d423 100%);'}}>
                <h1 className="mb-1 lead p-3 year">
                        2017:
                </h1>
                <p>
                India has become the capital of chronic diseases like diabetes and hypertension. We at Medapp ventured into taking responsibility of catering to chronic disease management. The major issue is most of the people are not aware of the fact that they have these chronic diseases and even if they are aware of it, they tend to ignore it. Diabetes being a chronic disease, people don’t take it seriously, they have adapted it to their lifestyle. One of the major issue is most people don’t go for diagnosis, and the other issue being even if they go for diagnosis they don’t maintain their health accordingly as proper counselling isn’t provided to them. 
                </p>
                <p>
                In chronic disease management the timely medication, diet and counselling is highly required. But what happens with most of the healthcare service provider is that they provide same consultation to every patient. What we do here is first understand the history of the patient, then understand the medication, diet and lifestyle, then conduct the procedures and diagnose the patient after getting the diagnosis report we go for one-on-one counselling where depending upon the varied factors such as financial and environmental a patient is provided proper consultation for the disease management. The impact that we have created is that, understanding individuals requirement and providing them with the right requisites, thus saving them from chaos and saving lives, as ‘their lives are just not theirs alone.’
                </p>
            </div>
            </div>
            <div  data-aos="fade-right">
            <div className="box container mt-5 p-5 stylecontent" style={{backgroundImage: 'linear-gradient(120deg, rgba(246,211,101,0.7), rgba(253,160,133,0.2))'}}>
                <h1 className="mb-1 lead p-3 year">
                    2018:
                </h1>
                <p>
                In India, healthcare services are advanced to a great extent, however not everyone is benefiting from these technological advancement the reason being accessibility to these services and affordability to these services. We understood that the rural areas in India are the places where the people are affected most yet they are unaware of the fact they might have the disease. Thus, we became the corporate social responsibility partners to the pharmaceuticals and started reaching out to the people in rural of India, even to those places where there is no road or rail accessibility. We bought these advanced and sophisticated technologies to the areas where there is an actual need. With our procedures and methods of providing healthcare services, many people were diagnosed with chronic diseases and many of them who had it earlier never knew how to maintain their health. With our proper diagnosis and one-on-one on ground counselling mechanism we were able to impact the lives of these millions of people. Families used to lose their family members each year to these diseases due to lack of awareness and disease management, now due to our services they come up with smiling faces thus touching lives, saving lives and changing lives. 
                </p>
            </div>
            </div>
        </div>
        </Styles>
    </div>
  )
}
}

export default Societalimpact;