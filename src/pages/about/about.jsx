import React from "react";
import "./about.scss";

const About = ({ currentLanguage }) => {
    return (
        <div className="about">
            <div className="about__container">
                <div className="about__container--landing">
                    <div className="img" />
                    <div className="title">
                        {
                            {
                                Eng: "About Us",
                                简体: "关于我们",
                                繁體: "關於我們",
                            }[currentLanguage]
                        }
                    </div>
                </div>
                <div className="about__container--description">
                    {
                        {
                            Eng: "Everest Hong Kong and sister company Giga Hong Kong Limited were founded in Hong Kong in 2024 and 2004 respectively and are both regulated in Hong Kong with the Securities and Futures Commission (SFC). Giga has managed and advised on a series of funds in the past 15 years and is managed by a team with over 30 years of hedge fund and investment management experience.",
                            简体: "Everest Hong Kong 及其关联公司 Giga Hong Kong Limited 分别于2024年和2004年在香港成立，且均受香港证券及期货事务监察委员会（证监会）监管。Giga在过去15年间管理并顾问过多支基金，其管理团队在对冲基金和投资管理领域拥有超过30年的丰富经验",
                            繁體: "Everest Hong Kong 及其關聯公司 Giga Hong Kong Limited 分別於2024年和2004年在香港成立，且均受香港證券及期貨事務監察委員會（證監會）監管。Giga在過去15年間管理並顧問過多支基金，其管理團隊在對沖基金和投資管理領域擁有超過30年的豐富經驗。",
                        }[currentLanguage]
                    }
                    <br />
                    {
                        {
                            Eng: "While Everest provides securities dealing servces, Investment, Asset and Family office management services are provided by Giga Hong Kong. This arragement will mitigate any conflicts of interest that might arise during the dealing process ensuring integrity and maintaining client trust.",
                            简体: "尽管 Everest 提供证券交易服务，但投资、资产及家族办公室管理服务均由 Giga Hong Kong 提供。此项安排将有效规避交易过程中可能产生的利益冲突，从而确保业务诚信并维护客户信任。",
                            繁體: "儘管 Everest 提供證券交易服務，但投資、資產及家族辦公室管理服務均由 Giga Hong Kong 提供。此項安排將有效規避交易過程中可能產生的利益衝突，從而確保業務誠信並維護客戶信任。",
                        }[currentLanguage]
                    }
                </div>
                <div className="about__container--description2">
                    <div className="about__container--description2__container">
                        <div className="mission">
                            <div className="title">
                                {
                                    {
                                        Eng: "Mission",
                                        简体: "使命",
                                        繁體: "使命",
                                    }[currentLanguage]
                                }
                            </div>
                            <div className="description">
                                {
                                    {
                                        Eng: "Our purpose is to help more and more people experience financial well-being. Together with our clients, we’re contributing to a more equitable and resilient world today and for generations to come.",
                                        简体: "我们的宗旨是助力越来越多的人实现财务健康。我们与客户携手同行，共同为当下乃至子孙后代构建一个更加公平、更具韧性的世界。",
                                        繁體: "我們的宗旨是助力越來越多的人實現財務健康。我們與客戶攜手同行，共同為當下乃至子孫後代構建一個更加公平、更具韌性的世界。",
                                    }[currentLanguage]
                                }
                            </div>
                        </div>
                        <div className="vision">
                            <div className="title">
                                {
                                    {
                                        Eng: "Vision",
                                        简体: "愿景",
                                        繁體: "願景",
                                    }[currentLanguage]
                                }
                            </div>
                            <div className="description">
                                {
                                    {
                                        Eng: "Giga aims to be a world class investment partner of choice, delivering the best investment outcomes, advice and client service.",
                                        简体: "极佳致力于成为世界级的首选投资合作伙伴，提供卓越的投资成果、专业建议与客户服务。",
                                        繁體: "極佳致力於成為世界級的首選投資合作夥伴，提供卓越的投資成果、專業建議與客戶服務。",
                                    }[currentLanguage]
                                }
                            </div>
                        </div>
                        <div className="values">
                            <div className="title">
                                {
                                    {
                                        Eng: "Values",
                                        简体: "价值观",
                                        繁體: "價值觀",
                                    }[currentLanguage]
                                }
                            </div>
                            <div className="description">
                                <ul>
                                    <li>
                                        {
                                            {
                                                Eng: "Independence",
                                                简体: "独立",
                                                繁體: "獨立",
                                            }[currentLanguage]
                                        }
                                    </li>
                                    <li>
                                        {
                                            {
                                                Eng: "Integrity",
                                                简体: "诚信",
                                                繁體: "誠信",
                                            }[currentLanguage]
                                        }
                                    </li>
                                    <li>
                                        {
                                            {
                                                Eng: "Transparency",
                                                简体: "透明",
                                                繁體: "透明",
                                            }[currentLanguage]
                                        }
                                    </li>
                                    <li>
                                        {
                                            {
                                                Eng: "Reliability",
                                                简体: "可靠",
                                                繁體: "可靠",
                                            }[currentLanguage]
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about__container--description3">
                    <div className="about__container--description3__title">
                        Responsible Officers
                    </div>
                    <div className="about__container--description3__content">
                        <div className="lam">
                            <div className="title">Lam Kin San 林建燊</div>
                            <div className="description">
                                {
                                    {
                                        Eng: "A senior financial leader with a distinctive background combining a Master's in Applied Economics and a Master's in Engineering Technology. With nearly a decade of experience as a Responsible Officer and Executive Director at leading Hong Kong firms, Altair Capital, Datang Financial, Duodu Futures and presently Giga (Hong Kong) and Everest Securities.",
                                        简体: "一位资深金融领袖，兼具独特的应用经济学硕士与工程技术硕士学术背景。在香港领先企业（包括奥而特资本、大唐金融、多多期货）担任负责人员及执行董事近十年，现任 Giga（香港）和Everest Securities。",
                                        繁體: "一位資深金融領袖，兼具獨特的應用經濟學碩士與工程技術碩士學術背景。在香港領先企業（包括奧而特資本、大唐金融、多多期貨）擔任負責人員及執行董事近十年，現任 Giga（香港）和Everest Securities。",
                                    }[currentLanguage]
                                }
                            </div>
                        </div>
                        <div className="lee">
                            <div className="title">Lee Bing San 李秉宸</div>
                            <div className="description">
                                {
                                    {
                                        Eng: "A seasoned financial executive with a Masters of Business Administration from Wrexham University and BSc (HONS) Actuarial Science from The Hong Kong Polytechnic University. A Responsible Officer with over seven years of senior leadership experience with roles at Golden Rich, China CIFCO, Sinofides, Central Wealth Securities Investments and presently Giga (Hong Kong) and Everest Securities.",
                                        简体: "一位经验丰富的金融高管，拥有雷克瑟姆大学的工商管理硕士学位及香港理工大学的应用统计科学（荣誉）学士学位。其为负责人员，拥有超过七年的高级领导经验，曾任职于高发、中国中投证券、汇骏、中财证券投资等机构，现任 Giga（香港）和 Everest Securities。",
                                        繁體: "一位經驗豐富的金融高管，擁有雷克瑟姆大學的工商管理碩士學位及香港理工大學的應用統計科學（榮譽）學士學位。其為負責人員，擁有超過七年的高級領導經驗，曾任職於高發、中國中投證券、匯駿、中財證券投資等機構，現任 Giga（香港）和 Everest Securities。",
                                    }[currentLanguage]
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
