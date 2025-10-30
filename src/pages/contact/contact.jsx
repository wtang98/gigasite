import React, { useState } from "react";
import "./contact.scss";

const Contact = ({ currentLanguage }) => {
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
            <div className="title">
                {
                    { Eng: "Contact Us", 简体: "联系我们", 繁體: "聯絡我們" }[
                        currentLanguage
                    ]
                }
            </div>
            <div className="contact__container">
                <div className="contact__container--left">
                    <div className="contact__container--left__dropdown">
                        <div className="title">
                            {
                                {
                                    Eng: "Enquiry type",
                                    简体: "咨询类型",
                                    繁體: "諮詢類型",
                                }[currentLanguage]
                            }
                        </div>
                        <select onChange={onDropdownChange} type="dropdown">
                            <option value="general">
                                {
                                    {
                                        Eng: "General Enquiry",
                                        简体: "一般咨询",
                                        繁體: "一般諮詢",
                                    }[currentLanguage]
                                }
                            </option>
                            <option>
                                {
                                    {
                                        Eng: "Asset Management",
                                        简体: "资产管理",
                                        繁體: "資產管理",
                                    }[currentLanguage]
                                }
                            </option>
                            <option>
                                {
                                    {
                                        Eng: "Investment Management",
                                        简体: "投资管理",
                                        繁體: "投資管理",
                                    }[currentLanguage]
                                }
                            </option>
                            <option>
                                {
                                    {
                                        Eng: "Family Office Management",
                                        简体: "家族办公室管理",
                                        繁體: "家族辦公室管理",
                                    }[currentLanguage]
                                }
                            </option>
                            <option>
                                {
                                    {
                                        Eng: "Securities services",
                                        简体: "证券服务",
                                        繁體: "證券服務",
                                    }[currentLanguage]
                                }
                            </option>
                        </select>
                    </div>
                    <div className="contact__container--left__name">
                        <div className="title">
                            {
                                {
                                    Eng: "Name",
                                    简体: "姓名",
                                    繁體: "姓名",
                                }[currentLanguage]
                            }
                        </div>
                        <input
                            onInput={onNameChange}
                            placeholder={
                                {
                                    Eng: "Name",
                                    简体: "姓名",
                                    繁體: "姓名",
                                }[currentLanguage]
                            }
                            type="text"
                        />
                    </div>
                    <div className="contact__container--left__email">
                        <div className="title">
                            {
                                {
                                    Eng: "Email",
                                    简体: "邮箱",
                                    繁體: "電郵",
                                }[currentLanguage]
                            }
                        </div>
                        <input
                            onInput={onEmailChange}
                            placeholder={
                                {
                                    Eng: "Email",
                                    简体: "邮箱",
                                    繁體: "電郵",
                                }[currentLanguage]
                            }
                            type="text"
                        />
                    </div>
                </div>
                <div className="contact__container--right">
                    <div className="contact__container--right__phone">
                        <div className="title">
                            {
                                {
                                    Eng: "Phone number",
                                    简体: "电话号码",
                                    繁體: "電話號碼",
                                }[currentLanguage]
                            }
                        </div>
                        <input
                            onInput={onPhoneChange}
                            placeholder={
                                {
                                    Eng: "Phone number",
                                    简体: "电话号码",
                                    繁體: "電話號碼",
                                }[currentLanguage]
                            }
                            type="number"
                        />
                    </div>
                    <div className="contact__container--right__message">
                        <div className="title">
                            {
                                {
                                    Eng: "Your message",
                                    简体: "您的留言",
                                    繁體: "您的留言",
                                }[currentLanguage]
                            }
                        </div>
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
                            <button onClick={onSubmit}>
                                {
                                    {
                                        Eng: "Submit",
                                        简体: "提交",
                                        繁體: "提交",
                                    }[currentLanguage]
                                }
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
