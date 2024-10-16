import MySelf from "./about/myself.component";
import Education from "./about/education/education.component";
import Experience from "./about/experience/experience.component";

const AboutComponent = () => {
    return (
        <div className="about">
            <MySelf />
            <Education />
            <Experience />
        </div>
    );
};

export default AboutComponent;