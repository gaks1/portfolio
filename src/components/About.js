import '../styles/About.css';
import circle from '../img/circle.png';
import Diamond from '../img/Diamond.png';
import square from '../img/square.png';

const About = () => {
    const resume = '/Isaac_Gakure_Resume.pdf'
    return (
        <section id="about" class="about">
        <div className="about-top">
            <h2 className="about-header">About Me</h2>
            <p className="about-hello">Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and
            experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
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