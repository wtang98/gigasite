import React from "react";
import ContactButton from "../../components/contactButton/contactButton";
import apple from "../../assets/apple.svg.png";
import android from "../../assets/android.jpg";
import pwa from "../../assets/pwa.png";
import google from "../../assets/play.png";

import "./securities.scss";

const DownloadLinks = ({ text, icon, link }) => (
    <div className="download">
        <a target="_blank" href={link}>
            <button>
                <img className={icon} src={icon} />
                <div className="dowload__text">{text}</div>
            </button>
        </a>
    </div>
);

const Securities = ({ currentLanguage }) => {
    return (
        <div className="securities">
            <div className="securities__container">
                <div className="securities__container--landing">
                    <div className="securities__container--landing--img" />
                    <div className="securities__container--landing--title">
                        {
                            {
                                Eng: "Securities",
                                简体: "证券",
                                繁體: "證券",
                            }[currentLanguage]
                        }
                    </div>
                </div>
                <div className="securities__container--description">
                    <div className="content">
                        {
                            {
                                Eng: "At Giga securities trading services are provided by our partnership with Everest Securities Limited a Hong Kong licensed securities firm authorized by the Securities and Futures Commission(SFC) to carry on Type 1 regulated activity dealing in securities under the Securities and Futures Ordinance(Cap. 571).",
                                简体: "透过 Everest Securities Limited——一家获香港证券及期货事务监察委员会（证监会）发牌、根据《证券及期货条例》（第571章）从事第1类受规管活动（证券交易）的持牌券商，我们为个人、企业及机构客户提供全方位的经纪与投资服务，涵盖证券交易、投资咨询以及横跨香港与全球市场的定制化执行方案。我们的平台将先进交易技术与严谨的合规及风险管理标准相结合，确保每笔交易均以透明、诚信和高效的方式执行。作为以客户为中心的企业，我们致力于连接投资者与股票、固定收益及结构性产品领域的机遇，同时恪守最高标准的职业操守，遵循证监会所有监管要求。凭借经验丰富的管理团队和对健全治理的承诺，我们力求在香港充满活力的金融环境中，成为客户寻求可靠市场通道与专业投资执行的值得信赖的合作伙伴。",
                                繁體: "透過 Everest Securities Limited——一家獲香港證券及期貨事務監察委員會（證監會）發牌、根據《證券及期貨條例》（第571章）從事第1類受規管活動（證券交易）的持牌券商，我們為個人、企業及機構客戶提供全方位的經紀與投資服務，涵蓋證券交易、投資諮詢以及橫跨香港與全球市場的定制化執行方案。我們的平台將先進交易技術與嚴謹的合規及風險管理標準相結合，確保每筆交易均以透明、誠信和高效的方式執行。作為以客戶為中心的企業，我們致力於連接投資者與股票、固定收益及結構性產品領域的機遇，同時恪守最高標準的職業操守，遵循證監會所有監管要求。憑藉經驗豐富的管理團隊和對健全治理的承諾，我們力求在香港充滿活力的金融環境中，成為客戶尋求可靠市場通道與專業投資執行的值得信賴的合作夥伴。",
                            }[currentLanguage]
                        }
                        <br />
                        {
                            {
                                Eng: "Though Everest (Hong Kong) Securities Limited we use Long Port trading app to bring users low latency ",
                                简体: "",
                                繁體: "",
                            }[currentLanguage]
                        }
                    </div>
                    <div className="securities__container--description__buttons">
                        <ContactButton currentLanguage={currentLanguage} />
                    </div>
                </div>
                <div className="securities__container--tech">
                    <div className="title">Trade with us</div>
                    <div className="text">
                        Though Everest (Hong Kong) Securities Limited powered by
                        Long Bridge.
                    </div>
                    <div className="securities__container--tech__links">
                        <div className="row">
                            <DownloadLinks
                                text="Apple Store"
                                icon={apple}
                                link="https://apps.apple.com/hk/app/longbridge-%E6%B8%AF%E8%82%A1-%E7%BE%8E%E8%82%A1-%E6%9C%9F%E6%AC%8A-etf-%E4%BA%A4%E6%98%93/id1470042146"
                            />
                            <DownloadLinks
                                text="Google Play"
                                icon={google}
                                link="https://m.lbkrs.com/v2/app/download-qrcode?channel=WHAB0002&os=Android&region=HK&download_source=google_play"
                            />
                        </div>
                        <div className="row">
                            <DownloadLinks
                                text="pwa"
                                icon={pwa}
                                link="https://longbridgeapp.com/"
                            />
                            <DownloadLinks
                                text="apk"
                                icon={android}
                                link="https://m.lbkrs.com/v2/app/download-qrcode?channel=WHAB0002&os=Android&region=HK"
                            />
                        </div>
                    </div>
                    <div className="securities__container--tech__info">
                        <div className="infoRow">
                            <div></div>
                            <div>
                                <div className="infoRow__title">
                                    Cutting Edge Tech
                                </div>
                                <div className="infoRow__info">
                                    Intuative design and advanced trading tools
                                    make trading and management of assets from
                                    mobile or desktop simple.
                                </div>
                            </div>
                        </div>
                        <div className="infoRow">
                            <div></div>
                            <div>
                                <div className="infoRow__title">
                                    Global Access
                                </div>
                                <div className="infoRow__info">
                                    One account can connect to major exchanges
                                    in markets markets in Hong Kong, the United
                                    States, Singapore, Shanghai and Shenzhen
                                    markets, supporting stocks, ETFs, bonds,
                                    REITs, options, public funds, private equity
                                    funds, money market funds, etc., as well as
                                    OTC global securities market trading and
                                    other non-standard products trading.
                                </div>
                            </div>
                        </div>
                        <div className="infoRow">
                            <div></div>
                            <div>
                                <div className="infoRow__title">
                                    Extensive Investor Tools
                                </div>
                                <div className="infoRow__info">
                                    Financial overviews provide financial
                                    scores, in-depth data, business reviews,
                                    institutaion ratings, industry data amongst
                                    other information points to help investors
                                    identify potential opportunities.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Securities;
// https://apps.apple.com/hk/app/longbridge-%E6%B8%AF%E8%82%A1-%E7%BE%8E%E8%82%A1-%E6%9C%9F%E6%AC%8A-etf-%E4%BA%A4%E6%98%93/id1470042146
// apple https://m.lbkrs.com/v2/app/download-qrcode?channel=WHAB0002&os=iOS&region=HK
// google https://m.lbkrs.com/v2/app/download-qrcode?channel=WHAB0002&os=Android&region=HK&download_source=google_play
// pwa https://longbridgeapp.com/
// apk https://m.lbkrs.com/v2/app/download-qrcode?channel=WHAB0002&os=Android&region=HK

// link to site https://longbridge.com/hk/download?channel=WHAB0002
