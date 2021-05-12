import React from "react";
import Header from "../components/Header";
import Data from "../data/data.json";
import "./Contact.scss";

function Contact() {
  const links = Data.contact[2].social.map((data, index) => {
    return (
      <li key={index}>
        <a href={data.link}>{data.link}</a>
      </li>
    );
  });
  return (
  
  
  <>

      <Header data={Data.contact} />
    <div class="container">
  <div class="row">
    <div class="col">
      
    </div>
    <div class="col">
     <div className="center">
      <div className="text-center">
        <div className="container">
          <div className="card-contact" style={{ width: "18rem" }}>
            <img
              src={"./img/" + Data.contact[1].img}
              className="card-img-top"
              alt="..."
            ></img>
            <div className="card-body">
              <h5 className="card-title">Marquise Piton</h5>
              <p className="card-text">Give me data, and I'll tell a story.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                {" "}
                <div className="col-md-4 col-sm-6 col-xs-12">
                  <ul className="social-icons">
                    <li>
                      <a
                        className="github"
                        href="https://github.com/marquisepiton"
                      >Github</a>
                      
                    </li>
                    <li>
                      <a
                        className="twitter"
                        href="https://twitter.com/MarquisePiton"
                      >
                       Twitter
                      </a>
                    </li>
                    <li>
                      <a
                        className="kaggle"
                        href="https://www.kaggle.com/marquisepiton"
                      >Kaggle</a>
                    </li>
                    <li>
                      <a
                        className="linkedin"
                        href="https://www.linkedin.com/in/marquisepiton/"
                      >
                        LinkedIn
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-group-item">
                Email: pitonmarquise@gmail.com
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    <div class="col">
     
    </div>
  </div>
</div>
</>
    
  );
}

export default Contact;
