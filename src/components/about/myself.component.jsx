import profilePic from '../../assets/images/android-chrome-512x512.png';

import './myself.component.scss';

const MySelf = () => {
    return (
        <div className="myself about-content">
            <div className="pic-about">
                <div className="pic"><img src={profilePic} alt="pic" /></div>
            </div>
            <div className="about-details">
                <div className="title"><span>Hi I'm,</span> Mohd Javed</div>
                <div className="about-more pb-12 text-lg md:text-2xl">
                    <span className='bottom-space mb-4'>I grew up in a village Dhulawat in the Gurugram (Mewat) District of India, where my educational journey began. After completing my primary education, I moved to town for secondary school. Initially, I pursued a diploma in 3D animation, but my growing fascination with the tech industry led me to shift gears towards self-learning and eventually earning a Bachelor's degree in Computer Science.</span>
                    <span className='bottom-space mb-4'>I started my career as a graphic designer and, step by step, expanded my skill set, evolving with emerging technologies. Currently, I’m pursuing a Master’s in Data Science and Analytics at Royal Holloway, University of London, deepening my expertise in this rapidly growing field.</span>
                    <span className='bottom-space md:mb-4'>I’m passionate about continuous learning and embracing new technologies as I move forward in my journey.</span>
                </div>
            </div>
        </div>
    )
}

export default MySelf;