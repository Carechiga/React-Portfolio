import React from "react";
import Application from "../Application"

function Projects() {
    //this is the array of my featured applications 
    const applicationArray =[
        {
            name: "Project Perfect",
            image: "Project-Perfect.png",
            description: "Project Perfect is a career help application. Focused on Community interaction rather than job posting, this application is designed to have users post Resumes, Cvs, cover letters etc and get community feedback",
            repo: "https://github.com/zachcygan/gpteam",
            link: "https://gpteam.herokuapp.com/",
        },
        {
            name: "Just Another Text Editor",
            image: "JATE.png",
            description: "Just another text editor is a simple text editor application. However, this application demonstrates the ability to take the apllication offline! Just click to install and you can use the app without connecting to the internet",
            repo: "https://github.com/Carechiga/PWA-Text-Editor",
            link: "https://limitless-basin-31319.herokuapp.com/",
        },
        {
            name: "Social Network API",
            image: "Social-Network-API.png",
            description: "This is a backend application demonstrating the CRUD operations for a noSQL database, it features mongooseDB",
            repo: "https://github.com/Carechiga/Social-Network-API",
            link: "https://www.youtube.com/watch?v=F25NKaXeTxs",
        },
        {
            name: "Weather Dashboard",
            image: "Weather-Dashboard.png",
            description: "The Weather dashboard is an a weather application. It gives the user a 5 day forecast and keeps trak of previous queried locations!",
            repo: "https://github.com/Carechiga/Weather-Dashboard",
            link: "https://carechiga.github.io/Weather-Dashboard/",
        },
        {
            name: "Easy Recipe App",
            image: "Easy-Recipe.png",
            description: "Tired of having to trudge through 20 paragraphs of  meaningless drivel to get to your recipes and cooking instructions? With Easy Recipe just choose a meal and get right to cooking! Nutritional value also included for those who are trying to stay healthy!",
            repo: "https://github.com/Carechiga/Easy-",
            link: "https://carechiga.github.io/Easy-Recipe-App/",
        },
        {
            name: "Secrue Password Generator",
            image: "Password-Generator.png",
            description: "Need to generate a secrue passowrd? Look no further this app has you covered, just enter your criteria and there you go!",
            repo: "https://github.com/Carechiga/Week-Three-Challenge",
            link: "https://carechiga.github.io/Week-Three-Challenge/",
        },

    ]
    return(
        <section>
            <div className="center" id="Projects">
                <h1 className="page-header">My Projects</h1>
            </div>
            <div className="center">
                <ul className="flex-row mobile-row">
					<li className="padding">
						<Application projects={applicationArray[0]}></Application>
					</li>
					<li className="padding">
						<Application projects={applicationArray[1]}></Application>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Application projects={applicationArray[2]}></Application>
					</li>
					<li className="padding">
						<Application projects={applicationArray[3]}></Application>
					</li>
				</ul>
				<ul className="flex-row mobile-row">
					<li className="padding">
						<Application projects={applicationArray[4]}></Application>
					</li>
					<li className="padding">
						<Application projects={applicationArray[5]}></Application>
					</li>
				</ul>                
            </div>

        </section>
    )
}

export default Projects;