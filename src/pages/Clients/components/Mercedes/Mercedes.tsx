import {
  Content,
  Title,
  ImageContent,
  MercedesWrapper,
  ButtonContent,
} from "./styles";
import MercedesContent from "../../../../assets/Mercedes-Content.jpeg";
import Button from "../../../../components/Button/Button";
import { useNavigate } from "react-router-dom";

function Mercedes() {
    const navigate = useNavigate();

    const toAudi = ()=> {
        navigate('/clients/audi')
    };

  return (
    <MercedesWrapper>
      <Content>
        <Title>Mercedes‑Benz</Title>
        <ImageContent src={MercedesContent} />
        Mercedes‑Benz is the oldest car manufacturer in the world. in 1886, Carl
        Benz patented his revolutionary motorised car and Gottlieb Daimler
        developed his four-wheeled motorised carriage. Since then, we have been
        reinventing the automobile time and again, shaping the future of
        individual mobility on the basis of our history. From the beginnings of
        the two start-ups in Mannheim and Cannstatt, today's globally active
        group, Mercedes‑Benz Group AG, has developed over almost 140 years. The
        history of the company is a fascinating company biography and a
        reflection of contemporary history, innovation chronicle and motorsport
        milestones.
        <ButtonContent>
          <Button name="To Audi" onClick={toAudi}/>
        </ButtonContent>
      </Content>
    </MercedesWrapper>
  );
}

export default Mercedes;
