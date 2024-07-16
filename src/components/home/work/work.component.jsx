import { Link } from 'react-router-dom';

import rc from '../../../assets/images/rc.png';
import msi from '../../../assets/images/msi.png';
import sys from '../../../assets/images/sys.png';

import './work.component.scss';

const LatestWork = () => {
    return (
        <section>
            <div className="container">
                <h2 className="latest-head">Latest Work</h2>
                <article className="latest-work">
                    <h3 className="left-head-title">My Case Studies</h3>
                    <div className="work-grid">
                        <div className="work-left" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20"
                            data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <aside className="work-screens"><img src={rc} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type">
                                <h4 className="number">01</h4>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <span className="proj-name">Rare Carat</span>
                                        <span className="my-role">(UI/UX Design and Multi device browser support of web
                                            application)</span>
                                        <span className="proj-desc">A search engine that helps someone buy diamonds from any
                                            retailer intelligently. And a tool that helps any user evaluate diamonds for
                                            sale by any retailer using AI.</span>
                                    </div>
                                    <Link to="https://www.rarecarat.com" target="_blank">Visit Website</Link>
                                </div>
                            </article>
                        </div>
                        <div className="work-left" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                            data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <aside className="work-screens"><img src={msi} alt="webmsi" className="img-resp" /></aside>
                            <article className="work-type">
                                <h4 className="number">02</h4>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <span className="proj-name">Webmsi</span>
                                        <span className="proj-desc">World's leading companies trust their staffing and
                                            software</span>
                                    </div>
                                    <Link to="https://www.webmsi.com" target="_blank">Visit Website</Link>
                                </div>
                            </article>
                        </div>
                        <div className="work-left" data-aos="fade-up" data-aos-offset="10" data-aos-delay="40"
                            data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <aside className="work-screens"><img src={sys} alt="systmapp" className="img-resp" /></aside>
                            <article className="work-type">
                                <h4 className="number">03</h4>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <span className="proj-name">Systmapp</span>
                                        <span className="my-role">(UX Design and Multi device browser support of web
                                            application)</span>
                                        <span className="proj-desc">Systmapp builds enterprise software used by the UN in 50
                                            countries around the world.</span>
                                    </div>
                                    <Link to="https://www.systmapp.com" target="_blank">Visit Website</Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default LatestWork;