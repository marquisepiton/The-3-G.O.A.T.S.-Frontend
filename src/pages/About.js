import React from 'react';
import Nav from '../components/Nav';
import Header from "../components/Header";
import Footer from "../components/Footer";
import Data from "../data/data.json";
import "../components/Header.css";


function About() {
    return (
        <div>
        <Nav/>
        <Header data={Data.about}/>
        <p>{Data.about[1].paragraph}</p>
        <p>{Data.about[2].paragraph}</p>
        <img src={Data.about[3].images[0].link} class="rounded float-start" alt="..."></img>
        <img src={Data.about[3].images[1].link} class="rounded mx-auto d-block" alt="..."></img>
        <img src={Data.about[3].images[2].link}class="rounded float-end" alt="..."></img>
        <Footer/>
        </div>
    );
}

export default About;