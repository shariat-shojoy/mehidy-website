import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Services.css'
import SingleCourses from './SingleCourses';

const Services = () => {
    const [courses,setCourse]=useState([])
    useEffect(()=>{
        fetch('./allData.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    
    return (
        <div>
            <Header></Header>
            <div className='header'>
                <h1 className='h-text'>All of our best services!!</h1>
                <p>you will fulfill your dream, with us ,we are always with you!!!</p>
            </div>
        <div>
        <Row xs={1} md={2} className="">
        {
            courses.map(course=><SingleCourses Course={course}></SingleCourses>)
        }
        </Row>
        </div>
            <Footer></Footer>
        </div>
    );
};

export default Services;