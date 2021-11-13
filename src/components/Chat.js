import chevronImgPath from "../images/chevron-up.svg";
import closeImgPath from "../images/close-icon.png";
import sendImgPath from "../images/message-send.svg";
import { useEffect, useState, useRef } from "react";
import OutgoingMessage from "./OutgoingMessage";
import IncomingMessage from "./IncomingMesage";
import userImgPath from "../images/user.webp";
import TimeFix from "../utils/TimeFix";

export default function Chat(props) {
  const messagesEndRef = useRef();
  const [messageContent, setMessageContent] = useState("");
  const [currentChat, setCurrentChat] = useState({
    chatName: "",
    messages: [],
  });
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  function findChat() {
    if (props.lastChat != "") {
      let obj = props.chats.find(
        (chat) => chat.chatName === props.lastChat.title
      );
      return obj;
    } else return currentChat;
  }

  useEffect(() => {
    setCurrentChat(findChat());
    setMessages(findChat().messages);
  }, [props.lastChat]);

  useEffect(() => {
    scrollBottom();
  }, [messages]);

  function handleContentChange(evt) {
    setMessageContent(evt.target.value);
    setInputValue(evt.target.value);
  }
  function scrollBottom() {
    messagesEndRef.current.scrollIntoView();
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    setMessages([
      ...messages,
      {
        isOwn: true,
        content: messageContent,
        createdAt: `${TimeFix.hourFix()}:${TimeFix.minuteFix()}`,
      },
    ]);
    setMessageContent("");
    setInputValue("");
  }

  return (
    <div className={props.isOpen ? "chat-popup opened" : "chat-popup"}>
      <div className="chat-popup__info-area">
        <img className="chat-popup__left-arrow" src={chevronImgPath} />
        <img className="chat-popup__img" src={props.lastChat.imageSrc} />
        <div className="chat-popup__profile">
          <h3 className="chat-popup__name">{props.lastChat.title}</h3>
          <p className="chat-popup__description">{props.lastChat.subtitle}</p>
          <a className="chat-popup__view-profile">View Profile</a>
        </div>
        <img
          className="chat-popup__close-icon"
          src={closeImgPath}
          onClick={props.closeChat}
        />
      </div>
      <div className="chat-popup__message-area">
        <p className="chat-popup__time">{`TODAY AT ${TimeFix.hourFix()}:${TimeFix.minuteFix()}`}</p>
        <div className="chat-popup__messages">
          {messages.map((messageObj, index) => {
            if (messageObj.isOwn === true) {
              return (
                <OutgoingMessage
                  key={index}
                  userImg={userImgPath}
                  messageContent={messageObj.content}
                  createdAt={messageObj.createdAt}
                />
              );
            } else {
              return (
                <IncomingMessage
                  key={index}
                  userImg={props.lastChat.imageSrc}
                  messageContent={messageObj.content}
                  createdAt={messageObj.createdAt}
                />
              );
            }
          })}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <form
        className="chat-popup__input-container"
        method="POST"
        name="message-form"
        onSubmit={handleSubmit}
      >
        <button type="submit" className="chat-popup__send-btn">
          <img className="chat-popup__send-icon" src={sendImgPath} />
        </button>
        <input
          className="chat-popup__message-input"
          placeholder="Type a message..."
          minLength="1"
          required
          value={inputValue}
          onChange={handleContentChange}
        />
      </form>
    </div>
  );
}
