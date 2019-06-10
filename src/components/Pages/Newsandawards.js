import React from 'react'
import { Jumbotron as Jumbo, Container,Row,Col,Image } from 'react-bootstrap';
import styled from 'styled-components';
//import bgimg from './images/newss.jpg';
import Techphlie from './images/Techphlie.jpg';
import marketscreener from './images/marketscreener.jpg';
import msn from './images/msn.jpg';
import mena from './images/mena.jpg';
import tribune from './images/tribune.jpg';
import aninews from './images/aninews.jpg';
import karnataka from './images/karnataka.jpg';
import business from './images/business.jpg';
import thar from './images/thar.jpg';
import north from './images/north.jpg';
import news from './images/news.jpg';
import net from './images/net.png';
import './imagestyles.css';

const Styles = styled.div`
  .jumbo {background-image: linear-gradient(to top, #09203f 0%, #537895 100%);
    color: #efefef;
    height: 450px;
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

const NewsandAwards = () => {
  return (
    <div>
        <Styles>
            <Jumbo fluid className="jumbo">
                <div className="overlay"></div>
                <Container className="p-4" style={{marginTop:'5%'}}>
                <Row>
                    <Col sm={6} className="mt-3 p-4">
                      <h1 className="display-4 font-weight-bold animated bounceInLeft slow">News And Awards</h1>
                    </Col>  
                </Row>
                </Container>
            </Jumbo>
            <Container className="p-4">
                <h1 className=" mb-1 lead text-uppercase text-white d-flex p-3 rounded" style={{fontFamily: "'Quicksand', sans-serif",background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898", backgroundBlendMode: 'multiply,multiply'}}>
                    News & Updates:
                </h1>
                <hr className="mb-5"/>
                <Row align="center">
                    <Col sm={2}>
                        <a href='https://www.aninews.in/news/business/medapp-a-game-changer-of-the-healthcare-ecosystem-in-india20190417193514/'>
                            <Image src={aninews} style={{height:'100px'}}/>
                        </a>
                    </Col>
                    <Col sm={2}><a href='https://www.business-standard.com/article/news-ani/medapp-a-game-changer-of-the-healthcare-ecosystem-in-india-119041700997_1.html'><Image src='https://www.beeingsocial.com/wp-content/uploads/2017/12/business-standard-logo.png' style={{height:'100px',width:'200px'}}/></a></Col>
                    <Col sm={2}><a href='https://in.news.yahoo.com/medapp-game-changer-healthcare-ecosystem-india-140514207.html'><Image src='https://www.selectcitywalk.com/wp-content/uploads/2018/08/Yahoo-News-Logo-1.jpg' style={{height:'100px'}}/></a></Col>
                    <Col sm={2}><a href='https://www.indiainfoline.com/newsvoir?c_article_id=11699&c_author_id=9463&originurl=https%3A%2F%2Fwww.indiainfoline.com%2Fnewsvoir'><Image src='https://www.et-gbs.com/wp-content/uploads/2018/01/iifl-logo.jpg' style={{height:'100px'}}/></a></Col>
                    <Col sm={2}><a href='https://www.msn.com/en-in/?ref-st=%2fen-in%2fnews%2fother%2fmedapp-a-game-changer-of-the-healthcare-ecosystem-in-india%2far-BBW2cZ4'><Image src={msn} style={{height:'100px'}}/></a></Col>
                    <Col sm={2}><a href='https://www.covaipost.com/medapp-a-game-changer-of-the-healthcare-ecosystem-in-india/'><Image src='https://www.covaipost.com/wp-content/themes/newcovaipost/images/logo.png' style={{height:'100px',width:'200px'}}/></a></Col>
                </Row>
                </Container>
                <Container className="p-4">
                    <Row align="center">
                        <Col sm={2}><a href="https://www.bignewsnetwork.com/news/260537635/medapp---a-game-changer-of-the-healthcare-ecosystem-in-india"><Image src="https://static.bignewsnetwork.com/bnn2/images/big-news-network.png" style={{height:'100px',width:'160px'}}/></a></Col>
                        <Col sm={2} ><a href="https://www.marketscreener.com/MEDAPP-SA-38028268/news/Medapp-a-game-changer-of-the-healthcare-ecosystem-in-India-28440866/"><Image  className="mt-2" src={marketscreener} style={{height:'150px',width:'200px'}}/></a></Col> 
                        <Col sm={2} className="mb-2"><a href="https://m.dailyhunt.in/news/india/english/newsvoir-epaper-newsvoir/medapp+a+game+changer+of+the+healthcare+ecosystem+in+india-newsid-113993051"><Image src="https://store-images.s-microsoft.com/image/apps.946.9007199266244278.b038e4ac-882c-489a-91de-8967da80a093.4f59cf37-e7fd-41fe-8143-c8526fe7d0a2" style={{height:'150px',width:'200px'}}/></a></Col> 
                        <Col sm={2}><a href="https://www.htsyndication.com/newsvoir/article/medapp---a-game-changer-of-the-healthcare-ecosystem-in-india/34171588"><Image src="https://www.htsyndication.com/themes/frontend/img/logo-transparent.png?ver=1.0" style={{height:'100px',width:'150px'}}/></a></Col> 
                        <Col sm={2}><a href="https://www.devdiscourse.com/article/business/483544-medapp-all-set-to-revolutionise-way-people-manage-health-on-day-to-day-basis"><Image src="https://www.devdiscourse.com/AdminFiles/Logo/devdiscourse_logo.svg" style={{height:'100px',width:'150px'}}/></a></Col> 
                        <Col sm={2}><a href="https://www.indiasnews.net/news/260537635/medapp---a-game-changer-of-the-healthcare-ecosystem-in-india"><Image src="https://static.midwestradionetwork.com/nn_logos/india's-news.png" style={{height:'100px',width:'150px'}}/></a></Col>     
                    </Row>
                </Container>
               <Container className="p-4">
                    <Row align="center">
                        <Col sm={2}><a href="https://ohio.statenews.net/news/260537635/medapp---a-game-changer-of-the-healthcare-ecosystem-in-india"><Image src="https://static.midwestradionetwork.com/nn_logos/ohio-state-news.png" style={{height:'100px',width:'200px'}}/></a></Col>
                        <Col sm={2}><a href="http://www.punjabtribune.com/news/89379-medapp-a-game-changer-of-the-healthcare-ecosystem-in-india.aspx"><Image className="ml-4 mt-2" src={tribune} style={{height:'100px',width:'200px',backgroundColor:'black'}}/></a></Col>
                        <Col sm={2}><a href="https://menafn.com/1098403365/MedappA-Game-Changer-of-the-Healthcare-Ecosystem-in-India"><Image className="ml-3 mt-2" src={mena} style={{height:'75px',width:'150px'}}/></a></Col>
                        <Col sm={2}><a href="http://b-live.in/newsvoir-feeds/?c_article_id=11699&c_author_id=9463"><Image className="ml-4 mt-2" src="http://b-live.in/wp-content/uploads/2018/05/Blive-Logo-1.png" style={{height:'100px',width:'180px'}}/></a></Col>
                        <Col sm={2}><a href="http://chennaiyil.com/newsvoir?c_article_id=11699&c_author_id=9463&originurl=http%3A%2F%2Fchennaiyil.com%2Fnewsvoir"><Image src="http://www.twenty19.com/Data/internship/large/logo_503147.jpg" style={{height:'100px'}}/></a></Col>
                        <Col sm={2}><a href="https://tennews.in/corporate-news-2/?c_article_id=11699&c_author_id=9463&originurl=http%3A%2F%2Ftennews.in%2Fen%2Fnewsvoir%2F%22"><Image className="ml-4 mt-2" src="https://tennews.in/wp-content/uploads/2019/03/TenNews-site-logo.png" style={{height:'100px',width:'200px'}}/></a></Col>
                    </Row>   
                </Container>
                <Container className="p-4">
                    <Row align="center" >
                        <Col sm={2}><a href="http://www.newscontrolroom.com/newsvoir/?c_article_id=11699&c_author_id=9463&originurl=http%3A%2F%2Fwww.newscontrolroom.com%2Fnewsvoir"><Image className="ml-3" src="http://www.newscontrolroom.com/wp-content/uploads/2017/07/logo.png" style={{height:'100px'}}/></a></Col>
                        <Col sm={2} className="d-flex flex-column justify-content-center"><a href="https://news.webindia123.com/news/newsvoir.asp?c_article_id=11699&c_author_id=9463&originurl=https://news.webindia123.com/news/newsvoir.asp"><Image className="ml-3 mt-2" src="https://www.webindia123.com/shared_files/ssl/images/logo.png" style={{height:'25px',width:'150px'}}/></a></Col> 
                        <Col sm={2} className="d-flex flex-column justify-content-center"><a href="https://ibtn9.com/newsvoir/?c_article_id=11699&c_author_id=9463&originurl=https%3A%2F%2Fibtn9.com%2Fnewsvoir%2F"><Image className="ml-3 mt-2" src="https://pbs.twimg.com/profile_images/631494681491144704/gigZhxz9_400x400.jpg" style={{height:'75px',width:'150px'}}/></a></Col> 
                        <Col sm={2} className="d-flex flex-column justify-content-center"><a href="https://news.karnatakaonline.in/press-releases/medapp-a-game-changer-of-the-healthcare-ecosystem-in-india-73068"><Image className="mt-2" src={karnataka} style={{height:'60px',width:'150px'}}/></a></Col> 
                        <Col sm={2} className="d-flex flex-column justify-content-center"><a href="https://www.newdelhitimes.com/press-release-section/?c_article_id=11699&c_author_id=9463"><Image className="ml-1 mt-2" src="https://i1.wp.com/www.newdelhitimes.com/wp-content/uploads/2017/10/cropped-ndt_logo-HD-1.png?zoom=1.25&fit=400%2C48&ssl=1" style={{height:'60px',width:'180px'}}/></a></Col> 
                        <Col sm={2} className="d-flex flex-column justify-content-center"><a href="http://www.techphlie.com/p/news-voir.html?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-2" src={Techphlie} style={{height:'60px',width:'150px'}}/></a></Col> 
                    </Row>    
                </Container>                 
                <Container className="p-4">
                    <Row align="center">
                        <Col sm={2}><a href="http://www.abhitaknews.com/english/news/newsvoir.aspx?c_article_id=11699&c_author_id=9463&originurl=http%3A%2F%2Fwww.abhitaknews.com%2Fenglish%2Fnews%2Fnewsvoir.aspx"><Image className="ml-3 mt-2" src="https://prnews.io/content/platform/755/logo.jpeg?1538494748" style={{height:'60px',width:'150px'}}/></a></Col>
                        <Col sm={2} className="d-flex flex-column justify-content-center"><a href="http://www.bizwireexpress.com/showstoryNewsVoir.php?storyid=8329"><Image className="ml-3 mt-2" src="http://www.bizwireexpress.com/images/BizWire-Express-logo-375x50.jpg" style={{height:'60px',width:'150px'}}/></a></Col> 
                        <Col sm={2} className="d-flex flex-column justify-content-center"><a href="http://www.broadcast-technology.com/newsvoir?c_article_id=11699&c_author_id=9463"><Image className=" mt-2" src="http://www.broadcast-technology.com/stylesheet/images/other/logo.jpg" style={{height:'60px',width:'150px'}}/></a></Col> 
                        <Col sm={2} className="d-flex flex-column justify-content-center"><a href="http://businessnewsthisweek.com/newsvoir/?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-2" src={business} style={{height:'50px',width:'150px'}}/></a></Col> 
                        <Col sm={2} className="d-flex flex-column justify-content-center"><a href="http://businessfortnight.com/newsvoir/?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-2" src="http://businessfortnight.com/wp-content/uploads/2018/01/cropped-cropped-New-Logo-copy-1-1.png" style={{height:'60px',width:'150px'}}/></a></Col> 
                        <Col sm={2} className="d-flex flex-column justify-content-center"><a href="http://businessviews.in/news-voir-press-release-news-2/?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-2" src="http://businessviews.in/wp-content/uploads/2018/05/businessviews-logo-1.jpg" style={{height:'60px',width:'150px'}}/></a></Col> 
                    </Row>    
                </Container>
                <Container className="p-4">
                    <Row align="center">
                        <Col sm={2}><a href="http://corporateethos.com/newsvoir/?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-2" src="http://corporateethos.com/wp-content/themes/corporateethos/images/logo.jpg" style={{height:'60px',width:'150px'}}/></a></Col>
                        <Col sm={2}><a href="http://www.estrade.in/news/newsvoir/?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-2" src="http://www.estrade.in/wp-content/uploads/server/Estrade_Logo.png" style={{height:'60px',width:'150px'}}/></a></Col>
                        <Col sm={2}><a href="http://www.theluxurychronicle.com/newsvoir?c_article_id=11699&c_author_id=9463&originurl=http%3A%2F%2Fwww.theluxurychronicle.com%2Fnewsvoir"><Image className="ml-3 mt-2" src="http://www.theluxurychronicle.com/wp-content/uploads/2015/10/cropped-logo2.png" style={{height:'60px',width:'150px'}}/></a></Col>
                        <Col sm={2}><a href="http://thar-savera.blogspot.com/?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-2" src={thar} style={{height:'70px',width:'150px'}}/></a></Col>
                        <Col sm={2}><a href="http://netindian.in/corporatewire?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-2" src={net} style={{height:'60px',width:'150px',color:'black'}}/></a></Col>
                        <Col sm={2}><a href="http://firstreport.in/newsvoir/?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-2" src="http://firstreport.in/wp-content/uploads/2014/12/First-report.png" style={{height:'60px',width:'150px'}}/></a></Col>
                    </Row>
                </Container>
                <Container className="p-4">
                    <Row align="center">
                        <Col sm={2}><a href="https://www.onenewspage.com/n/Press+Releases/1zkhgt31dm/Medapp-Game-Changer-of-the-Healthcare.htm"><Image className="ml-3 mt-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdjscS2KJpIA6RjZ0VgPIyketoiRnDTF8NvLIlY-hPnn8nlkz8g" style={{width:'150px',height:'60px'}}/></a></Col>
                        <Col sm={2}><a href="https://www.forevernews.in/newsvoir?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-3" src="https://www.forevernews.in/wp-content/uploads/2019/04/fen-logo.jpg" style={{width:'150px',height:'60px'}}/></a></Col>
                        <Col sm={2}><a href="https://www.newsr.in/n/Press+Releases/1zkhgt31dm/Medapp-Game-Changer-of-the-Healthcare.htm"><Image className="ml-3 mt-3" src="https://www.newsr.in/images/newsrlogo120.png" style={{width:'150px',height:'60px',backgroundColor:'Black'}}/></a></Col>
                        <Col sm={2}><a href="https://www.thehansindia.com/newsvoir?c_article_id=11699&c_author_id=9463&originurl=http%3A%2F%2Fwww.thehansindia.com%2Fnewsvoir"><Image className="ml-3 mt-2" src="https://www.thehansindia.com/images/logo.png" style={{width:'150px',height:'60px'}}/></a></Col>
                        <Col sm={2}><a href="https://varindia.com/news/1529798?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-3" src="https://varindia.com/new/img/logo3.png" style={{width:'150px',height:'60px'}}/></a></Col>
                        <Col sm={2}><a href="http://www.5dariyanews.com/Latest-Headlines-Newsvoir.aspx?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-3" src="http://www.5dariyanews.com/images/5-dariya-news-logo.jpg" style={{width:'50px',height:'80px'}}/></a></Col>
                    </Row>   
                </Container>             
                <Container className="p-4">
                    <Row align="center">
                        <Col sm={2}><a href="https://uttarakhandnewsnetwork.com/newsvoir/?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-3" src="https://uttarakhandnewsnetwork.com/wp-content/uploads/2018/11/uttarakhand-news-network-2.png" style={{width:'320px',height:'60px'}}/></a></Col>
                        <Col sm={2}><a href="http://eodishasamachar.com/en/newsvoir/?c_article_id=11699&c_author_id=9463&originurl=http%3A%2F%2Feodishasamachar.com%2Fen%2Fnewsvoir%2F"><Image className="ml-3 mt-3" src="http://eodishasamachar.com/en/wp-content/uploads/2017/06/engsite.gif" style={{width:'150px',height:'60px'}}/></a></Col>
                        <Col sm={2}><a href="http://www.northindiakaleidoscope.com/newsvoir-business-news/?c_article_id=11699&c_author_id=9463"><Image className="ml-3 mt-3" src={north} style={{width:'150px',height:'60px'}}/></a></Col>
                    </Row>   
                </Container>
                <Container className="p-4">
                    <h1 className="mb-1 lead text-uppercase text-white d-flex p-3 rounded" style={{fontSize:'25px',fontFamily: "'Quicksand', sans-serif",background: "linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898", backgroundBlendMode: 'multiply,multiply'}}>
                        Awards & Accolades:
                    </h1>
                    <hr className="mb-5"/>
                    <Row className="d-flex justify-content-center">
                        <Col sm={6} >
                            <p></p>
                        </Col>
                        <Col sm={3} >
                            <Image className="my-2" src={news} fluid/>
                            <p style={{fontFamily: "'Quicksand', sans-serif",fontSize:'25px'}}>Asia Pacific achievers award</p>
                            <hr/>
                        </Col>
                    </Row>   
                </Container>
                         
        </Styles>
    </div>
  )
}

export default NewsandAwards;