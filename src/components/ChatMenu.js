import userImg from "../images/user.webp";
import statusImg from "../images/indicator-online.png";
import ChatMenuCard from "./ChatMenuCard";
import { useEffect, useState } from "react";

export default function ChatMenu(props) {
  function getUserImg(name) {
    let obj = props.cards.find((card) => card.title === name);
    return obj.imageSrc;
  }

  function openChat(nameVar) {
    props.openChat(nameVar);
  }

  return (
    <div className={props.isOpen ? "chat-menu opened" : "chat-menu"}>
      <div className="chat-menu__header">
        <div className="chat-menu__status-container">
          <img className="chat-menu__img" src={userImg} />
          <img className="chat-menu__status" src={statusImg} />
        </div>
        <h2 className="chat-menu__title">Messages</h2>
        <button className="chat-menu__btn-close" onClick={props.openChatMenu} />
      </div>
      <div className="chat-menu__search-container">
        <div className="chat-menu__search-icon" />
        <input
          className="chat-menu__search-input"
          placeholder="Search in messages"
        />
      </div>
      <div className="chat-menu__message-cards">
        {props.chats.map((chat, index) => {
          if (chat.messages.length > 0) {
            return (
              <ChatMenuCard
                key={index}
                name={chat.chatName}
                lastMessage={chat.messages[chat.messages.length - 1]}
                time={chat.messages[chat.messages.length - 1].createdAt}
                image={getUserImg(chat.chatName)}
                openChat={openChat}
              />
            );
          }
        })}
      </div>
    </div>
  );
}
