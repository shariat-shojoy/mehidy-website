import React from 'react';
import Extra from '../Extra/Extra';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import MainService from '../MainService/MainService';

const Home = () => {
    return (
        <div>
             <Header></Header>
             <MainService></MainService>
             <Extra></Extra>
            <Footer></Footer> 
        </div>
    );
};

export default Home;