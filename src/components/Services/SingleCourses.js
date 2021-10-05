import React from 'react';
import './SibleCourses.css'

const SingleCourses = (props) => {
    return (
        // single card 
        <div className='card'>
        <div className='pic'>
            <img className='w-100 ' src={props.Course.img} alt="" />
        </div>
        <div>
            <h4 className='name'>{props.Course.name}</h4>
            <p className='name'>{props.Course.price}<span>$</span></p>
            </div>
            </div>
    );
};

export default SingleCourses;