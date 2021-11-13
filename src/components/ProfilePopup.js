import userAvatarPath from "../images/user.webp";

export default function ProfilePopup(props) {
  return (
    <div className={props.isOpen ? "profile-popup opened" : "profile-popup"}>
      <button
        className="profile-popup__btn-close"
        onClick={props.openSettings}
      />
      <div className="profile-popup__info-container">
        <img className="profile-popup__img" src={userAvatarPath} />
        <h3 className="profile-popup__name">Leio Mclaren</h3>
        <p className="profile-popup__mail">leilomc@mail.com</p>
      </div>
      <div className="profile-popup__links">
        <a className="profile-popup__link">Profile Settings</a>
        <a className="profile-popup__link">Messages</a>
        <a className="profile-popup__link">Security</a>
        <a className="profile-popup__link">Log Out</a>
      </div>
    </div>
  );
}
