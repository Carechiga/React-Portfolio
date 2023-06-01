import React from "react";
 //in order to enable download functionality need to create an anchor tag with href and then use "download"
function Resume(){
    return(
        <section>
            <div className="center" id="Resume">
                <h1 className="page-header">Resume</h1>
            </div>
            <div className="center">
                <a href={require("../../assets/files/Arechiga-Resume-June23.pdf")} download>
                    <button>Download My Resume</button>
                </a>
            </div>
            <br></br>
            <div className="center">
                <div>
                <h1 className="center">My Skills</h1>
                <h3 className="center" style={{paddingTop: "30px"}}>Front End Skills</h3>
                <ol>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Responsive UX/UI</li>
                    <li>React</li>
                    <li>Henadlebars</li>
                    <li>Jquery</li>
                </ol>
                <h2 className="center" style={{paddingTop: "30px"}}>Backend Skills</h2>
                <ol>
                    <li>Express</li>
                    <li>Node</li>
                    <li>MySQL</li>
                    <li>noSQL</li>
                   
                </ol>
                <h2 className="center" style={{paddingTop: "30px"}}>Other Skills</h2>
                <ol>
                    <li>Amazon S3 Buckets</li>
                    <li>PureData</li>
                                                      
                </ol>
                </div>
            </div>

        </section>
    )
}

export default Resume;