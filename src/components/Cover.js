import leftManImgPath from "../images/left_man.png";
import rightManImgPath from "../images/right_man.png";
import rightManMobileImgPath from "../images/right_man_mobile.png";
import leftManMobileImgPath from "../images/left_man_mobile.png";

export default function Cover() {
  return (
    <div className="cover">
      <h2 className="cover__title">
        Find motivated friends
        <br />
        and learn new skills together
      </h2>
      <p className="cover__subtitle">
        Find your companion for productive learning.
        <br />
        Share plans and experiences. Discuss, motivate and build new helpful
        connections with STUDY BUDDY!
      </p>
      <div className="cover__button-row">
        <button className="cover__button-find">Find a buddy</button>
      </div>
      <img
        className="cover__left-man"
        src={leftManImgPath}
        alt="cover picture"
      />
      <img
        className="cover__right-man"
        src={rightManImgPath}
        alt="cover picture"
      />
      <img
        className="cover__left-man_mobile"
        src={leftManMobileImgPath}
        alt="cover picture"
      />
      <img
        className="cover__right-man_mobile"
        src={rightManMobileImgPath}
        alt="cover picture"
      />
    </div>
  );
}
