import Card from "./Card";

export default function cardPopup(props) {
  function closePopup() {
    props.closeCard(props.selectedCard);
  }

  return (
    <div
      className={
        props.isOpen ? "card-popup-wrapper opened" : "card-popup-wrapper"
      }
      onClick={closePopup}
    >
      <Card
        card={props.selectedCard}
        openChat={props.openChat}
        popupOpen={true}
        closePopup={closePopup}
      />
    </div>
  );
}
