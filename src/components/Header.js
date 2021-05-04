import React from "react";
import {useLocation} from "react-router-dom";
import "./Header.css"

function Header(props) {
    const location = useLocation();
  return (
    <div className="container">
      <header className={location.pathname.substring(1)}>
        <div className="p-5 text-center">
          <h1 data={props.data} className="mb-3">{props.data[0].header}</h1>
          <h4 className="mb-3">{props.data[0].subheader}</h4>
        </div>
      </header>
    </div> 
  );
}

export default Header;
