import vikram from '../../../assets/images/vikram.jfif';
import zinnia from '../../../assets/images/zinnia.jfif';

import './recommendations.component.scss';

const Recommendation = () => {
    return (
        <section className="received">
        <section className="container">
            <h2 className="latest-head">Received</h2>
            <article className="latest-work">
                <h3 className="left-head-title">Recommendations</h3>
                <div className="rec">
                    <div className="rec-item">
                        <div className="rec-caption">
                            <div className="rec-comment">
                                <h6>Mohd Javed is one of the greatest among all people I have ever worked with. He
                                    is very thorough in everything he does and can be depended upon to get the job done.
                                    Javed leads by example and many people at Millennium Softwares find his
                                    enthusiasm and dedication both inspiring and motivating. He is ready to deal with
                                    difficult situations and solve problems on time. He always takes care of the job.
                                    Javed always maintains very good relations with co-workers and clients. He
                                    absolutely shines in a hectic environment. Definitely worth recommending</h6>
                                <div className="rec-author">
                                    <div className="text-center">
                                        <div className="rec-img"><img src={vikram} alt="Zinnia Nandy" /></div>
                                        <div className="rec-details">
                                            <h5>Vikram Kundu</h5>
                                            <p>DevOps Engineer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rec-item active">
                        <div className="rec-caption">
                            <div className="rec-comment">
                                <h6>Javed is a good front end developer. He is a quick learner and very eager to learn
                                    new technologies. He always keeps himself updated by following blogs and articles
                                    related to front-end design and development. I wish him success in life.</h6>
                                <div className="rec-author">
                                    <div className="text-center">
                                        <div className="rec-img"><img src={zinnia} alt="Zinnia Nandy" /></div>
                                        <div className="rec-details">
                                            <h5>Zinnia Nandy</h5>
                                            <p>User Experience Manager</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </section>
    )
}

export default Recommendation;