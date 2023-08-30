import '../styles/Header.css';
import Twitter from '../img/Twitter.webp';
import Linkedin from '../img/Linkedin.webp';
import Medium from '../img/Medium.webp';
import Github from '../img/GitHub.webp';
import Angelist from '../img/Angelist.webp';

const Header = () => {
    return (
        <section className="text-section">
            <div className="text-container">
              <h1 className="header orange">Hey There, <br /> I’m Isaac</h1>
              <h2 className="header-sub white">I'm a Full-Stack web Developer</h2>
              <p className="header-paragraph white">I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
            </div>
            <ul className="socials">
            <li>
                  <a href="https://twitter.com/gakure_isa47253" target="_blank" rel="noopener noreferrer">
                      <img className='btransform' src={ Twitter } alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/isaacgakurewanyoike/" target="_blank" rel="noopener noreferrer">
                      <img className='btransform' src={ Linkedin }  alt="Linked In" />
                  </a>
                </li>
                <li className="medium">
                  <a href="https://medium.com/@iwanyoike65" target="_blank" rel="noopener noreferrer">
                      <img className='btransform' src={ Medium }  alt="Medium" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/gaks1" target="_blank" rel="noopener noreferrer">
                      <img className='btransform' src={ Github }  alt="Github" />
                  </a>
                </li>
                <li>
                  <a href="https://wellfound.com/u/isaacgakurewanyoike" target="_blank" rel="noopener noreferrer">
                      <img className='btransform' src={ Angelist }  alt="Angelist" />
                  </a>
                </li>
              </ul>
        </section>
      );
    
}

export default Header;