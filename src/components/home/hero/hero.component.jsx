import profilePic from '../../../assets/images/android-chrome-512x512.png'
import './hero.component.scss'

const About = () => {
    return (
        <div className="container about-content">
            <div className="about-details">
                <div className="title"><span>Welcome I'm,</span> Mohammad Javed</div>
                <div className="about-exp">
                    <h1>Developing digital products, brands, and user experience</h1>
                </div>
                <div className="about-more">
                    <span>a Product Designer and Front End Developer in Gurgaon.</span>
                    <span>I specialize in UI/UX design, Responsive Web Design, Adaptive Design, Cross Browser Design and
                        Front End Development. I’m always available for interesting collaborations and fun side
                        projects. If you would like to work together, feel free to get in touch.</span>
                </div>
                <div className="connect">
                    <a className="connect-about" href="mailto:dev.javedmohd@gmail.com">Connect with Me</a>
                </div>
            </div>
            <div className="pic-about">
                <div className="one-bg"></div>
                <div className="two-bg"></div>
                <div className="three-bg"></div>
                <div className="pic"><img src={profilePic} alt="Mohammad Javed" /> </div>
            </div>
        </div>
    )
}

export default About;