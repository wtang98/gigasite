import React from "react";
import "./securities.scss";

const Securities = ({ currentLanguage }) => {
    return (
        <div className="securities">
            <div className="securities__container">
                <div className="securities__container--landing">
                    <div className="securities__container--landing--img" />
                    <div className="securities__container--landing--title">
                        Securities
                    </div>
                </div>
                <div className="securities__container--description">
                    <div className="content">
                        Through Everest Securities Limited a Hong Kong licensed
                        securities firm authorized by the Securities and Futures
                        Commission (SFC) to carry on Type 1 regulated activity
                        dealing in securities under the Securities and Futures
                        Ordinance (Cap. 571). We provide a full range of
                        brokerage and investment services to individual,
                        corporate, and institutional clients, including
                        securities trading, investment advisory, and customized
                        execution solutions across Hong Kong and global markets.
                        Our platform integrates advanced trading technology with
                        rigorous compliance and risk-management standards,
                        ensuring that every transaction is conducted with
                        transparency, integrity, and efficiency. As a
                        client-focused firm, we aim to connect investors with
                        opportunities across equities, fixed income, and
                        structured products, while maintaining the highest
                        standards of professional conduct and adherence to all
                        SFC regulatory requirements. Backed by an experienced
                        management team and a commitment to robust governance,
                        we strive to be a trusted partner for clients seeking
                        reliable market access and informed investment execution
                        in Hong Kong’s dynamic financial landscape.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Securities;
