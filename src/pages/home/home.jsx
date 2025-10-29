import React from "react";
import Contact from "../contact/contact";
import { Link } from "react-router";
import "./home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="home--landing">
                <div className="title">Giga Hong Kong</div>
                <p>
                    An alternative asset manager focusing on equities worldwide
                </p>
            </div>
            <div className="home--offerings">
                <div className="home--offerings__container">
                    <div className="img" />
                    <div className="home--offerings__container--description">
                        <p className="title">Services</p>
                        <p className="content">
                            We provide asset, investment and family office
                            management services tailored to meet the unique
                            needs of our clients.
                        </p>
                        <p className="link">
                            <Link to={"services"}>Learn More</Link>
                        </p>
                    </div>
                </div>
                <div className="home--offerings__container">
                    <div className="img2" />
                    <div className="home--offerings__container--description">
                        <p className="title">Securities</p>
                        <p className="content">
                            We provide a full range of securities trading and
                            brokerage services to individual, corporate, and
                            institutional clients.
                        </p>
                        <p className="link">
                            <Link to={"securities"}>Learn More</Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="home--about">
                <div className="home--about__container">
                    <div className="img" />
                    <div className="home--about__container--description">
                        <p className="title">About Us</p>
                        <p className="content">
                            Independence, Integrity, Transparency and
                            Reliability are the key guiding principles of the
                            firm. We are not tied or obligated to any single
                            institution or partner and thus can source and
                            provide bespoke solutions for our clients.
                        </p>
                        <p className="link">
                            <Link to={"about"}>Learn More</Link>
                        </p>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    );
};

export default Home;
