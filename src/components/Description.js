import shakeHandsImgPath from "../images/shaking-hands.svg";
import starImgpath from "../images/star.svg";
import phoneImgPath from "../images/phone.svg";

export default function Description() {
  return (
    <section className="description" id="how-it-works">
      <h2 className="description__title">How it works?</h2>
      <div className="description__row">
        <div className="description-element">
          <img className="description-element__img" src={phoneImgPath} />
          <p className="description-element__subtitle">
            Select a person with similar interests and plans.
          </p>
        </div>
        <div className="description-element">
          <img className="description-element__img" src={shakeHandsImgPath} />
          <p className="description-element__subtitle">
            Share your experience and motivate each other to learn.
          </p>
        </div>
        <div className="description-element">
          <img className="description-element__img" src={starImgpath} />
          <p className="description-element__subtitle">
            Grow your skills and build your career with support and good
            connections.
          </p>
        </div>
      </div>
    </section>
  );
}
