import chevronUpPath from "../images/chevron-up.svg";

export default function ChatButton(props) {
  return (
    <button onClick={props.openChat} className="chat-button">
      Messages
      <img
        className={
          props.isOpen ? "chat-button__icon rotate" : "chat-button__icon"
        }
        src={chevronUpPath}
      />
    </button>
  );
}
