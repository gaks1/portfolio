import '../styles/About.css';

const About = () => {
    return (
        <section id="about" class="about">
        <div class="about-top">
            <h2 class="about-header">About Me</h2>
            <p class="about-hello">Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and
            experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.</p>
            <button class="resume">Get my resume</button>
        </div>

        <div className='about-bottom'>
            <div className='Languages'>
                <div className='about-bottom-header'>
                <img src="img/HTML.png" alt="HTML" />
                <h2>Languages</h2>
                </div>
                <ul>
                <li>school</li>
                <li>school</li>
                <li>school</li>
                </ul>       
            </div>
            <div className='Frameworks'>
            <div className='about-bottom-header'>
                <img src="img/HTML.png" alt="HTML" />
                <h2>Frameworks</h2>
                </div>
                <ul>
                    <li>school</li>
                    <li>school</li>
                    <li>school</li>
                </ul>  
            </div>
            <div className='Skills'>
            <div className='about-bottom-header'>
                <img src="img/HTML.png" alt="HTML" />
                <h2>Skills</h2>
                </div>
                <ul>
                <li>school</li>
                <li>school</li>
                <li>school</li>
                </ul>  
            </div>
        </div>
    </section>
    );
}

export default About;