import React from "react";
import "./contactButton.scss";

const ContactButton = ({ currentLanguage }) => {
    return (
        <div className="contactButton">
            <a href="/contact">
                {
                    { Eng: "Contact Us", 简体: "联系我们", 繁體: "聯絡我們" }[
                        currentLanguage
                    ]
                }
            </a>
        </div>
    );
};

export default ContactButton;
