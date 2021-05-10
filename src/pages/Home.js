import React from "react";
import Nav from "../components/Nav";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Data from "../data/data.json";
import Card from "../components/Card";


// Home Page 
function Home() {
  return (
    <div>
      
      <Header data={Data.home}/>
      <Card data={Data.home}/>
     
    </div>
  );
}

export default Home;
