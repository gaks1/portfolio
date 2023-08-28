import '../styles/Header.css';
import Twitter from '../img/Twitter.png';
import Linkedin from '../img/Linkedin.png';
import Medium from '../img/Medium.png';
import Github from '../img/GitHub.png';
import Angelist from '../img/Angelist.png';

const Header = () => {
    return (
        <section className="text-section">
            <div className="text-container">
              <h1 className="header orange">Hey There, <br /> I’m Isaac</h1>
              <p className="header-paragraph white">I’m a software developer! I can help you build a product, feature, or website. Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hesitate to contact me.</p>
            </div>
            <ul className="socials">
                <li>
                  <a href="https://twitter.com/gakure_isa47253">
                      <img src={ Twitter } alt="twitter" />
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/isaacgakurewanyoike/">
                      <img src={ Linkedin }  alt="Linked In" />
                  </a>
                </li>
                <li className="medium">
                  <a href="https://medium.com/@iwanyoike65">
                      <img src={ Medium }  alt="Medium" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/gaks1">
                      <img src={ Github }  alt="Github" />
                  </a>
                </li>
                <li>
                  <a href="https://wellfound.com/u/isaacgakurewanyoike">
                      <img src={ Angelist }  alt="Angelist" />
                  </a>
                </li>
              </ul>
        </section>
      );
    
}

export default Header;