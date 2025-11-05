import React from "react";
import ContactButton from "../../components/contactButton/contactButton";
import "./securities.scss";

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
                                Eng: "At Giga securities trading services are provided by Everest Securities Limited a Hong Kong licensed securities firm authorized by the Securities and Futures Commission(SFC) to carry on Type 1 regulated activity dealing in securities under the Securities and Futures Ordinance(Cap. 571).",
                                简体: "透过 Everest Securities Limited——一家获香港证券及期货事务监察委员会（证监会）发牌、根据《证券及期货条例》（第571章）从事第1类受规管活动（证券交易）的持牌券商，我们为个人、企业及机构客户提供全方位的经纪与投资服务，涵盖证券交易、投资咨询以及横跨香港与全球市场的定制化执行方案。我们的平台将先进交易技术与严谨的合规及风险管理标准相结合，确保每笔交易均以透明、诚信和高效的方式执行。作为以客户为中心的企业，我们致力于连接投资者与股票、固定收益及结构性产品领域的机遇，同时恪守最高标准的职业操守，遵循证监会所有监管要求。凭借经验丰富的管理团队和对健全治理的承诺，我们力求在香港充满活力的金融环境中，成为客户寻求可靠市场通道与专业投资执行的值得信赖的合作伙伴。",
                                繁體: "透過 Everest Securities Limited——一家獲香港證券及期貨事務監察委員會（證監會）發牌、根據《證券及期貨條例》（第571章）從事第1類受規管活動（證券交易）的持牌券商，我們為個人、企業及機構客戶提供全方位的經紀與投資服務，涵蓋證券交易、投資諮詢以及橫跨香港與全球市場的定制化執行方案。我們的平台將先進交易技術與嚴謹的合規及風險管理標準相結合，確保每筆交易均以透明、誠信和高效的方式執行。作為以客戶為中心的企業，我們致力於連接投資者與股票、固定收益及結構性產品領域的機遇，同時恪守最高標準的職業操守，遵循證監會所有監管要求。憑藉經驗豐富的管理團隊和對健全治理的承諾，我們力求在香港充滿活力的金融環境中，成為客戶尋求可靠市場通道與專業投資執行的值得信賴的合作夥伴。",
                            }[currentLanguage]
                        }
                    </div>
                    <ContactButton currentLanguage={currentLanguage} />
                    <div className="contactButton">
                        {/* <a href="/"> */}
                        {
                            {
                                Eng: "Download App",
                                简体: "联系我们",
                                繁體: "聯絡我們",
                            }[currentLanguage]
                        }
                        {/* </a> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Securities;
// We provide a full range of broke
// rage and investment services to individual, corporate, and institutional clients, including securities t
// rading, investment advisory, and customized execution solutions across Hong Kong and global markets. O
// ur platform integrates advanced trading technology with rigorous compliance and risk-management standar
// ds, ensuring that every transaction is conducted with transparency, integrity, and efficiency. As a cli
// ent-focused firm, we aim to connect investors with opportunities across equities, fixed income, and str
// uctured products, while maintaining the highest standards of professional conduct and adherence to all
// SFC regulatory requirements. Backed by an experienced management team and a commitment to robust govern
// ance, we strive to be a trusted partner for clients seeking  reliable market access and informed investmen
// t execution in Hong Kong’s dynamic financial landscape.
