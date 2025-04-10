import Message from "../Message/Message";
import { CardContainer, Content } from "./styles";

function Card() {
  return (
    <CardContainer>
      <Content>
        Artur Fedoseiev
        <Message />
      </Content>
    </CardContainer>
  );
}

export default Card;
