import React, { Component } from 'react';
import Header from '../Common/Header';
import image from "../assets/img/header-bg.jpg";

// Reusable Components
import About from '../Common/About';
import Portfolio from '../Common/Portfolio';
import Services from '../Common/Services';
import Team from '../Common/Team';
class Home extends Component {
    render() {
        return (
            <>
                <Header
                    title="welcome To Our Studio!"
                    subtitle="IT's NICE TO MEET YOU"
                    buttonText="Tell me more"
                    link="/services"
                    showButton={true}
                    image={image}
                />
                <Services />
                <Portfolio />
                <About />
                <Team />
            </>
        );
    }
}
export default Home;