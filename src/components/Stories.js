import reviwer1ImgPath from "../images/paul.png";
import reviewer2ImgPath from "../images/naomi.png";
import reviewer3ImgPath from "../images/stephanie.png";

export default function Stories() {
  return (
    <section className="stories" id="stories">
      <h2 className="stories__title">Stories from our members</h2>
      <div className="stories__row">
        <div className="stories-element">
          <img className="stories-element__img" src={reviwer1ImgPath} />
          <h3 className="stories-element__title">Paul Castanie</h3>
          <p className="stories-element__subtitle">
            StudyBuddy is one of the best designed & most comfortable websited
            for meeting new friends in your profession. Great stuff! If you
            happen to visit SanFran, don't miss the chance to witness it
            yourself. We grow our connections together and we gonna create our
            firs app together.
          </p>
        </div>
        <div className="stories-element">
          <img className="stories-element__img" src={reviewer2ImgPath} />
          <h3 className="stories-element__title">Naomi Brit</h3>
          <p className="stories-element__subtitle">
            People here are super nice. I met people with same interests and we
            help each other to learn the world situation. Spent a week at UCSF
            and this was a very nice break for the parental unit.{" "}
          </p>
        </div>
        <div className="stories-element">
          <img className="stories-element__img" src={reviewer3ImgPath} />
          <h3 className="stories-element__title">Stephanie Riverali</h3>
          <p className="stories-element__subtitle">
            I found the perfect student for me, I became able to speak in
            another language and enjoyed meeting new people from other cultures.
            We shared our plans and motivated each other while working on our
            assignments. I've improved my professional skills, without bothering
            my close friends!
          </p>
        </div>
      </div>
      <button className="stories__find-button">Find your StudyBuddy</button>
    </section>
  );
}
