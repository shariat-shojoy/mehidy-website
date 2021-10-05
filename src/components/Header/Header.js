import React from 'react';
import "./Header.css";
import Menubar from './Menubar';

const Header = () => {
    return (
        <div className="banner-container ">
        <div className="">
          <div className="row d-flex banner align-items-center justify-content-center">
            {/* menu bar  */}
           <Menubar></Menubar>
            <div className="col-md-6 p-5">
              <h1 className="title">
                {/* title  */}
               Learn everything esily!!!
              </h1>
              <p className="text-white text-center mt-3">
                {/* discription */}
                You will learn everything , what you want. You will find your very much needed course or classes here. So , lets start learning.We are always with you!!
              </p>
             
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </div>
    );
};

export default Header;