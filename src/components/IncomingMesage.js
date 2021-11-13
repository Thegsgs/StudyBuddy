export default function IncomingMessage(props) {
  return (
    <div className="incoming-message">
      <img className="incoming-message__img" src={props.userImg} />
      <div className="incoming-message__container">
        <p className="incoming-message__text">{props.messageContent}</p>
      </div>
      <p className="incoming-message__time">{props.createdAt}</p>
    </div>
  );
}
