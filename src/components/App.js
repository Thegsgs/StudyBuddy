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
  const [lastChat, setLastChat] = useState("");
  const [chats, setChats] = useState([]);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMenuOpen, setIsChatMenuOpen] = useState(false);
  const [isCardPopupOpen, setIsCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(initialCards[0]);

  useEffect(() => {
    setChats(initialChats);
  }, []);

  function handleProfilePopupOpen() {
    setIsProfilePopupOpen(!isProfilePopupOpen);
  }

  function handleCardPopupOpen(card) {
    setSelectedCard(card);
    setIsCardPopupOpen(!isCardPopupOpen);
  }

  function handleChatMenuPopupOpen() {
    setIsChatMenuOpen(!isChatMenuOpen);
  }

  function handleOpenChat(nameVar) {
    function findChat(nameStr) {
      let obj = initialCards.find((card) => card.title === nameStr);
      return obj;
    }
    setLastChat(findChat(nameVar));
    setIsChatOpen(true);
  }

  function handleStartNewChat(card) {
    if (
      !chats.some((chat) => {
        if (chat.chatName === card.title) {
          return true;
        }
      })
    ) {
      setChats([...chats, { chatName: card.title, messages: [] }]);
    }
    setLastChat(card);
    setIsChatOpen(true);
    setIsCardPopupOpen(false);
  }

  function toggleChatOpen() {
    if (lastChat != "") {
      setIsChatOpen(!isChatOpen);
    }
  }

  function closeChat() {
    setIsChatOpen(false);
  }

  return (
    <div className="page">
      <Header
        openChatMenu={handleChatMenuPopupOpen}
        openSettings={handleProfilePopupOpen}
      />
      <ProfilePopup
        isOpen={isProfilePopupOpen}
        openSettings={handleProfilePopupOpen}
      />
      <Main
        cards={initialCards}
        openChat={handleStartNewChat}
        openCard={handleCardPopupOpen}
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
        openChatMenu={handleChatMenuPopupOpen}
      />
      <CardPopup
        isOpen={isCardPopupOpen}
        selectedCard={selectedCard}
        openChat={handleStartNewChat}
        closeCard={handleCardPopupOpen}
      />
    </div>
  );
}
