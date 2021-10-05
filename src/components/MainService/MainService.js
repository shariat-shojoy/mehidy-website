import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Course from "./Course";
import './MainService.css'



const MainService = () => {
    // api from data.jason 
     const [courses,setCourse]=useState([])
    useEffect(()=>{
        fetch('./data.json')
        .then(res=>res.json())
        .then(data=>setCourse(data))
    },[])
    
    
    
    return (
        <div className='container'>
            <h1 className='text'>Our Best Services </h1>
            
            <div className='display'>
            <Row xs={1} md={2} className="">
                
                {
                   
                   courses.map(course=><Course Course={course}></Course>)
               } 
               </Row> 
            </div>
            
        </div>
    );
};

export default MainService;