import iconPath from "../images/chat.png";

export default function ChatButtonMobile(props) {
  return (
    <div className="chat-button-mobile" onClick={props.openChat}>
      <img className="chat-button-mobile__icon" src={iconPath} />
    </div>
  );
}
