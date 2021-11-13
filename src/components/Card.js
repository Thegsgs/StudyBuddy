import Tag from "./Tag";

export default function Card(props) {
  function handleChatOpen(evt) {
    evt.stopPropagation();
    props.openChat(props.card);
  }

  function handleOpenCard(evt) {
    evt.stopPropagation();
    if (props.isOpen === false) {
      props.openCard(props.card);
    } else return;
  }

  return (
    <div className="card" onClick={handleOpenCard}>
      <div className="card__image-container">
        <button
          className={
            props.popupOpen
              ? "card__close-btn card__close-btn_visible"
              : "card__close-btn"
          }
          onClick={props.closePopup}
        />
        <img
          className="card__image"
          src={props.card.imageSrc}
          alt={props.card.imageAlt}
        />
      </div>
      <button
        onClick={handleChatOpen}
        className="card__contact-button"
      ></button>
      <h2 className="card__title">{props.card.title}</h2>
      <p className="card__subtitle">{props.card.subtitle}</p>
      <p className="card__city">{props.card.city}</p>
      <div className="card__tags">
        {props.card.contentTag.map((tag, index) => (
          <Tag key={index} tag={tag} />
        ))}
      </div>
      <div
        className={
          props.popupOpen
            ? "card__description-container card__description-container_extended"
            : "card__description-container"
        }
      >
        <p className="card__description">{props.card.description}</p>
      </div>
    </div>
  );
}
