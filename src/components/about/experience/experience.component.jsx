import millennium from '../../../assets/images/logo-new.svg';
import ushyaku from '../../../assets/images/ushyaku-logo.png';
import makepositive from '../../../assets/images/mp.png';

import { Link } from 'react-router-dom';
import './experience.component.scss';

const Experience = () => {
    return (
        <section className="section-five experience">
            <header className="container">
                <section>
                    <div className="educational-set">
                        <div className="educational-title-wrapper">
                            <span className="educational-title">Experience</span>
                            <span className="educational-subtitle">Work Experience</span>
                        </div>
                        <div className="educational-set-wrapper">
                            <div className="educational-right">
                                <div className="classes-edu ekk"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="20"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu rc"><img src={millennium} alt='logo'/></div>
                                    <div className="right-edu rc">
                                        <div className="tag"><span>Projects: </span><Link to="https://www.rarecarat.com" target="_blank">Rare Carat</Link>, <Link to="https://www.webmsi.com" target="_blank">Webmsi</Link>, <Link to="https://www.systmapp.com" target="_blank">Systmapp</Link></div>
                                        <div className="degree">Millenium Silicon Services I Pvt. Ltd.</div>
                                        <div className="institution">October 2016 to Present, Gurgaon Haryana IN</div>
                                        <div className="duration">
                                            <span>Role -</span> UI/UX Designer & Front-End Developer
                                        </div>
                                        <div className="duration">
                                            <div>Responsibility - </div>
                                            <ul>
                                                <li>Visual Design</li>
                                                <li>PSD to HTML translation</li>
                                                <li>Responsive Web Design - multiple browsers supports</li>
                                                <li>Multiple device support - Mobile, iPhone, iPad, Tablet, Desktop, and others larger screens</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="classes-edu doo"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="20"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu ushyaku"><img src={ushyaku} alt='logo' /></div>
                                    <div className="right-edu ushyaku">
                                        <div className="tag"><span>Projects: </span><Link to="https://www.ushyaku.com" target="_blank">Ushyaku</Link></div>
                                        <div className="degree">Ushyaku Software Solutions LLP</div>
                                        <div className="institution">August 2015 to August 2016, Gurgaon Haryana IN</div>
                                        <div className="duration">
                                            <span>Role -</span> UI Designer & Front End Developer
                                        </div>
                                        <div className="duration">
                                            <div>Responsibility - </div>
                                            <ul>
                                                <li>Visual Design</li>
                                                <li>PSD to HTML translation</li>
                                                <li>Branding, Logo Design, Graphics Design & etc</li>
                                                <li>Responsive Web Design - multiple browsers supports</li>
                                                <li>Multiple device support - Mobile, iPhone, iPad, Tablet, Desktop, and others larger screens</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="classes-edu teen"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="20"
                                    data-aos-duration="2000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu mp"><img src={makepositive} alt='logo' /></div>
                                    <div className="right-edu mp">
                                        <div className="tag"><span>Projects: </span><Link to="https://www.ushyaku.com" target="_blank">Make Positive</Link>, <Link to="https://www.provartesting.com" target="_blank">Provar</Link>, +</div>
                                        <div className="degree">Make positive Software Solution Pvt. Ltd</div>
                                        <div className="institution">May 2013 to August 2015, Gurgaon Haryana IN</div>
                                        <div className="duration">
                                            <span>Role -</span> Web Designer
                                        </div>
                                        <div className="duration">
                                            <div>Responsibility - </div>
                                            <ul>
                                                <li>Visual Design</li>
                                                <li>PSD to HTML translation</li>
                                                <li>Branding, Logo Design, Graphics Design & etc</li>
                                                <li>Responsive Web Design - multiple browsers supports</li>
                                                <li>Multiple device support - Mobile, iPhone, iPad, Tablet, Desktop, and others larger screens</li>
                                                <li>Salesforce Application Admin and Customization </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
        </section>
    )
}

export default Experience;