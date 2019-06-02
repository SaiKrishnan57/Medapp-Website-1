import React, { Component } from 'react';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navigationbar from './components/layout/Navbar';
import Home from './components/Pages/Home';
import Services from './components/Pages/Services';
import Aboutus from './components/Pages/Aboutus';
import Articles from './components/Pages/Articles';
import Ourblogs from './components/Pages/Ourblogs';
import Contacts from './components/Pages/Contacts';
import Presence from './components/Pages/Presence';
import Ourteam from './components/Pages/Ourteam';
import Footer from './components/layout/Footer';
import Members from './components/Pages/Members';
import NewsandAwards from './components/Pages/Newsandawards';

class App extends Component {
  render(){
   return (
      <div className="App">
        <BrowserRouter>
          <Navigationbar/>    
            <Switch>
            <Route exact path="/" component = {Home}/>
            <Route exact path="/services" component = {Services}/>
            <Route exact path="/Aboutus" component = {Aboutus}/>
            <Route exact path="/Articles" component = {Articles}/>
            <Route exact path="/Contacts" component = {Contacts}/>
            <Route exact path="/Presence" component = {Presence}/>
            <Route exact path="/Ourteam" component = {Ourteam}/>
            <Route exact path="/Ourblogs" component = {Ourblogs}/>
            <Route exact path="/NewsandAwards" component = {NewsandAwards}/>
            <Route exact path="/Ourteam/Members/:id" component = {Members}/>
            </Switch>
          <Footer/> 
        </BrowserRouter>  
      </div>
    );
  }
}

export default App;
