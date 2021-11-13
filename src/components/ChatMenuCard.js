import statusPath from "../images/indicator-online.png";

export default function ChatMenuCard(props) {
  function processLastMessage() {
    if (props.lastMessage.isOwn === true) {
      return `You: ${props.lastMessage.content}`;
    } else return `${props.name.split(" ")[0]}: ${props.lastMessage.content}`;
  }

  function handleChatOpen() {
    props.openChat(props.name);
  }

  return (
    <>
      <div className="menu-card" onClick={handleChatOpen}>
        <div className="menu-card__status-container">
          <img className="menu-card__img" src={props.image} />
          <img className="menu-card__status" src={statusPath} />
        </div>
        <div className="menu-card__text-container">
          <p className="menu-card__name">{props.name}</p>
          <p className="menu-card__last-message">{processLastMessage()}</p>
        </div>
        <div className="menu-card__info-container">
          <p className="menu-card__time">{props.time}</p>
          <div className="menu-card__unread-counter">1</div>
        </div>
      </div>
      <div className="menu-card__border" />
    </>
  );
}
