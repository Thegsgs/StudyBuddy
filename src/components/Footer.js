import facebookIconPath from "../images/Group 29.svg";
import twitterIconPath from "../images/twitter black.1.svg";
import linkedinIconPath from "../images/linkedin black.1.svg";
import youtubeIconPath from "../images/youtube color.1.svg";
import instagramIconPath from "../images/instagram black.1.svg";
import googleIconPath from "../images/googleplus black.1.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <h2 className="footer__title">STUDY BUDDY</h2>
      <ul className="footer__links">
        <li className="footer__item-link">
          <a className="footer__link" href="#header">
            Home
          </a>
        </li>
        <li className="footer__item-link">
          <a className="footer__link" href="#how-it-works">
            How it works
          </a>
        </li>
        <li className="footer__item-link">
          <a className="footer__link" href="#people">
            People
          </a>
        </li>
        <li className="footer__item-link">
          <a className="footer__link" href="#stories">
            Reviews
          </a>
        </li>
        <li className="footer__item-link">
          <a className="footer__link" href="#">
            Blog
          </a>
        </li>
      </ul>
      <div className="footer__media">
        <ul className="footer__contact-list">
          <li className="footer__contact-item">
            Email: contact@studybuddy.com
          </li>
          <li className="footer__contact-item">Phone: (684) 555-0102</li>
          <li className="footer__contact-item">
            Adress: W. Gray St. Utica, 57867
          </li>
        </ul>
        <div className="footer__social">
          <p className="footer__social-text">Social Media</p>
          <div className="footer__social-logos">
            <img
              className="footer__social-logo"
              src={facebookIconPath}
              alt="Facebook"
            />
            <img
              className="footer__social-logo"
              src={twitterIconPath}
              alt="Twitter"
            />
            <img
              className="footer__social-logo"
              src={linkedinIconPath}
              alt="Linkdein"
            />
            <img
              className="footer__social-logo"
              src={youtubeIconPath}
              alt="YouTube"
            />
            <img
              className="footer__social-logo"
              src={instagramIconPath}
              alt="Instegram"
            />
            <img
              className="footer__social-logo"
              src={googleIconPath}
              alt="Google plus"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
