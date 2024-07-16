import profilePic from '../../assets/images/android-chrome-512x512.png';

import './myself.component.scss';

const MySelf = () => {
    return (
        <div className="myself about-content">
            <div className="pic-about">
                <div className="pic"><img src={profilePic} alt="pic" /></div>
            </div>
            <div className="about-details">
                <div className="title"><span>Hi I'm,</span> Mohammad Javed</div>
                <div className="about-more">
                    <span className='bottom-space'>Hi, I'm Mohammad Javed. I was born in a small village in the Mewat District of India. My journey in education began in the village, where I completed my primary schooling before moving to town for secondary education.</span>
                    <span className='bottom-space'>Initially, I pursued a diploma in 3D animation, but my fascination with the software technology industry led me to pivot towards self-learning. Subsequently, I completed my Bachelor's degree in Computer Science, marking the beginning of my journey into the tech world.</span>
                    <span className='bottom-space'>I kickstarted my career as a graphic designer and gradually honed my skills step by step. I have a passion for learning emerging technologies and continuously evolving myself.</span>
                    <span className='bottom-space'>Currently, I am pursuing my Master's degree in Data Science and Analytics at Royal Holloway, University of London, UK, furthering my knowledge and expertise in this rapidly growing field.</span>
                </div>
            </div>
        </div>
    )
}

export default MySelf;