import React from "react"
import '../contact.css';
import ContactForm from "../components/ContactForm";

const Contact = () => {
    return (
    <div className="Contact">
        <div id="ImgCont">
            <div id="stars"></div>
            <div id="stars2"></div>
            <div id="stars3"></div>
        </div>
        <h2>Lets Connect!</h2>
        <p>
            I'm always excited to hear about new opportunities, collaborations, 
            or any questions you may have. Whether you're interested in working together, 
            discussing a project, or just want to say hello, feel free to reach out—I’d love to hear from you!
        </p>
        <ContactForm />

    </div>
    )
}

export default Contact;