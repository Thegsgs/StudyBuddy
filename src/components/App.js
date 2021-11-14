import "../index.css";
import Header from "./Header";
import ProfilePopup from "./ProfilePopup";
import Footer from "./Footer";
import ChatButton from "./ChatButton";
import Main from "./Main";
import { initialCards } from "../utils/initialCards";
import Chat from "./Chat";
import { useEffect, useState } from "react";
import { initialChats } from "../utils/initialChats";
import ChatMenu from "./ChatMenu";
import CardPopup from "./CardPopup";
import ChatButtonMobile from "./ChatButtonMobile";

export default function App() {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = useState(false);
  const [lastChat, setLastChat] = useState({
    chatName: "",
    messages: [],
  });
  const [chats, setChats] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(initialCards[0]);
  const [scrollState, setScrollState] = useState(true);
  useEffect(() => {
    setChats(initialChats);
  }, []);

  function handleProfilePopupToggle() {
    setIsProfilePopupOpen(!isProfilePopupOpen);
  }

  function handleCardPopupToggle(card) {
    setSelectedCard(card);
    setIsCardPopupOpen(!isCardPopupOpen);
    toggleScrollMobile();
  }

  function handleChatMenuPopupToggle() {
    setIsChatMenuOpen(!isChatMenuOpen);
  }

  function handleOpenChat(card) {
    if (
      !chats.some((chat) => {
        if (chat.chatName === card.title) {
          return true;
        }
      })
    ) {
      setChats([...chats, { chatName: card.title, messages: [] }]);
      setLastChat(card);
      setIsChatOpen(true);
      setIsCardPopupOpen(false);
      toggleScrollMobile();
    } else {
      setLastChat(card);
      setIsChatOpen(true);
      toggleScrollMobile();
    }
  }

  function toggleChatOpen() {
    if (lastChat != "") {
      setIsChatOpen(!isChatOpen);
      toggleScrollMobile();
    }
  }

  function closeChat() {
    setIsChatOpen(false);
    toggleScrollMobile();
  }

  function toggleScrollMobile() {
    if (window.innerWidth <= 1060) {
      setScrollState(!scrollState);
    }
  }

  return (
    <div className="page">
      <Header
        openChatMenu={handleChatMenuPopupToggle}
        openSettings={handleProfilePopupToggle}
      />
      <ProfilePopup
        isOpen={isProfilePopupOpen}
        openSettings={handleProfilePopupToggle}
      />
      <Main
        cards={initialCards}
        openChat={handleOpenChat}
        openCard={handleCardPopupToggle}
        isOpen={isCardPopupOpen}
      />
      <Footer />
      <ChatButton isOpen={isChatOpen} openChat={toggleChatOpen} />
      <ChatButtonMobile openChat={toggleChatOpen} />
      <Chat
        lastChat={lastChat}
        chats={chats}
        isOpen={isChatOpen}
        closeChat={closeChat}
      />
      <ChatMenu
        isOpen={isChatMenuOpen}
        cards={initialCards}
        openChat={handleOpenChat}
        lastChat={lastChat}
        chats={chats}
        openChatMenu={handleChatMenuPopupToggle}
      />
      <CardPopup
        isOpen={isCardPopupOpen}
        selectedCard={selectedCard}
        openChat={handleOpenChat}
        closeCard={handleCardPopupToggle}
      />
    </div>
  );
}
