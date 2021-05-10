import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Data from "../data/data.json";
import "./Contact.scss"

function Contact() {

    const links = Data.contact[2].social.map((data, index) => {
        return (
            <li key={index}><a href={data.link}>{data.link}</a></li>
        );
      });
  return (
    <div>
    
      <Header data={Data.contact} />
      <div class="container">
  <div class="row">
    <div class="col">
      
    </div>
    <div class="col">
    <div class="card">
  <img src={"./img/" + Data.contact[1].img} class="card-img-top" alt="..."></img>
  <div class="card-body">
    <h5 class="card-title">Marquise Piton</h5>
    <p class="card-text">Give me data, and I'll tell a story.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item"> <div class="col-md-4 col-sm-6 col-xs-12">
            <ul class="social-icons">
              <li><a class="facebook" href="#"><i class="fa fa-facebook"></i></a></li>
              <li><a class="twitter" href="#"><i class="fa fa-twitter"></i></a></li>
              <li><a class="dribbble" href="#"><i class="fa fa-dribbble"></i></a></li>
              <li><a class="linkedin" href="#"><i class="fa fa-linkedin"></i></a></li>   
            </ul>
          </div></li>
    <li class="list-group-item">A second item</li>
    
  </ul>
  
</div>
    </div>
    <div class="col">
     
    </div>
  </div>
</div>





      
     
    </div>
  );
}

export default Contact;
