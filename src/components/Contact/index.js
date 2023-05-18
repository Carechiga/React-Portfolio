import React, { useState, useRef} from "react";
import { validateEmail } from "../../utils/helpers"
import emailjs from "@emailjs/browser";

//creates content to be displayed on "Contact Page"
function Contact() {
    const [formState, setFormState] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const { user_name, user_email, message } = formState;
    
    const [errorMessage, setErrorMessage] = useState("");

    function handleChange(e) {
		if (e.target.name === "user_email") {
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
		if (e.target.name === "user_name" || e.target.name === "message") {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.id} is required.`);
			} else {
				setErrorMessage("");
			}
		}

		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
		}
	}
   
    //this is from emailjs for email handling comes from emailjs documentation
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        
    
        emailjs
          .sendForm(
            "service_diy72li",
            "template_n2coaqo",
            form.current,
            "YCgPkdw8Igf3lXFgu"
          )
          .then(
            (result) => {
              console.log(result.text);
              setErrorMessage("message sent");
            },
            (error) => {
              console.log(error.text);
            }
          );
      };
 
    return(
        // "onBlur" calls a function when the user leaves a field, in our case were checking to see if its blank
        <section>
            <div className="center" id="Contact">
                <h1 className="page-header">Contact</h1>
            </div>
            <div className="center">
                <form id="contact-form" ref={form} onSubmit={sendEmail}>
                    <div>
                        <label htmlFor="Name">Name: </label>
                        <input type="text" defaultValue={user_name} id="Name" name="user_name" onBlur={handleBlank}></input>
                    </div>
                    <div>
                        <label htmlFor="Email">Email: </label>
                        <input type="email" defaultValue={user_email} id="Email" name="user_email" onBlur={handleChange}></input>
                    </div>
                    <div>
                        <label htmlFor="Message">Message: </label>
                        <textarea defaultValue={message} id="Message" name="message" onBlur={handleBlank}></textarea>
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