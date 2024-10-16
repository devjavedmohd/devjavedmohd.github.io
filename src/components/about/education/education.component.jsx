import student from '../../../assets/images/student.svg';
import school from '../../../assets/images/school.svg';
import communication from '../../../assets/images/communication.svg';

import './education.component.scss';

const Education = () => {
    return (
        <section className="section-five">
            <header className="container">
                <section>
                    <div className="educational-set">
                        <div className="educational-title-wrapper">
                            <span className="educational-title">Qualification</span>
                            <span className="educational-subtitle">My Education</span>
                        </div>
                        <div className="educational-set-wrapper">
                            <div className="educational-right">
                                <div className="classes-edu"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="20"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="20"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false"><img src={student} alt="Master"/></div>
                                    <div className="right-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="30"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false">
                                        <div className="tag">University</div>
                                        <div className="degree">Master's in Data Science and Analytics</div>
                                        <div className="institution">Royal Holloway University of London, London UK</div>
                                        <div className="duration"><span>Session -</span> 2023-24</div>
                                        <div className="space-bar"></div>
                                        <div className="degree">Bachelors in Computer Application(BCA)</div>
                                        <div className="institution">Calorx Teachers University, A'bad</div>
                                        <div className="duration"><span>Session -</span> 2012-15</div>
                                    </div>
                                </div>
                                <div className="classes-edu"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="10"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="20"
                                        data-aos-duration="1500"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false"><img src={school} alt="Schooling"/></div>
                                    <div className="right-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="30"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false">
                                        <div className="tag">Academic</div>
                                        <div className="degree">Intermediate (12th)</div>
                                        <div className="institution">Haryana Board of School Education, Bhiwani</div>
                                        <div className="duration"><span>Session -</span> 2010-11</div>
                                    </div>
                                </div>
                                <div className="classes-edu"
                                    data-aos="fade-up"
                                    data-aos-offset="10"
                                    data-aos-delay="10"
                                    data-aos-duration="1500"
                                    data-aos-easing="ease-in-out"
                                    data-aos-mirror="true"
                                    data-aos-once="false">
                                    <div className="left-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="20"
                                        data-aos-duration="1000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false"><img src={communication} alt="Web Designing and Development" /></div>
                                    <div className="right-edu"
                                        data-aos="fade-up"
                                        data-aos-offset="10"
                                        data-aos-delay="30"
                                        data-aos-duration="2000"
                                        data-aos-easing="ease-in-out"
                                        data-aos-mirror="true"
                                        data-aos-once="false">
                                        <div className="tag">Professional</div>
                                        <div className="degree">Arena Animation Academy Specialist Program(AAASP)</div>
                                        <div className="institution">Arena Animation, Gurgaon</div>
                                        <div className="duration"><span>Session -</span> 2008-10</div>
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


export default Education;