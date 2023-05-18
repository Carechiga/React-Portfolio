import React, { useState } from "react";
import { validateEmail } from "../../utils/helpers"

function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const { name, email, message } = formState;
    
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
		if (e.target.name === "email") {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage("Your email is invalid.");
			} else {
				if (!e.target.value.length) {
					setErrorMessage(`${e.target.name} is required.`);
				} else {
					setErrorMessage("");
				}
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}

	function handleBlank(e) {
		if (e.target.name === "Name" || e.target.name === "Message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}
 
    return(
        // "onBlur" calls a function when the user leaves a field, in our case were checking to see if its blank
        <section>
            <div className="center" id="Contact">
                <h1 className="page-header">Contact</h1>
            </div>
            <div className="center">
                <form id="contact-form">
                    <div>
                        <label htmlFor="Name">Name: </label>
                        <input type="text" defaultValue={name} name="Name" onBlur={handleBlank}></input>
                    </div>
                    <div>
                        <label htmlFor="Email">Email: </label>
                        <input type="email" defaultValue={email} name="Email" onBlur={handleBlank}></input>
                    </div>
                    <div>
                        <label htmlFor="Message">Message: </label>
                        <textarea defaultValue={message} name="Message" onBlur={handleBlank}></textarea>
                    </div>
                    {errorMessage && (
						<div>
							<p className="error-text">{errorMessage}</p>
						</div>
					)}
                    <button type="submit">Submit</button>

                </form>
            </div>

        </section>
    )
}

export default Contact;