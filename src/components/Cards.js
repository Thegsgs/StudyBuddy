import { useState } from "react";
import { useForm } from "react-hook-form";
import Card from "./Card";

export default function Cards(props) {
  const { register, handleSubmit } = useForm();
  const [studyFieldValue, setStudyFieldValue] = useState("");
  const [genderValue, setGenderValue] = useState("");
  //const [experienceValue, setExperienceValue] = useState("");

  function onSubmit(data) {
    setStudyFieldValue(data.field);
    setGenderValue(data.gender);
    console.log(data);
  }

  return (
    <section className="cards" id="people">
      <h2 className="cards__title">Find people from your field of study</h2>
      <form className="sorting-form" onSubmit={handleSubmit(onSubmit)}>
        <select
          className="sorting-form__dropdown-list"
          id="field-of-study"
          name="study"
          defaultValue="some value"
          {...register("field")}
        >
          <option className="sorting-form__dropdown-item" value="">
            Field of study
          </option>
          <option className="sorting-form__dropdown-item" value="Design">
            Design
          </option>
          <option
            className="sorting-form__dropdown-item"
            value="Web Development"
          >
            Web Development
          </option>
          <option className="sorting-form__dropdown-item" value="Data Science">
            Data Science
          </option>
          <option className="sorting-form__dropdown-item" value="Marketing">
            Marketing
          </option>
          <option
            className="sorting-form__dropdown-item"
            value="Data Analytics"
          >
            Data Analytics
          </option>
        </select>

        <select
          className="sorting-form__dropdown-list"
          id="study-level"
          name="study-level"
          {...register("level")}
        >
          <option className="sorting-form__dropdown-item" value="">
            Level
          </option>
          <option className="sorting-form__dropdown-item" value="Beginner">
            Beginner
          </option>
          <option className="sorting-form__dropdown-item" value="Intermediate">
            Intermediate
          </option>
          <option className="sorting-form__dropdown-item" value="Advanced">
            Advanced
          </option>
        </select>

        <select
          className="sorting-form__dropdown-list"
          id="user-gender"
          name="gender"
          {...register("gender")}
        >
          <option className="sorting-form__dropdown-item" value="">
            Gender
          </option>
          <option className="sorting-form__dropdown-item" value="Male">
            Male
          </option>
          <option className="sorting-form__dropdown-item" value="Female">
            Female
          </option>
          <option className="sorting-form__dropdown-item" value="Other">
            Other
          </option>
        </select>
        <button className="sorting-form__submit-button" type="submit">
          Search
        </button>
      </form>
      <div className="cards__program">
        <div className="cards__container">
          {props.cards.map((card, index) => {
            if (
              card.subtitle.includes(studyFieldValue) &&
              card.gender.includes(genderValue)
            ) {
              return (
                <Card
                  key={index}
                  card={card}
                  openChat={props.openChat}
                  openCard={props.openCard}
                  isOpen={props.isOpen}
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
