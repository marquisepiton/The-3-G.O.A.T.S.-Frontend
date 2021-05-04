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
      <Nav />
      <Header data={Data.home}/>
      {/* <a className="btn btn-primary" href="" role="button">
           See More 
          </a>  */}
      <Card data={Data.home}/>
      <Footer />
    </div>
  );
}

export default Home;
