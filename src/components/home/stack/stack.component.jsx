
import designer from '../../../assets/images/designer.svg';
import frontend from '../../../assets/images/frontend.svg';
import learning from '../../../assets/images/learning.svg';

import './stack.component.scss'

const Stack = () => {
    return (
        <section className="skills-stack">
            <div className="container" data-aos="fade-up" data-aos-offset="20" data-aos-delay="30" data-aos-duration="1000"
                data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                <h2 className="text-lg mb-7 uppercase text-violet-600 md:text-left text-center">Skills Stack</h2>
                <article className="latest-work">
                    <h3 className="none">Design</h3>
                    <div className="horizontal-bars mb-10">
                        <div className="skills-sections bg-white drop-shadow-sm border border-gray-200 text-center" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                            data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div className='mt-6'><img className='mx-auto' src={designer} alt="Designer" /></div>
                            <h3 className='my-6'>Designer</h3>
                            <p className='text-lg leading-6'>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                            <div className="design-tools text-xl">Things I enjoy designing:</div>
                            <p className='leading-5'>UX, UI, Websites, Mobile Apps, Logos</p>
                            <div className="design-tools text-xl">Design Tools I use:</div>
                            <ul className="service-stack mb-6">
                                <li>Adobe Photoshop</li>
                                <li>Adobe Illustrator</li>
                                <li>Figma</li>
                                <li>Pen & Paper</li>
                            </ul>
                        </div>
                        <div className="skills-sections bg-white drop-shadow-sm border border-gray-200 text-center" data-aos="fade-up" data-aos-offset="20" data-aos-delay="40"
                            data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div className='mt-6'><img className='mx-auto' src={frontend} alt="Designer" /></div>
                            <h3 className='my-6'>Frontend Developer</h3>
                            <p className='text-lg leading-6'>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                            <div className="design-tools text-xl">Languages I speak:</div>
                            <p className='leading-5'>HTML, CSS, SCSS, JavaScript, React.js,...</p>
                            <div className="design-tools text-xl">Dev Tools:</div>
                            <ul className="service-stack mb-6">
                                <li>Python</li>
                                <li>Vue.js</li>
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                                <li>Next.js</li>
                                <li>Django</li>
                                <li>Postgresql</li>
                                <li>SQL...</li>
                            </ul>
                        </div>
                        <div className="skills-sections bg-white drop-shadow-sm border border-gray-200 text-center" data-aos="fade-up" data-aos-offset="30" data-aos-delay="50"
                            data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div className='mt-6'><img className='mx-auto' src={learning} alt="Designer" /></div>
                            <h3 className='my-6'>Learning</h3>
                            <p className='text-lg leading-6'>I continuously develop my skills because I'm a geek of learning trending tech things and spoken languages.</p>
                            <div className="design-tools text-xl">Dev:</div>
                            <p className='leading-5'>Node.js, Next.js, MongoDB, Data Analysis, Data Visualization, Business Intelligence... </p>
                            <div className="design-tools text-xl">Spoken:</div>
                            <ul className="service-stack mb-6">
                                <li>English</li>
                                <li>Hindi</li>
                            </ul>
                        </div>
                    </div>
                    <p className="bottom-note text-lg md:text-xl" data-aos="fade-up" data-aos-offset="20" data-aos-delay="40" data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        Highly motivated Software Engineer (Front End) with a solid foundation in web development and a growing passion for data science. I’m eager to apply my skills in JavaScript, Vue.js, React.js, HTML, CSS, Python, and SQL to create impactful user experiences and contribute to building robust data-driven solutions. I’ve successfully led projects that enhance customer value and elevate product quality, particularly through UI/UX design and development in the e-commerce sector.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Stack;