export default function OutgoingMessage(props) {
  return (
    <div className="outgoing-message">
      <img className="outgoing-message__img" src={props.userImg} />
      <div className="outgoing-message__container">
        <p className="outgoing-message__text">{props.messageContent}</p>
      </div>
      <p className="outgoing-message__time">{props.createdAt}</p>
    </div>
  );
}
