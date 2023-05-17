import React from "react";

// creates the content to be displayed on the about "page"(component) is being rendered
function About() {
    return(
        <section>
            <div className="center" id="About">
                <h1 className="page-header">About</h1>
            </div>
                   <div className="center">
                <img src={require('../../assets/images/Headshot.jpg')} alt="Headshot" className="photo"></img>
            </div>
            <div>
                <p>
                    Hello and welcome to my portfolio! My name is Chris and I am full stack web developer based in southern California. Currently I am wrapping up earning my full stack ceritifacte from the University of California, Irvine. Over the last 6 months I have been honing my skills in both front and backend design. I have experience with a variety of technologies including Javascript, HTML, CSS, Express, Node, React, MySQL and noSQL. In Addition, I received my bachelors from the Tulane University in Music Science and Technology and have exntensive experience in DSP and using patchers such as Pure Data and MaxMSP. Before my transition to web development and coding I worked in the Dental Implant industry for 8 years. I have a number of hobbies which includes creating music as a drummer and with technology. I currently play in the band The Skull Collective.
                </p>
            </div>

        </section>
    )
}

export default About;