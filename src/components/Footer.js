import '../styles/Contact.css';
import Twitter from '../img/darkTwitter.png';
import Linkedin from '../img/darkLinkedin.png';
import Medium from '../img/darkMedium.png';
import Github from '../img/darkGitHub.png';
import Angelist from '../img/darkAngelist.png';


const Footer = () => {
    return (
<section id="contact" className="contact-section">
  <div className="contact">
            <p className="contact-par">If you have an application you are interested in developing, a feature that you need built or
                a project that needs
                coding. I’d love to help with it</p>
            <form className="contact-form" action="https://formspree.io/f/myyazwzw" method="POST">
<input className="name" type="text" name="username"  placeholder="Yeremias" maxLength="50" required></input>
                <input className="email"  type="email" name="useremail"  placeholder="natajayanj14@gmail.com" required></input>
                    <textarea className="feedback" name="userfeedback" placeholder="Write your message here" cols="30" rows="10" maxLength="500"
                        required></textarea>
                        <small className="error"></small>
                        <button className="button-transform form-button button-color button-transform">Get It Touch</button>
            </form>
            </div>
            <div className='bottom'>
            <ul className="contact-bottom">
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
              <p className="copy">iwanyoike65@gmail.com</p>
              </div>
        </section>
    );
    }

export default Footer;