import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import "./MenuBar.css";
const Menubar = () => {
    return (
        <div className="MenuBar-container">
        <div className="container">
          <div className="row">
            <div className="col-md-2">
              <div className="name">
                <h1 className='color'>#Hash.edu</h1>
              </div>
            </div>
            <div className="col-md-10">
              <div className="menu-container ">
                <ul className="d-flex align-items-end justify-content-end">
                   <Link  to="/home" className="menu"> 
                    <li >Home</li>
                   </Link> 
                   <Link to="/services" className="menu"> 
                    <li>Services</li>
                   </Link> 
                  <Link to="/about" className="menu"> 
                    <li>About us</li>
                  </Link>
                   <Link to="/login" className="menu"> 
                    <li >Login</li>
                   </Link> 
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Menubar;