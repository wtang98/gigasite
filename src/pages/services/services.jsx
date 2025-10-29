import React from "react";
import "./services.scss";

const Services = () => {
    return (
        <div className="services">
            <div className="services__container">
                <div className="services__container--landing">
                    <div className="services__container--landing__img" />
                    <div className="services__container--landing__description">
                        <div className="title">Our Services</div>
                        <div className="text">
                            Our strategies and tailored approach across all
                            asset classes enable us to achieve our clients needs
                            and goals. We actively monitor our offerings with
                            the objective to outperform the benchmark returns in
                            every situation.
                        </div>
                    </div>
                </div>
                <div className="services__container--content">
                    <div className="services__container--content--investment">
                        <div className="services__container--content--investment__img" />
                        <div className="services__container--content--investment__description">
                            <div className="title">Investment Management</div>
                            <div className="text">
                                We cater to private and institutional clients
                                considering bespoke investment management while
                                achieving a consistent performance. Through an
                                in-depth interactive approach, we clearly define
                                the respective investment objectives &
                                guidelines and build a portfolio tailored to our
                                clients’ requirements.
                            </div>
                        </div>
                    </div>
                    <div className="services__container--content--asset">
                        <div className="services__container--content--asset__img" />
                        <div className="services__container--content--asset__description">
                            <div className="title">Asset Management</div>
                            <div className="text">
                                Our management is based on an active, dynamic
                                and opportunistic strategy, linked to an
                                in-depth knowledge of financial markets.
                            </div>
                        </div>
                    </div>
                    <div className="services__container--content--family">
                        <div className="services__container--content--family__img" />
                        <div className="services__container--content--family__description">
                            <div className="title">
                                Family Office Management
                            </div>
                            <div className="text">
                                We offer an end-to-end service, covering all
                                aspects of wealth and estate planning. We assist
                                in provision for future generations, in
                                domiciliation, support in establishing vehicles
                                such as trusts, foundations and companies that
                                securely hold your assets.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="services__container--risk">
                    <div className="services__container--risk__description">
                        <div className="title">Risk Control & Strategy</div>
                        <div className="text">
                            Giga’s investment philosophy relies on fundamental,
                            bottom-up stock specific research to identify long
                            equity investments, which are then constructed
                            within a disciplined risk managed portfolio in an
                            effort to isolate stock specific alpha and minimize
                            unintended systematic portfolio volatility.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Services;
