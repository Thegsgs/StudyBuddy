import profilePicturePath from "../images/user.webp";
import mailIconPath from "../images/message-black.svg";
import ProfilePopup from "./ProfilePopup";
import burgerImgPath from "../images/fi-rr-menu-burger.svg";

export default function Header(props) {
  return (
    <header className="header" id="header">
      <div className="header__container">
        <h1 className="header__title">STUDY BUDDY</h1>
        <div className="header__links">
          <a className="header__link" href="#header">
            Home
          </a>
          <a className="header__link" href="#how-it-works">
            How it works
          </a>
          <a className="header__link" href="#people">
            People
          </a>
          <a className="header__link" href="#stories">
            Reviews
          </a>
          <a className="header__link" href="#">
            Blog
          </a>
        </div>
        <div className="header__buttons">
          <button onClick={props.openChatMenu} className="header__settings">
            <img className="header__settings-icon" src={mailIconPath} />
          </button>
          <button className="header__profile">
            <img
              className="header__profile-icon"
              src={profilePicturePath}
              onClick={props.openSettings}
            />
          </button>
          <button className="header__links-icon">
            <img className="header__links-icon" src={burgerImgPath} />
          </button>
          <ProfilePopup />
        </div>
      </div>
    </header>
  );
}
