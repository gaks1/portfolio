import '../styles/Contact.css';
import Twitter from '../img/Twitter.png';
import Linkedin from '../img/Linkedin.png';
import Medium from '../img/Medium.png';
import Github from '../img/GitHub.png';
import Angelist from '../img/Angelist.png';

const Footer = () => {
    return (
<section id="contact" class="contact-section">
  <div class="contact">
            <p class="contact-par">If you have an application you are interested in developing, a feature that you need built or
                a project that needs
                coding. I’d love to help with it</p>
            <form class="contact-form" action="https://formspree.io/f/myyazwzw" method="POST">
<input class="name" type="text" name="username"  placeholder="Yeremias" maxlength="30" required></input>
                <input class="email"  type="email" name="useremail"  placeholder="natajayanj14@gmail.com" required></input>
                    <textarea class="feedback" name="userfeedback" placeholder="Write your message here" cols="30" rows="10" maxlength="500"
                        required></textarea>
                        <small class="error"></small>
                        <button class="form-button">Get It Touch</button>
            </form>
            </div>
            <ul className="contact-bottom">
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

export default Footer;