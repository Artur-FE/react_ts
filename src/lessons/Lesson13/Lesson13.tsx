import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { DogImg, ImgContainer, ImgWrapper, Lesson13Container } from "./styles";
import Spinner from "../../components/Spinner/Spinner";
import Input from "../../components/Input/Input";
import { v4 } from "uuid";

function Lesson13() {
  const URL_IMG = "https://dog.ceo/api/breeds/image/random";
  // const [urlImg, setUrlImg] = useState<string | undefined>(undefined);
  const [errorImg, setErrorImg] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string | undefined>(undefined);
  const [arrayValue, setArrayValue] = useState<string[]>([]);

  const getImg = async () => {
    try {
      setIsLoading(true);
      //setUrlImg(undefined);
      setErrorImg(undefined);
      const response = await axios.get(URL_IMG);
      //setUrlImg(response.data.message);
      setArrayValue([...arrayValue, response.data.message]);
    } catch (error: any) {
      setErrorImg(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    getImg();
  }, [, inputValue]);

  const urlFromArrayValue = arrayValue.map((element: string) => (
    <DogImg src={element} key={v4()} />
  ));

  return (
    <Lesson13Container>
      <Button name="GET MORE IMAGES" onClick={getImg} />
      <Input name="controlInput" value={inputValue} onChange={onChangeInput} />

      <ImgWrapper>
      <ImgContainer>
      {isLoading && <Spinner />}
        {/* <DogImg src={urlImg} /> */}
        {urlFromArrayValue}
        {errorImg}
        </ImgContainer>
      </ImgWrapper>
      {arrayValue.length !== 0 && (
        <Button name="DELETE ALL DATA" onClick={() => setArrayValue([])} />
      )}
    </Lesson13Container>
  );
}

export default Lesson13;
