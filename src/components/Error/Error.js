import React from 'react';
import Menubar from '../Header/Menubar';
import "./Error.css";
const Error = () => {
    return (
        <div className="error">
        <Menubar></Menubar>
        <h1 className="text mt-5">Sorry,Cant found error, 404 !!!</h1>
      </div>
    );
};

export default Error;