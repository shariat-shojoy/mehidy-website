import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './About.css'
// about us 
const About = () => {
    return (
        <div>
            <Header></Header>
            <div>
                <div className='company container'>
                <div className='discription'>
                    <h1>About #Hash.edu</h1>
                    <p>#Hash.edu is one educational website.Where Yoyu can Find Web Many Web Development Course With Your Favour. Large Selection. Always Sale. Cheap Prices. Full Offer. Save Online. Compare Online. Simple Search. The Best Price. Compare Simply.We Are Giving You Many Web Related Coursse AND content , So Lets Start With us.</p>
                </div>
                <div  className='image' ><img src="https://www.kindpng.com/picc/m/748-7485082_online-course-wordpress-theme-hd-png-download.png" alt="" /></div>
            </div>
                </div>
                <div className='container mb-5'>
                    <div className='center'>
                        {/* our constructor */}
                        <h1>Our instructor</h1>
                    </div>
                    <div>
                        <div>
                            <div className='instructor container'>
                            <div className='img'>
                                <img src="https://images.techopedia.com/images/uploads/web-developer.jpg" alt="" />
                            </div>
                                {/* no 1 */}
                            <div className='about'>
                                <h1>Jhon Doe</h1>
                                <h5>Web Developer</h5>
                               <p>Jhon Doe , one of the most experieced web developer in our institution, He is very qualified and experienced tutor.He has been teaching web developing for almost 10 year.He is the head of our web developing unit. start learning from him with us!!  </p>
                            </div>
                            </div>
                            <div className='instructor container'>
                           {/* no-2  */}
                            <div className='about'>
                                <h1>Phillips Samson</h1>
                                <h5>Graphics Designer</h5>
                                <p>Phillips Samson , one of the most experieced Graphics Designer in our institution, He is very qualified and experienced tutor.He has been teaching Graphics Designing for almost 10 year.He is the head of our Graphics Designing unit. start learning from him with us!!  </p>
                            </div>
                            <div className='img'>
                                <img src="https://indiweb.in/wp-content/uploads/2020/05/Developer.jpg" alt="" />
                            </div>
                            </div>
                            <div className='instructor container'>
                            <div className='img'>
                                <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/How-to-become-a-complete-Web-Development-Professional.jpg" alt="" />
                            </div>
                            {/* no-3  */}
                            <div className='about'>
                                <h1>Terry Evans</h1>
                                <h5>Social Media Marketer</h5>
                                <p>Terry Evans , one of the most experieced Social Media Marketer in our institution, He is very qualified and experienced tutor.He has been teaching Marketing for almost 9 year.He is the head of our Social Media Marketing Unit. start learning from him with us!!  </p>
                            </div>
                            </div>
                           
                            
                            
                        </div>
                    </div>
                </div>
            <Footer></Footer>
            
        </div>
    );
};

export default About;