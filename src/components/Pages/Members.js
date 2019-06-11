import React, { Component } from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image} from 'react-bootstrap';
import styled from 'styled-components';
import niranjan from './images/niranjan-swamy-N.jpg';
import vinod from './images/vinod-singh.jpg';
import nabeel from './images/nabeel2.jpg';
import krishna from './images/krishna.jpg';
import sinu from './images/sinu.jpg';
import Nisar from './images/Nisar.jpg';
import data from './data.json';
import './imagestyles.css';
import MediaQuery from 'react-responsive';

const Styles = styled.div`
  .jumbo {
    background-image: linear-gradient(120deg, rgba(132,250,176,0.8), rgba(143,211,244,0.5));
    min-height: 700px;
    position: relative;
    z-index: -2;
  }
  h1,h5{
    font-family:'Quicksand', sans-serif;
  }
`;
export default class Members extends Component {
    state = {
        Member:[
            {id:0,Name:'Niranjan Swamy N',Designation:'Founder and CEO',Info:data[0].info,pic:niranjan},
            {id:1,Name:'Dr. Vinod Singh',Designation:'Chief Operating Officer',Info:data[1].info,pic:vinod},
            {id:2,Name:'Sinu George',Designation:'Nurse Trainer and Director',Info:data[2].info ,pic:sinu},
            {id:3,Name:'Krishna Raghavan',Designation:'Director',Info:data[3].info,pic:krishna},
            {id:4,Name:'Dr. Shiraz Nisar',Designation:'Chief Medical Officer',Info:data[4].info,pic:Nisar},
            {id:5,Name:'Nabeel Ahmed',Designation:'Chief Marketing Officer',Info:data[5].info,pic:nabeel}
        ]
    }
    render() {
        console.log(data);
        //console.log(this.props);
        const props = this.props.match.params.id;
        return (
            <div>
            <Styles>
            <Jumbo fluid className="jumbo">
                <Container className="rounded mt-5 contain">
                <Row>
                    <MediaQuery query="(max-device-width: 1224px)">
                    <Col sm={4} className="p-4">
                        <div className="mt-2 img-hover-zoom rounded-circle" style={{backgroundColor:"white"}}>
                            <Image src={this.state.Member[props].pic} fluid className="profile" style={{borderRadius:'20px'}}/>
                        </div>    
                    </Col>
                    <Col sm={8} className="d-flex flex-column justify-content-center">
                        <div className="membername py-2 rounded">
                            <h2 className=" text-white font-weight-bold animated fadeInLeft slow py-2 px-4">{this.state.Member[props].Name}</h2>
                            <h5 className="font-weight-bold text-white animated fadeInRight slower py-2 px-4">{this.state.Member[props].Designation}</h5>
                        </div>    
                    </Col>
                   </MediaQuery> 
                <MediaQuery query="(min-device-width: 1224px)">
                    <Col sm={4} className="p-4">
                        <div className="mt-2 img-hover-zoom rounded-circle" style={{backgroundColor:"white"}}>
                            <Image src={this.state.Member[props].pic} fluid className="profile" style={{borderRadius:'20px',height:'500px'}}/>
                        </div>    
                    </Col>
                    <Col sm={8} className="py-4 d-flex flex-column justify-content-center">
                        <div className="membername py-2 rounded">
                            <h1 className=" text-white font-weight-bold animated fadeInLeft slow py-2 px-4">{this.state.Member[props].Name}</h1>
                            <h5 className="font-weight-bold text-white animated fadeInRight slower py-2 px-4">{this.state.Member[props].Designation}</h5>
                        </div>    
                    </Col>
               </MediaQuery>     
                    </Row>
                    <Row>
                        <Col align="center" className="px-3 rounded">
                            <p className="mt-2 p-2 animated fadeIn font-weight-bold" style={{fontFamily:"'Rubik', sans-serif",lineHeight:'2em',fontSize:'18px'}}>
                                {this.state.Member[props].Info}
                            </p>
                        </Col>    
                    </Row>           
                </Container>
            </Jumbo>
            </Styles>
            </div>
        )
    }
}
