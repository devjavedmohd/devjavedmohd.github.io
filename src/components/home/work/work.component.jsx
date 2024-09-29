import { useEffect } from 'react';

import { Link } from 'react-router-dom';

import rc from '../../../assets/images/rc.png';
import rcLogo from '../../../assets/images/rc-logo.svg';
import bri from '../../../assets/images/bribooks.jpg';
import byp from '../../../assets/images/byp.png';
import bypLogo from '../../../assets/images/branding/byp.svg';
import briBooks from '../../../assets/images/branding/bribooks.svg'
import urbanvie from '../../../assets/images/branding/urbanvie.svg';
import urbanvieImage from '../../../assets/images/urbanvie.png';
import primeux from '../../../assets/images/primeux.jpg';

import Logos from './logos';

import './work.component.scss';

const LatestWork = () => {

    useEffect(() => {
        // Select all buttons with the class 'visit-website'
        const buttons = document.querySelectorAll('.visit-website');

        const handleMouseEnter = (e) => {
            const button = e.target; // The button being hovered
            const { top, left } = button.getBoundingClientRect();
            const mouseX = e.clientX - left; // X position relative to the button
            const mouseY = e.clientY - top;  // Y position relative to the button

            // Set the position of the circular effect
            button.style.setProperty('--mouse-x', `${mouseX}px`);
            button.style.setProperty('--mouse-y', `${mouseY}px`);

            // Add the class that triggers the circular hover effect
            button.classList.add('hover-effect');
        };

        const handleMouseLeave = (e) => {
            // Remove the class after the mouse leaves
            e.target.classList.remove('hover-effect');
        };

        // Add event listeners to all 'visit-website' buttons
        buttons.forEach(button => {
            button.addEventListener('mouseenter', handleMouseEnter);
            button.addEventListener('mouseleave', handleMouseLeave);
        });

        return () => {
            // Cleanup event listeners
            buttons.forEach(button => {
                button.removeEventListener('mouseenter', handleMouseEnter);
                button.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <section className='work-head pt-12'>
            <div className="container">
                <h2 className="latest-head mt-0">Work</h2>
                <Logos />
                <article className="latest-work">
                    <h3 className="left-head-title mb-7 md:mb-7">Website Design and Development</h3>
                    <div className="work-grid flex flex-wrap w-full justify-center">
                        <div className="work-left bg-white md:p-8 p-4 flex mb-8 w-full" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <aside className="work-screens flex items-start"><img src={rc} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type md:ml-8 flex items-center">
                                <div className='flex flex-wrap justify-start border-b border-gray md:mb-4 mb-7'>
                                    <h4 className="number mr-6">01</h4>
                                    <img src={rcLogo} alt='Rare Carat Inc.' className='logo' />
                                </div>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <p className='text-base leading-5'>Rare Carat is a diamond marketplace that helps customers buy diamonds from retailers and wholesalers. Rare Carat has grown to be America's #1 marketplace for diamonds, and was called the “Secret to Buying A Diamond” by the New York Times.</p>
                                        <span className="my-role text-xl">My Role:</span>
                                        <ul className='text-base leading-6 text-gray-500'>
                                            <li className='leading-5'>- Designing User Interface</li>
                                            <li className='leading-5'>- Converting PSD/Figma design to code</li>
                                            <li className='leading-5'>- Responsive Web Design that support multiple devices (Mobile, Tablet, Desktop)</li>
                                            <li className='leading-5'>- SEO Considerations and Quality Assurance</li>
                                            <li className='leading-5'>
                                                <span className='mr-2 text-xl text-gray-800'>Skill Set:</span>
                                                <span>Photoshop, Figma, HTML, CSS, JavaScript, Vue.js, Quasar.js, React.js</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className='visit-website mt-6' to="https://www.rarecarat.com" target="_blank">Visit Website</Link>
                                </div>
                            </article>
                        </div>
                        <div className="work-left bg-white md:p-8 p-4 flex mb-8 w-full" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <aside className="work-screens flex items-start"><img src={bri} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type md:ml-8 flex items-center">
                                <div className='flex flex-wrap justify-start border-b border-gray md:mb-4 mb-7'>
                                    <h4 className="number mr-6">02</h4>
                                    <img src={briBooks} alt='Rare Carat Inc.' className='logo' />
                                </div>
                                <div className="left-head-title">
                                    <div className="about-project-title w-full">
                                        <p className='text-base leading-5'>BriBooks is the world's leading children creative writing platform, enabling children of all ages to learn creative writing, publish their books online, and etc.</p>
                                        <span className="my-role text-xl">My Role:</span>
                                        <ul className='text-base leading-6 text-gray-500'>
                                            <li className='leading-5'>- Designing User Interface</li>
                                            <li className='leading-5'>- Converting PSD/Figma design to code</li>
                                            <li className='leading-5'>- Responsive Web Design that support multiple devices (Mobile, Tablet, Desktop)</li>
                                            <li className='leading-5'>- SEO Considerations and Quality Assurance</li>
                                            <li className='leading-5'>
                                                <span className='mr-2 text-xl text-gray-800'>Skill Set:</span>
                                                <span>Figma, HTML, CSS, JavaScript, React.js, Bootstrap</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className='visit-website mt-6' to="https://www.bribooks.com/" target="_blank">Visit Website</Link>
                                </div>
                            </article>
                        </div>
                        <div className="work-left bg-white md:p-8 p-4 flex mb-8 w-full" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <aside className="work-screens flex items-start"><img src={byp} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type md:ml-8 flex items-center">
                                <div className='flex flex-wrap justify-start border-b border-gray md:mb-4 mb-7'>
                                    <h4 className="number mr-6">03</h4>
                                    <img src={bypLogo} alt='Book Your Pet' className='logo' />
                                </div>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <p className='text-base leading-5'>At Book Your Pet, we create simple tech #solutions for busy pet people like you, to help you become easier to do business with. Then you and your customers can both get back more of the most...</p>
                                        <span className="my-role text-xl">My Role:</span>
                                        <ul className='text-base leading-6 text-gray-500'>
                                            <li className='leading-5'>- Designing User Interface</li>
                                            <li className='leading-5'>- Converting PSD/Figma design to code</li>
                                            <li className='leading-5'>- Responsive Web Design that support multiple devices (Mobile, Tablet, Desktop)</li>
                                            <li className='leading-5'>- SEO Considerations and Quality Assurance</li>
                                            <li className='leading-5'>
                                                <span className='mr-2 text-xl text-gray-800'>Skill Set:</span>
                                                <span>Figma, HTML, CSS, JavaScript, React.js, Bootstrap</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className='visit-website visit-website mt-6' to="https://www.bookyourpet.com" target="_blank">Visit Website</Link>
                                </div>
                            </article>
                        </div>
                        <div className="work-left bg-white md:p-8 p-4 flex mb-8 w-full" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <aside className="work-screens flex items-start"><img src={urbanvieImage} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type md:ml-8 flex items-center">
                                <div className='flex flex-wrap justify-start border-b border-gray md:mb-4 mb-7'>
                                    <h4 className="number mr-6">04</h4>
                                    <img src={urbanvie} alt='Book Your Pet' className='logo' />
                                </div>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <p className='text-base leading-5'>UrbanVie is The Property Management Software with the Human Touch created in NYC by real estate pros for real estate pros and that provide dashboard.</p>
                                        <span className="my-role text-xl">My Role:</span>
                                        <ul className='text-base leading-6 text-gray-500'>
                                            <li className='leading-5'>- Designing User Interface</li>
                                            <li className='leading-5'>- Converting PSD/Figma design to code</li>
                                            <li className='leading-5'>- Responsive Web Design that support multiple devices (Mobile, Tablet, Desktop)</li>
                                            <li className='leading-5'>- SEO Considerations and Quality Assurance</li>
                                            <li className='leading-5'>
                                                <span className='mr-2 text-xl text-gray-800'>Skill Set:</span>
                                                <span>Figma, HTML, CSS, JavaScript, Wordpress, Elementor, Bootstrap</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className='visit-website mt-6' to="https://urbanvie.com/" target="_blank">Visit Website</Link>
                                </div>
                            </article>
                        </div>
                        <div className="work-left bg-white md:p-8 p-4 flex mb-8 w-full" data-aos="fade-up" data-aos-offset="10" data-aos-delay="20" data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                            <aside className="work-screens flex items-start"><img src={primeux} alt="Rare Carat" className="img-resp" /></aside>
                            <article className="work-type md:ml-8 flex items-center">
                                <div className='flex flex-wrap justify-start border-b border-gray md:mb-4 mb-7'>
                                    <h4 className="number mr-6">05 <span className='text-3xl text-blue-700'>PrimeUX.us</span></h4>
                                </div>
                                <div className="left-head-title">
                                    <div className="about-project-title">
                                        <p className='text-base leading-5'>Prime UX is a cutting-edge design solutions provider specializing in creating intuitive and visually appealing web and mobile applications. With a team of experienced designers, Prime UX focuses on delivering high-quality user interfaces (UI) and user experiences (UX) that drive engagement and usability for both desktop and mobile platforms.</p>
                                        <span className="my-role text-xl">My Role:</span>
                                        <ul className='text-base leading-6 text-gray-500'>
                                            <li className='leading-5'>- Designing User Interface</li>
                                            <li className='leading-5'>- Converting PSD/Figma design to code</li>
                                            <li className='leading-5'>- Responsive Web Design that support multiple devices (Mobile, Desktop)</li>
                                            <li className='leading-5'>- SEO Considerations and Quality Assurance</li>
                                            <li className='leading-5'>
                                                <span className='mr-2 text-xl text-gray-800'>Skill Set:</span>
                                                <span>Figma, HTML, CSS, JavaScript, Next.js, Varcel, Bootstrap</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link className='visit-website mt-6' to="https://www.primeux.us/" target="_blank">Visit Website</Link>
                                </div>
                            </article>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default LatestWork;
