import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Data from "../data/data.json";

function Contact() {

    const links = Data.contact[2].social.map((data, index) => {
        return (

            <li key={index}>{data.link}</li>
          
        );
      });
  return (
    <div>
      <Nav />
      <Header data={Data.contact} />
      <img
        src={"./img/" + Data.contact[1].img}
        alt="..."
        height="500"
        width=""
        style={{marginBottom: 20, marginLeft: 20}}
      ></img>

      <ul>
         {links}
      </ul>

      

      <Footer />
    </div>
  );
}

export default Contact;
