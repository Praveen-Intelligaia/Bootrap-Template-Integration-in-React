import Home from './views/Home';
 import About from './views/About';
 import Contact from './views/Contact';
 import Details from './views/Courses-details';
 import Courses from './views/Courses'; 
 import Events from './views/Events';
 import Pricing from './views/Pricing';
 import Trainers from './views/Trainers';
 import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
 

import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
   

function App() {
  return ( 
        
            <Router>
          <Header/>
{/* <Link to ="/About">About</Link> */}
          <Switch>
            <Route exact Path ='/' component ={Home}/>
            <Route Path='/About'><About /></Route>
            <Route Path='/Contact' component ={Contact}/>
            <Route Path='/Courses-details' component ={Details}/>
            <Route Path='/Courses' component ={Courses}/>
            <Route Path='/Events' component ={Events}/>
            <Route Path='/Pricing' component  ={Pricing}/>
            <Route Path ='/trainers' component={Trainers}/>
          </Switch>
          
          <Footer/>
          </Router>
            
  
    
  );
}

export default App;
