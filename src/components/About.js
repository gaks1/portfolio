import '../styles/About.css';
import circle from '../img/circle.webp';
import Diamond from '../img/Diamond.webp';
import square from '../img/square.webp';

const About = () => {
    const resume = '/Isaac_Gakure_Resume.pdf'
    return (
        <section id="about" className="about">
        <div className="about-top">
            <h2 className="about-header">About Me</h2>
            <p className="about-hello">As a Full Stack Web Developer, I am proficient in both React and Ruby on Rails. With over 1300 hours of hands-on experience, I have mentored 2 junior developers, contributed to projects like the Hotel App and Countries app, and stay up-to-date with industry trends and technologies. I am dedicated to continuous learning and innovation. Check out my GitHub, LinkedIn, or portfolio for examples of my excellent web solutions.</p>
            <a href={ resume } target="_blank" rel="noopener noreferrer" className="resume button-color button-transform">Get my resume</a>
        </div>

        <div className='about-bottom'>
            <div className='Languages'>
                <div className='about-bottom-header'>
                <img className='img-size' src={ Diamond } alt="Languages" />
                <h2>Languages</h2>
                </div>
                <ul className='list'>
                <li>Javascript</li>
                <li>Ruby</li>
                <li>HTML</li>
                <li>CSS</li>
                </ul>       
            </div>
            <div className='Frameworks'>
            <div className='about-bottom-header'>
                <img className='img-size' src={ square } alt="Frameworks" />
                <h2>Frameworks</h2>
                </div>
                <ul className='list'>
                    <li>React</li>
                    <li>Ruby on Rails</li>
                    <li>Rspec</li>
                    <li>Capybara</li>
                    <li>Bootstrap</li>
                </ul>  
            </div>
            <div className='Skills'>
            <div className='about-bottom-header'>
                <img className='img-size' src= { circle } alt="Skills" />
                <h2>Skills</h2>
                </div>
                <ul className='list'>
                <li>Web Development</li>
                <li>API Design</li>
                <li>CLI</li>
                <li>Version Control</li>
                </ul>  
            </div>
        </div>
    </section>
    );
}

export default About;