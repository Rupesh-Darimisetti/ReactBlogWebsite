import React, { Component } from "react";
import img1 from '../assets/img/about/1.jpg';
import img2 from '../assets/img/about/2.jpg';
import img3 from '../assets/img/about/3.jpg';
import img4 from '../assets/img/about/4.jpg';
import AboutItem from "./AboutItem";
const aboutItems = [
    { image: img1, year: "2009-2011", subtitle: "Our Humble Beginnings", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!" },
    { direction: "inverted", image: img2, year: "March 2011", subtitle: "An Agency is Born", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!" },
    { image: img3, year: "December 2015", subtitle: "Transition to Full Service", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!" },
    { direction: "inverted", image: img4, year: "July 2020", subtitle: "Phase Two Expansion", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!" },
    // { direction: "image", image: "assets/img/about/5, year: "2009-2011", subtitle: "Our Humble Beginnings", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!" },
    // { direction: "inverted", image: "assets/img/about/6, year: "2009-2011", subtitle: "Our Humble Beginnings", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!" },

]
class About extends Component {
    render() {
        return (
            <div>

                <section className="page-section" id="about">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">About</h2>
                            <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                        </div>
                        <ul className="timeline">

                            {aboutItems.map((about, index) => {
                                return <AboutItem {...about} key={index} />
                            })}
                            <li className="timeline-inverted">
                                <div className="timeline-image">
                                    <h4>
                                        Be Part
                                        <br />
                                        Of Our
                                        <br />
                                        Story!
                                    </h4>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}
export default About;