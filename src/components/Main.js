import Cover from "./Cover";
import Description from "./Description";
import Cards from "./Cards";
import Stories from "./Stories";
import ChatButton from "./ChatButton";

export default function Main(props) {
  return (
    <main className="main">
      <Cover />
      <Description />
      <Cards
        cards={props.cards}
        openChat={props.openChat}
        openCard={props.openCard}
        isOpen={props.isOpen}
      />
      <Stories />
      <ChatButton />
    </main>
  );
}
