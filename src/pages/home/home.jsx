import React from "react";
import AssetImage from "../../assets/chart.jpg";
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
                    <div className="home--offerings__container--img" />
                    <div className="home--offerings__container--description">
                        <p className="title">Services</p>
                        <p className="content">
                            We provide asset, investment and family office
                            management services tailored to meet the unique
                            needs of our clients.
                        </p>
                    </div>
                </div>
                <div className="home--offerings__container">
                    <div className="home--offerings__container--img" />
                    <div className="home--offerings__container--description">
                        <p className="title">Securities</p>
                        <p className="content">
                            We provide a full range of securities trading and
                            brokerage services to individual, corporate, and
                            institutional clients.
                        </p>
                    </div>
                </div>
            </div>
            <div className="home--contact">
                <div className="home--contact__container">
                    <div className="title">Contact Us</div>
                    <p>
                        An alternative asset manager focusing on equities
                        worldwide
                    </p>
                </div>
            </div>
            <div className="home--about">
                <div className="title">About Us</div>
                <p>
                    We are a team of dedicated professionals committed to
                    providing tailored financial solutions that align with our
                    clients' goals. With a focus on integrity, innovation, and
                    excellence.
                </p>
            </div>
        </div>
    );
};

export default Home;
