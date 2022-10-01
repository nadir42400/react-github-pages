import React, {useRef} from "react";
import Phone from "../../asset/phone.png";
import Email from "../../asset/email.png";
import Linkedin from "../../asset/logo-linkedin.png";
import emailjs from "@emailjs/browser";
import "./contact.css";

export default function Contact() {

    const form = useRef(null);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_30bikii', 'template_zpzw9ra', form.current, 'coMZb21NlocIf4LMV')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      };

    return (
        <div id="Contact">
            <div id="titleDiv">
                <p>if you want contact me</p>
                <h2>Contact</h2>
            </div>

            <div id="main">
                <form id="Divform" onSubmit={sendEmail} ref={form}>
                    <input
                        type="text"
                        placeholder="your email"
                        className="inputContact"
                        id="inputEmailContact"
                        name="email"
                    ></input>
                    <input
                        type="text"
                        placeholder="Object"
                        className="inputContact"
                        id="inputObjectContact"
                        name="object"
                    ></input>
                    <textarea
                        placeholder="message..."
                        className="inputContact"
                        id="inputMsgContact"
                        name="message"
                    ></textarea>

                    <input
                        type="submit"
                        id="inputSubmitContact"
                        className="inputContact"
                        placeholder="send"
                    ></input>
                </form>

                <div id="DivContacts">
                    <div className="DivContact">
                        <img src={Email} alt="imgEmail" id="ImgEmailContact" />
                        <h3>Email</h3>
                        <p>nadir.bensadi@epitech.eu</p>
                    </div>

                    <div className="DivContact">
                        <img
                            src={Linkedin}
                            alt="imgLinkedin"
                            id="ImgLinkedinContact"
                        />
                        <h3>Linkedin</h3>
                        <p>Nadir BENSADI</p>
                    </div>

                    <div className="DivContact">
                        <img src={Phone} alt="imgPhone" id="ImgPhoneContact" />
                        <h3>My Phone</h3>
                        <p>06 46 85 12 86</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
