import React from 'react';
import Header from "../components/Header";
import Data from "../data/data.json";
import "../components/Header.css";
import "./About.scss";


function About() {
    return (
        <div>
        
        <Header data={Data.about}/>
        


        <div class="container">
  <div class="row">
    <div class="col">
     
    </div>
    <div class="col">

  <img className="logo" src="../img/logo.png" />
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