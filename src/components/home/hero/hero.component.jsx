import profilePic from '../../../assets/images/android-chrome-512x512.png'
import './hero.component.scss'

const About = () => {
    return (
        <div className='hero-bg'>
            <div className="container about-content">
                <div className="about-details">
                    <div className="title"><span className='text-gray-600'>Welcome I'm,</span> Mohd Javed</div>
                    <div className="about-exp">
                        <h1 className='md:text-3xl'>I craft digital experiences that merge innovation with design.</h1>
                    </div>
                    <div className="about-more text-lg md:text-2xl">
                        <span className='text-gray-600 '>As a <span className='text-gray-900 md:text-gray-700 text-xl md:text-3xl'>Product Designer</span> and <span className='text-gray-900 md:text-gray-700 text-xl md:text-3xl'>Front End Developer</span> based in Egham, United Kingdom, I specialize in creating seamless user interfaces and memorable brands. My expertise spans <span className='text-gray-700 text-xl md:text-3xl'>UI/UX Design, Responsive Web Design, Cross-Browser Compatibility, </span> and <span className='text-gray-900 md:text-gray-700 text-xl md:text-3xl'>Front-End Development.</span></span>
                    </div>
                    <div className="connect my-9 md:mt-11">
                        <p className='text-gray-500 text-lg md:text-xl'>I’m passionate about transforming ideas into reality and always eager to collaborate on exciting projects. If you’re looking to create something remarkable, <a className="text-blue-600 underline" href="mailto:dev.javedmohd@gmail.com">let's connect!</a></p>
                    </div>
                </div>
                <div className="pic-about">
                    <div className="one-bg"></div>
                    <div className="two-bg"></div>
                    <div className="three-bg"></div>
                    <div className="pic"><img src={profilePic} alt="Mohd Javed" /> </div>
                </div>
            </div>
        </div>
    )
}

export default About;