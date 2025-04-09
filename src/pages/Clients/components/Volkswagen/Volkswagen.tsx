import { Content, Title, ImageContent, VolkswagenWrapper } from "./styles";
import VolkswagenContent from "../../../../assets/VolkswagenContent.png";

function Volkswagen() {
  return (
    <VolkswagenWrapper>
      <Content>
        <Title>Volkswagen</Title>
        <ImageContent src={VolkswagenContent} />
        After the war, the British instructed Volkswagen to build the Volkswagen
        saloon at the end of 1945. With the Type 1 (Käfer) model, and the Type 2
        (Transporter) model added in 1950, Volkswagen became a symbol of
        Germany’s economic miracle, above all as a result of the strong export
        orientation on the part of the company converted into a joint stock
        corporation in 1960. Innovative and flexible manufacturing systems made
        an appearance in the 1970s and led to the birth of a new generation of
        Volkswagens with the Passat, Scirocco, Golf and Polo models. Growth was
        boosted in the 1980s through advances in vehicle technology, flexible
        production, and forward-looking international cooperation.
      </Content>
    </VolkswagenWrapper>
  );
}

export default Volkswagen;
