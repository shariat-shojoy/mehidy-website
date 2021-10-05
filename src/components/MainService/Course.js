import React from 'react';
import'./Course.css';

const Course = (props) => {
    
    return (
        <div className='card '>
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

export default Course;