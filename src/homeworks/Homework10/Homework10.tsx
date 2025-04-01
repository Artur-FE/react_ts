import Button from "../../components/Button/Button";
import { Homework10Styled } from "./styles";

function Homework10() {
    return (
        <Homework10Styled>
        <Button name="Send"/>
        <Button name="Delete" danger/>
        </Homework10Styled>
    )
}

export default Homework10;