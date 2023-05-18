import React, { useState } from "react";
import Card from "react-bootstrap/Card";

// this component creates a card using bootstrap for each application that will be integrated onto my Projects componenet page

function Application(props) {
    //in the Projects component an array of objects of my applicatinos will be passed in and these variables will assign their location in the cards created
    const featuredApplication = useState(props)[0].projects;
    const applicationName = featuredApplication.name;
    const applicationImage = featuredApplication.image;
    const applicationDescription = featuredApplication.description;
    const applicationRepo = featuredApplication.repo;
    const applicationLink = featuredApplication.link; //this is a link to the deployed application if applicable or youtube video of demonstration if not

    //this handles the creation of the card for each application in the portfolio using above variables
    return (
        <Card style={{ width: "35rem"}}>
            <Card.Img variant="top" src={require(`../../assets/images/${applicationImage}`)} className="card-image"/>
            <div className="center">
                <Card.Body>
                    <Card.Title className="card-title">{applicationName}</Card.Title>
                    <Card.Text className="card-text">{applicationDescription}</Card.Text>
                    <Card.Link className="card-link" href={applicationRepo} target="_blank">{applicationName} Github Repository</Card.Link>
                    <br></br>
                    <Card.Link className="card-link" href={applicationLink} target="_blank">{applicationName} Live Application/Demo</Card.Link>
                </Card.Body>
            </div>
        </Card>
    )
}

export default Application;