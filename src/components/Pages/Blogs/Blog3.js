import React, { Component } from 'react';
import { Image,Button,Modal} from 'react-bootstrap';
import blog3 from '../images/medapp1.png';

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
                    <Image src={blog3} className="animated bounceIn" fluid/> 
                        <h5 className="mt-3">KNOW YOUR HIV STATUS!</h5>
                        <p className="mt-3" style={styletext}>ABSTRACT: On the eve of World AIDS Day, it is important for each and every citizen to become aware of this chronic vibe. This problem of HIV and AIDS can be identified or cured only if we are aware of the problem. Therefore, this article deals with basic information of AIDS today, India’s stance and […]</p>             
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
            <p>On the eve of World AIDS Day, it is important for each and every citizen to become aware of this chronic vibe. This problem of HIV and AIDS can be identified or cured only if we are aware of the problem. Therefore, this article deals with basic information of AIDS today, India’s stance and future programs.</p>
            <h4>Introduction:</h4>
            <p>With a hooping population of 1.32 billion i.e. approximately 14% of the world population; what we are facing as a race in whole is nothing but unawareness. The National AIDS Control Organisation (NACO), which was established in 1992 has come to our rescue. This 25-year-old organisation which is an inseparable part of India’s Ministry of Health and Family Welfare. NACO operates its governance via a perfectly decentralised planning system all over the country, by dividing the nation into 35 HIV/AIDS prevention and control societies.</p>
            <p>Another reason backing up this issue is the lack of education. It is due to this reason that most of the population belonging to rural population is still dependent upon unprofessional help (such as mid-wives) and continue to practice age old superstitions. As a result of this the population is facing a plethora of disorders and diseases which are beyond repair by the time they reach for medical help.</p>
            <p>Acquired Immune Deficiency Syndrome or AIDS is basically a defined set of symptoms or a syndrome as a reaction to the virus HIV. This virus is responsible for destroying CD4, as a follow up to this chronic activity this virus replicates itself with the white blood cells in the body of the infected person and destroys its immune system. AIDS down the years has been an area of concern for India. While it is responsible for the epidemic by affecting 2.1 million population, it also ranks third largest in the HIV epidemic in the world. For about 0.2% of the adult population aged between (15-49). The roots of this epidemic lie much in the fact that the affected population which also comprises of sex workers and homosexuals (or males having a sexual relationship with other males).</p>
            <h4>INDIA’S STANCE ON THE HIV ISSUE:</h4>
            <p>If we compare India’s status in the area of HIV and its control in 2017 to that of 2010 HIV scourge is backing off. The development of new diseases declined by 27% and AIDS-related deaths more than divided, falling by 56%. Notwithstanding, in 2017, new contaminations increased to 88,000 from 80,000 and AIDS-related deaths increased to 69,000 from 62,000.3 UNAIDS (2017) ‘UNAIDS information 2017’. In the same year (2017), 79% of individuals living with HIV knew about their status, of whom 56% were on antiretroviral treatment (ART). The extent of individuals on ART who are virally smothered isn’t accounted for. The HIV epidemic in India is driven by sexual transmission, which represented 86% of new diseases in 2017/2018.The three states with the most astounding HIV predominance, Manipur, Mizoram and Nagaland are in the east of the nation. The epidemic is concentrated among key influenced populaces, anyway the vulnerabilities that drive the epidemic change in various parts of the nation. A key driver is unprotected sex among key populaces and their customers, accomplices and life partners. In any case, infusing drug use in the north and upper east of the nation is additionally driving HIV commonness up.</p>
            <p>In 2017, 88,000 individuals in India were recently tainted with HIV. The greater part were men, who represented 50,000 new contaminations. There were 34,000 new diseases among ladies and around 3,700 among youngsters (matured 0-14 years). NACO is the body in charge of planning strategy and actualizing programs for the anticipation and control of the HIV epidemic in India. The latest program, NACP-IV (2012-2017, reached out to 2018), intends to lessen yearly new HIV diseases by half through the arrangement of far reaching HIV treatment, training, care and support for the all-inclusive community and expand on focused intercessions for key influenced gatherings and those at high danger of HIV transmission. A key segment of the NACP-IV is the counteractive action of new HIV contaminations by achieving 80% of key influenced populaces with focused intercessions. Directed mediations are actualized on the commence that counteractive action of HIV transmission among key influenced populaces will likewise bring down HIV transmission among the all-inclusive community. For instance, focusing on intercessions towards female sex laborers and their male customers will help lessen the danger of customers transmitting HIV to their customary sexual accomplices.</p>
            <h4>WHERE WILL INDIA BE IN THE NEXT PERIOD:</h4>
              <p>Over the previous decade, India has gained huge ground in handling its HIV epidemic, particularly in examination with different nations in the district. A noteworthy purpose behind the nation’s prosperity is the supported responsibility of the Indian Government through its National AIDS Control Program, which has been especially successful at focusing on high-chance gatherings, for example, men who engage in sexual relations with men, sex laborers and individuals who infuse drugs. While ART is free and take-up is rising, helped by the selection of ‘test and treat’, numerous individuals living with HIV still experience issues getting to administrations, which means the quick pace at which inclusion is being scaled up must proceed. In any case, shame and segregation stay noteworthy boundaries anticipating key influenced populaces and those at high danger of HIV transmission from getting to treatment and fundamental medicinal services administrations. A proceeded with spotlight on these and different hindrances is expected to end the stressing ascend in new diseases and AIDS-related deaths seen in 2017 (as contrasted and 2016 dimensions). Bringing down diseases among high-chance gatherings is one of NACO’s greatest examples of overcoming adversity, albeit proceeded viable aversion programs must stay set up, especially for individuals who infuse drugs and transgender individuals, the two in danger bunches with the most noteworthy HIV pervasiveness of every key populace. New pockets of contamination have risen in regions including Gujarat, Bihar, Delhi, Chhattisgarh, Rajasthan, Odisha, and Jharkhand that require close observing and custom-made counteractive action and treatment programmes.94 Equally essential is to all the more likely comprehend the transmission elements between states caused by relocation, which is progressively being perceived as a key driver of new HIV diseases in India.
                Enhancing information gathering and investigation is vital to recognizing these pockets of new diseases and understanding examples of defenselessness, making this field vital to the accomplishment of India’s HIV reaction. A key segment of the NACP-IV is the avoidance of new HIV diseases by achieving 80% of key influenced populaces with focused intercessions. Directed mediations are executed on the commence that avoidance of HIV transmission among key influenced populaces will likewise bring down HIV transmission among the all-inclusive community. For instance, focusing on mediations towards female sex specialists and their male customers will help lessen the danger of customers transmitting HIV to their normal sexual accomplices.</p>
            <h4>Conclusion:</h4>
            <p>India is vast and the status of framework changes generally the nation over. The task of the [drug procurement] framework, especially in remote areas, should be reinforced. For instance, moderate web rates can truly disturb the framework. Late instalments to sedate organizations have likewise prompted postponements in the conveyance of drugs. Last but not least as a responsible citizen one should check our HIV status. HIV tests are completely free of cost and well guided by counsellors in the nearest Government hospitals and “KNOW YOUR HIV STATUS!”.</p>  
          </Modal.Body>
        </Modal>
            </div>
        )
    }
}
