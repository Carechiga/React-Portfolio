import React, { useState } from "react";

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const { name, email, message } = formState;

 
    return(
        <section>
            <div className="center" id="Contact">
                <h1 className="page-header">Contact</h1>
            </div>
            <div className="center">
                <form id="contact-form">
                    <div>
                        <label htmlFor="Name">Name: </label>
                        <input type="text" defaultValue={name} name="Name"></input>
                    </div>
                    <div>
                        <label htmlFor="Email">Email: </label>
                        <input type="email" defaultValue={email} name="Email"></input>
                    </div>
                    <div>
                        <label htmlFor="Message">Message: </label>
                        <textarea defaultValue={message} name="Message"></textarea>
                    </div>
                    <button type="submit">Submit</button>

                </form>
            </div>

        </section>
    )
}

export default Contact;