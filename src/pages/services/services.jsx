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
                <div className="services__container--investment"></div>
                <div className="services__container--asset"></div>
                <div className="services__container--family"></div>
            </div>
        </div>
    );
};
export default Services;
