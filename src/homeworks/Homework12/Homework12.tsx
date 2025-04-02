import axios from "axios";
import { CatWrapper, Homework12Container } from "./styles";
import Button from "../../components/Button/Button";
import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";

function Homework12() {
  const [catFact, setCatFact] = useState<string | undefined>(undefined);
  const [errorCatFact, setErrorCatFact] = useState<string | undefined >(undefined);
  const [isLoading, getIsLoading] = useState<boolean>(false);
  const URL_CAT_FACT = "https://catfact.ninja/fact";
  const getCatFact = async () => {
    try {
        getIsLoading(true);
        setCatFact(undefined)
        setErrorCatFact(undefined)
      const response = await axios.get(URL_CAT_FACT);
      setCatFact(response.data.fact);
    } catch (error : any) {
        setErrorCatFact(error.message)
    } finally {
        getIsLoading(false);
    }
  };

  useEffect(()=>{
    getCatFact()
  },[])

  return (
    <Homework12Container>
      <Button name="GET MORE FACTS" onClick={getCatFact} disabled={isLoading}/>
      <CatWrapper errorMessage={errorCatFact !== undefined}>
      {isLoading && <Spinner />}
        {errorCatFact} 
        {catFact}
        </CatWrapper>
    </Homework12Container>
  );
}

export default Homework12;
