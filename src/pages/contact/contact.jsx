import React, { useState } from "react";
import "./contact.scss";

const Contact = () => {
    const [name, setName] = useState("");
    const [enquiryType, setEnquiryType] = useState("General Enquiry");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const onDropdownChange = (e) => {
        setEnquiryType(e.target.value);
    };
    const onNameChange = (e) => {
        setName(e.target.value);
    };
    const onEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const onPhoneChange = (e) => {
        setPhone(e.target.value);
    };
    const onMessageChange = (e) => {
        setMessage(e.target.value);
    };
    const onSubmit = () => {};

    return (
        <div className="contact">
            <div className="title">Contact Us</div>
            <div className="contact__container">
                <div className="contact__container--left">
                    <div className="contact__container--left__dropdown">
                        <div className="title">Enquiry type</div>
                        <select onChange={onDropdownChange} type="dropdown">
                            <option value="general">General Enquiry</option>
                            <option>Asset Management</option>
                            <option>Wealth Management</option>
                            <option>Family Office Management</option>
                            <option>Securities services</option>
                        </select>
                    </div>
                    <div className="contact__container--left__name">
                        <div className="title">Name</div>
                        <input
                            onInput={onNameChange}
                            placeholder="Name"
                            type="text"
                        />
                    </div>
                    <div className="contact__container--left__email">
                        <div className="title">Email</div>
                        <input
                            onInput={onEmailChange}
                            placeholder="Email"
                            type="text"
                        />
                    </div>
                </div>
                <div className="contact__container--right">
                    <div className="contact__container--right__phone">
                        <div className="title">Phone number</div>
                        <input
                            onInput={onPhoneChange}
                            placeholder="Phone number"
                            type="number"
                        />
                    </div>
                    <div className="contact__container--right__message">
                        <div className="title">Your message</div>
                        <div className="textarea-div">
                            <textarea
                                onInput={onMessageChange}
                                name="Text1"
                                rows="4"
                                resize="disabled"
                            />
                        </div>
                    </div>
                    <div className="contact__container--right__submit">
                        <a
                            href={`mailto:john@demosite.com?subject=${enquiryType}&body=Dear Giga %0D%0A${message} %0D%0ARegards, ${name}%0D%0A${email}%0D%0A${phone}`}
                        >
                            <button onClick={onSubmit}>Submit</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
