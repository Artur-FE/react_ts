import { Content, Title, ImageContent, AudiWrapper } from "./styles";
import AudiContent from "../../../../assets/AudiContent1.jpeg";

function Audi() {
  return (
    <AudiWrapper>
      <Content>
        <Title>Audi</Title>
        <ImageContent src={AudiContent} />
        The eventful history of Audi began in the 19th century, with the first
        chapter written by August Horch, one of the German pioneers of
        automotive engineering. After graduating from the Technical Academy in
        Mittweida, Saxony, he initially worked in engine construction and later
        as operations manager in motor vehicle production at the Carl Benz
        company in Mannheim. On 14 November 1899, with the establishment of the
        company A. Horch & Cie. in Cologne, he laid the foundation for what
        would become a world-famous brand.
      </Content>
    </AudiWrapper>
  );
}

export default Audi;
