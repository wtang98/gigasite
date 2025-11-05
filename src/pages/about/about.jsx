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
                            Eng: "Giga Hong Kong Limited was founded in Hong Kong in 2001. It is regulated in Hong Kong with the Securities and Futures Commission (SFC) since 2003. The Company has managed and advised on a series of funds in the past 15 years and is managed by a team with over 30 years of hedge fund and investment management experience.",
                            简体: "Giga Hong Kong Limited 于2001年在香港成立，自2003年起持续接受香港证券及期货事务监察委员会（证监会）监管。过去十五年来，公司管理及顾问过多支基金，其管理团队在对冲基金与投资管理领域拥有逾三十年丰富经验。",
                            繁體: "Giga Hong Kong Limited 於2001年在香港成立，自2003年起持續接受香港證券及期貨事務監察委員會（證監會）監管。過去十五年來，公司管理及顧問過多支基金，其管理團隊在對沖基金與投資管理領域擁有逾三十年豐富經驗。",
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
                                        简体: "一位拥有卓越背景的资深金融领袖，兼具应用经济学硕士与工程技术硕士双学位。在香港领先企业——牵牛星资本、大唐金融、多多期货及现任极佳（香港）担任负责人员及执行董事近十年。",
                                        繁體: "一位擁有卓越背景的資深金融領袖，兼具應用經濟學碩士與工程技術碩士雙學位。在香港領先企業——牽牛星資本、大唐金融、多多期貨及現任極佳（香港）擔任負責人員及執行董事近十年",
                                    }[currentLanguage]
                                }
                            </div>
                        </div>
                        <div className="lee">
                            <div className="title">Lee Bing San 李秉宸</div>
                            <div className="description">
                                {
                                    {
                                        Eng: "A seasoned financial executive and Responsible Officer with over seven years of senior leadership experience with roles at Golden Rich, China CIFCO, Sinofides, Central Wealth Securities Investments and presently Giga (Hong Kong) and Everest Securities",
                                        简体: "一位经验丰富的金融高管和负责人员，拥有超过七年的高级领导经验，曾任职于金利丰、中期证券、中投证券、中富证券、华邦证券，Giga（香港）和 Everest Securities。",
                                        繁體: "一位经验老到嘅金融高管同负责人员，拥有超过七年嘅高级领导经验，曾经喺金利丰、中期证券、中投证券、中富证券、华邦证券担任要职，而家效力于 Giga（香港）同Everest Securities。",
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
