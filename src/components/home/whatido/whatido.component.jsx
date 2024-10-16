import design from '../../../assets/images/design-main.svg';
import websites from '../../../assets/images/websites.svg';
import mobileweb from '../../../assets/images/mobile-web.svg';
import branding from '../../../assets/images/branding.svg';
import designConcept from '../../../assets/images/design-concept.svg';
import psdToHtml from '../../../assets/images/converting-psd-to-html.png';
import responsiveApplication from '../../../assets/images/responsive-web-design.jpg';
import mobileWebApp from '../../../assets/images/mobile-app.jpg';
import agileDevelopment from '../../../assets/images/agile.png';

import './whatido.component.scss'

const WhatIDo = () => {
    return (
        <div className='whatido-bg'>
            <section className="container whatido">
                <h2 className="text-lg pt-12 md:mb-6 uppercase text-black-600 md:text-left text-center">What I Do</h2>
                <article className="latest-work">
                    <h3 className='my-6'>Design</h3>
                    <div className="what-i-do">
                        <div className="what-i-do-info">
                            <div className='flex flex-col' data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                <p className='text-xl md:text-2xl pr-3'>I create visually engaging, memorable designs that establish strong connections with your audience. From intuitive user interfaces to seamless user experiences, my designs are crafted to captivate and engage.</p>
                                <div className="what-i-do-info-art mb-8 md:mb-none mt-8 mx-auto">
                                    <img src={design} alt="Design" className='' />
                                </div>
                            </div>
                            <div className="info-cards-wrapper" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                                data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                                data-aos-once="false">
                                <div className="info-cards shadow-md">
                                    <div className="info-icon-img pb-1 md:py-3">
                                        <img src={websites} alt="Websites and Platforms" />
                                    </div>
                                    <div className="info-cards-title text-2xl pb-3 text-blue-700">Websites and Platforms</div>
                                    <p className='text-lg leading-6'>I develop responsive websites and platforms that are both visually appealing and technically robust, ensuring an exceptional experience across all devices.</p>
                                </div>
                                <div className="info-cards shadow-md">
                                    <div className="info-icon-img pb-1 md:py-3">
                                        <img src={mobileweb} alt="Mobile Web Apps" />
                                    </div>
                                    <div className="info-cards-title text-2xl pb-3 text-blue-700">Mobile Web Apps</div>
                                    <p className='text-lg leading-6'>Bringing your ideas to life through mobile & web apps that deliver a smooth, user-friendly experience.</p>
                                </div>
                                <div className="info-cards shadow-md">
                                    <div className="info-icon-img pb-1 md:py-3">
                                        <img src={branding} alt="Strategy and Branding" />
                                    </div>
                                    <div className="info-cards-title text-2xl pb-3 text-blue-700">Strategy and Branding</div>
                                    <p className='text-lg leading-6'>I help brands define their identity through thoughtful strategy and compelling design. From logos to brand visuals, I ensure consistency and clarity across all touchpoints.</p>
                                </div>
                                <div className="info-cards shadow-md" >
                                    <div className="info-icon-img pb-1 md:py-3">
                                        <img src={designConcept} alt="Design Concept" />
                                    </div>
                                    <div className="info-cards-title text-2xl pb-3 text-blue-700">Design Concept</div>
                                    <p className='text-lg leading-6'>From concept to execution, I work with you to create fresh, innovative design concepts that align with your vision and resonate with your target audience.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
                <article className="latest-work border-t border-gray-300 develop">
                    <h3 className='my-6'>Development</h3>
                    <div className="what-i-do">
                        <p className='text-base md:text-2xl pb-10'>I build digital solutions with scalable architecture, utilizing modern technologies and ensuring top-notch data security. From idea to deployment, I create fast, secure, and responsive products tailored to your needs.</p>
                        <div className="what-i-do-info dev">
                            <div className="info-cards-wrapper">
                                <div className="info-cards border border-gray" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                    <div className='info-cards-img border-b border-gray'>
                                        <img src={psdToHtml} alt="PSD to HTML conversion" className='icon-in-bg' />
                                    </div>
                                    <div className='info-cards-content'>
                                        <div className="info-cards-title text-2xl py-4 text-blue-700">PSD to HTML conversion</div>
                                        <p className='text-lg leading-6 pb-6 px-12'>Transforming your designs into pixel-perfect, responsive websites with clean, efficient code that brings your vision to life.</p>
                                    </div>
                                </div>
                                <div className="info-cards border border-gray" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                    <div className='info-cards-img border-b border-gray'>
                                        <img src={responsiveApplication} alt="Responsive Web Design" className='icon-in-bg' />
                                    </div>
                                    <div className='info-cards-content'>
                                        <div className="info-cards-title text-2xl py-4 text-blue-700">Responsive Web Design</div>
                                        <p className='text-lg leading-6 pb-6 px-12'>Creating websites that adapt seamlessly to all devices, providing an optimal user experience no matter the screen size.</p>
                                    </div>
                                </div>
                                <div className="info-cards border border-gray" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                    <div className='info-cards-img border-b border-gray'>
                                        <img src={mobileWebApp} alt="Mobile Web App Development" className='icon-in-bg' />
                                    </div>
                                    <div className='info-cards-content'>
                                        <div className="info-cards-title text-2xl py-4 text-blue-700">Mobile Web App Development</div>
                                        <p className='text-lg leading-6 pb-6 px-12'>Building high-performance mobile web applications that are user-friendly, efficient, and accessible from any mobile device.</p>
                                    </div>
                                </div>
                                <div className="info-cards border border-gray" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                                    <div className='info-cards-img border-b border-gray'>
                                        <img src={agileDevelopment} alt="Agile Software Development" className='icon-in-bg' />
                                    </div>
                                    <div className='info-cards-content'>
                                        <div className="info-cards-title text-2xl py-4 text-blue-700">Agile Software Development</div>
                                        <p className='text-lg leading-6 pb-6 px-12'>Developing solutions using agile methodologies, ensuring continuous improvement, quick iterations, and flexibility throughout the project lifecycle.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    )
}

export default WhatIDo;