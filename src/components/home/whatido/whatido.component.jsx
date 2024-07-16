import design from '../../../assets/images/design-main.svg';
import websites from '../../../assets/images/websites.svg';
import mobileweb from '../../../assets/images/mobile-web.svg';
import branding from '../../../assets/images/branding.svg';
import designConcept from '../../../assets/images/design-concept.svg';
import dev from '../../../assets/images/dev.svg';
import psdHtml from '../../../assets/images/psd-html.svg';
import responsive from '../../../assets/images/responsive.svg';
import mobileApp from '../../../assets/images/mobile-app.svg';
import development from '../../../assets/images/development.svg';

import './whatido.component.scss'

const WhatIDo = () => {
    return (
        <section className="container whatido">
            <h2 className="latest-head">What I Do</h2>
            <article className="latest-work">
                <h3>Design</h3>
                <div className="what-i-do">
                    <div className="what-i-do-info">
                        <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <p>Establishing the right visual connection with your customers and users by creating
                                eye-catching and memorable designs as well as meaningful user experience.</p>
                            <div className="what-i-do-info-art">
                                <img src={design} alt="Design" />
                            </div>
                        </div>
                        <div className="info-cards-wrapper" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                            data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div className="info-cards">
                                <div className="info-cards-title">Websites and Platforms</div>
                                <div className="info-icon-img">
                                    <img src={websites} alt="Websites and Platforms" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Mobile Web Apps</div>
                                <div className="info-icon-img">
                                    <img src={mobileweb} alt="Mobile Web Apps" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Strategy and Branding</div>
                                <div className="info-icon-img">
                                    <img src={branding} alt="Strategy and Branding" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Design Concept</div>
                                <div className="info-icon-img">
                                    <img src={designConcept} alt="Design Concept" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <article className="latest-work">
                <h3>Development</h3>
                <div className="what-i-do">
                    <div className="what-i-do-info">
                        <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000"
                            data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <p>Implementing your project with scalable architecture design, modern technology, and an
                                excellent level of data security.</p>
                            <div className="what-i-do-info-art">
                                <img src={dev} alt="Development" />
                            </div>
                        </div>
                        <div className="info-cards-wrapper" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                            data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div className="info-cards">
                                <div className="info-cards-title">PSD to HTML conversion</div>
                                <div className="info-icon-img">
                                    <img src={psdHtml} alt="PSD to HTML conversion" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Responsive Web Design</div>
                                <div className="info-icon-img">
                                    <img src={responsive} alt="Responsive Web Design" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Mobile Web App Development</div>
                                <div className="info-icon-img">
                                    <img src={mobileApp} alt="Mobile Web App Development" />
                                </div>
                            </div>
                            <div className="info-cards">
                                <div className="info-cards-title">Agile Software Development</div>
                                <div className="info-icon-img">
                                    <img src={development} alt="Mobile Web App Development" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    )
}

export default WhatIDo;