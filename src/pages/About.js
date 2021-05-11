import React from 'react';
import Nav from '../components/Nav';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Data from "../data/data.json";
import "../components/Header.css";


function About() {
    return (
        <div>
        
        <Header data={Data.about}/>
        


        <div class="container">
  <div class="row">
    <div class="col">
     
    </div>
    <div class="col">

    <img src="../img/logo.png"/>
    <p>{Data.about[1].paragraph}</p>
        <p>{Data.about[2].paragraph}</p>
    </div>
    <div class="col">
      
    </div>
  </div>
</div>
       
        </div>
    );
}

export default About;