import React from "react";
import "./about.scss";

const About = () => {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__container--landing">
                    <div className="img" />
                    <div className="title">About Us</div>
                </div>

                <div className="about__container--description">
                    Giga Hong Kong Limited was founded in Hong Kong in 2001. It
                    is regulated in Hong Kong with the Securities and Futures
                    Commission (SFC) since 2003. The Company has managed and
                    advised on a series of funds in the past 15 years and is
                    managed by a team with over 30 years of hedge fund and
                    investment management experience.
                </div>

                <div className="about__container--description2">
                    <div className="mission">
                        <div className="title">Mission</div>
                        <div className="description">
                            Our purpose is to help more and more people
                            experience financial well-being. Together with our
                            clients, we’re contributing to a more equitable and
                            resilient world today and for generations to come.
                        </div>
                    </div>
                    <div className="vision">
                        <div className="title">Vision</div>
                        <div className="description">
                            Giga aims to be a world class investment partner of
                            choice, delivering the best investment outcomes,
                            advice and client service.
                        </div>
                    </div>
                    <div className="values">
                        <div className="title">Values</div>
                        <div className="description">
                            <ul>
                                <li>Independence</li>
                                <li>Integrity</li>
                                <li>Transparency</li>
                                <li>Reliability</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="about__container--description3">
                    <div className="lam">
                        <div className="title">Lam Kin San</div>
                        <div className="description">
                            A senior financial leader with a distinctive
                            background combining a Master's in Applied Economics
                            and a Master's in Engineering Technology. With
                            nearly a decade of experience as a Responsible
                            Officer and Executive Director at leading Hong Kong
                            firms, Altair Capital, Datang Financial, Duodu
                            Futures and presently Giga (Hong Kong).
                        </div>
                    </div>
                    <div className="li">
                        <div className="title">Li Hok Lai</div>
                        <div className="description">
                            A seasoned financial executive and Responsible
                            Officer with over eight years of senior leadership
                            experience. Previous experiences include careers at
                            prominent firms Guoan International Limited
                            (143.HK), and Bluemount Asset Management Limited,
                            Datang Financial, Central Wealth Securities and now
                            Giga (Hong Kong).
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
