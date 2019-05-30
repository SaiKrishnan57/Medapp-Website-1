import React, { Component } from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image} from 'react-bootstrap';
import styled from 'styled-components';
import dummywo from './images/dummy-women.jpg';
import niranjan from './images/niranjan-swamy-N.jpg';
import vinod from './images/vinod-singh.jpg';
import krishna from './images/krishna.jpg';
import data from './data.json';
import './imagestyles.css';

const Styles = styled.div`
  .jumbo {
    background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);  
    min-height: 700px;
    position: relative;
    z-index: -2;
  }
`;
export default class Members extends Component {
    state = {
        Member:[
            {id:0,Name:'Niranjan Swamy N',Info:data[0].info,pic:niranjan},
            {id:1,Name:'Dr. Vinod Singh',Info:data[1].info,pic:vinod},
            {id:2,Name:'Sinu George',Info:data[2].info ,pic:dummywo},
            {id:3,Name:'Krishna Raghavan',Info:data[3].info,pic:krishna}
        ]
    }
    render() {
        console.log(data);
        //console.log(this.props);
        const props = this.props.match.params.id;
        return (
            <div><Styles>
            <Jumbo fluid className="jumbo">
                <Container>
                <Row>
                    <Col sm={4} className="px-5 mt-5">
                        <div className="mt-5 img-hover-zoom" style={{backgroundColor:"white"}}>
                            <Image src={this.state.Member[props].pic} fluid className="profile" style={{borderRadius:'20px'}}/>
                        </div>    
                    </Col>
                    <Col sm={8} className="px-3">
                        <div className="mt-5">
                            <h3 className="display-4 font-weight-bold animated fadeIn">{this.state.Member[props].Name}</h3>
                             <p className="mt-2 animated fadeIn" style={{fontFamily:"'Rubik', sans-serif",lineHeight:'1.6em'}}>
                                {this.state.Member[props].Info}
                             </p>
                        </div>    
                    </Col>
                    </Row>                     
                </Container>
            </Jumbo>
            </Styles>
            </div>
        )
    }
}
