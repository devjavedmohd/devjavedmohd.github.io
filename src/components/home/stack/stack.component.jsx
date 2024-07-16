
import designer from '../../../assets/images/designer.svg';
import frontend from '../../../assets/images/frontend.svg';
import learning from '../../../assets/images/learning.svg';

import './stack.component.scss'

const Stack = () => {
    return (
        <section className="skills-stack">
            <div className="container" data-aos="fade-up" data-aos-offset="20" data-aos-delay="30" data-aos-duration="1000"
                data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                <h2 className="latest-head">Skills Stack</h2>
                <article className="latest-work">
                    <h3 className="none">Design</h3>
                    <div className="horizontal-bars">
                        <div className="skills-sections" data-aos="fade-up" data-aos-offset="10" data-aos-delay="30"
                            data-aos-duration="1000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div><img src={designer} alt="Designer" /></div>
                            <h3>Design</h3>
                            <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
                            <div className="design-tools">Things I enjoy designing:</div>
                            <p>UX, UI, Web, Mobile, Apps, Logos</p>

                            <div className="design-tools">Design Tools:</div>
                            <ul className="service-stack">
                                <li>Photoshop</li>
                                <li>Illustrator</li>
                                <li>Pen & Paper</li>
                                <li>Figma</li>
                            </ul>
                        </div>
                        <div className="skills-sections" data-aos="fade-up" data-aos-offset="20" data-aos-delay="40"
                            data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div><img src={frontend} alt="Designer" /></div>
                            <h3>Development</h3>
                            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
                            <div className="design-tools">Languages I speak:</div>
                            <p>HTML, CSS, SASS, JavaScript, Python, SQL...</p>

                            <div className="design-tools">Dev Tools:</div>
                            <ul className="service-stack">
                                <li>Bootstrap</li>
                                <li>Tailwind</li>
                                <li>jQuery</li>
                                <li>Vue.js</li>
                                <li>React.js</li>
                                <li>Next.js</li>
                                <li>Python</li>
                                <li>...</li>
                            </ul>
                        </div>
                        <div className="skills-sections" data-aos="fade-up" data-aos-offset="30" data-aos-delay="50"
                            data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-mirror="true"
                            data-aos-once="false">
                            <div><img src={learning} alt="Designer" /></div>
                            <h3>Learning</h3>
                            <p>I continuously develop my skills because I'm a geek of learning trending tech things and
                                spoken languages.</p>
                            <div className="design-tools">Dev:</div>
                            <p>Vue.js, Angular, Node.js, Quasar, Ionic, MongoDB, Salesforce, Visualforce</p>

                            <div className="design-tools">Spoken:</div>
                            <ul className="service-stack">
                                <li>English</li>
                                <li>German</li>

                            </ul>
                        </div>
                    </div>
                    <p className="bottom-note" data-aos="fade-up" data-aos-offset="20" data-aos-delay="40"
                        data-aos-duration="1500" data-aos-easing="ease-in-out" data-aos-mirror="true" data-aos-once="false">
                        Highly motivated software engineer with a strong foundation in web development and a growing passion for data science.
                        Eager to leverage my skills in JavaScript, Vue.js, React.js, HTML, CSS, Python and SQL to create impactful user
                        experiences and contribute to robust data infrastructure. Successfully led projects to improve customer value and product
                        quality through UI/UX design and development, particularly in the e-commerce sector.
                    </p>
                </article>
            </div>
        </section>
    )
}

export default Stack;