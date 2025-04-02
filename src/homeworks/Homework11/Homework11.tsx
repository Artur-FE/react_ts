import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Homework11Container, ResultBox, ResultValue } from "./styles";

function Homework11() {
  const [controlInputValue, setControlInputValue] = useState<string>("");
  const [nOControlInputValue, setNoControlInputValue] = useState<string>("");
  const [resultInputValue, setResultInputValue] = useState<number>(0);
  const [firstRender, setFirstRender] = useState<boolean>(true);

  const controlInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setControlInputValue(event.target.value);
  };

  const noControlInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNoControlInputValue(event.target.value);
  };


  useEffect(() => {
    setFirstRender(false);
  }, []);

  useEffect(() => {
    if (!firstRender) {
      setResultInputValue((prev)=>prev + 1);
    }
  }, [controlInputValue]);

  return (
    <Homework11Container>
      <Input name="controlInput" value={controlInputValue} onChange={controlInputChange} />
      <Input name="noControlInput" value={nOControlInputValue} onChange={noControlInputChange}/>
      <ResultBox>
        Внесено изменений в первый Input:
        <ResultValue>{resultInputValue}</ResultValue>
      </ResultBox>
    </Homework11Container>
  );
}

export default Homework11;
