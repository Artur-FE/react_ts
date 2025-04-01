import { ChangeEvent, useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import { Lesson11Container, Result } from "./styles";
import Input from "../../components/Input/Input";
import Product from "../../components/Product/Product";

function Lesson11() {

    // let count = 0;
    const [count, setCount] = useState<number>(0)
    const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
    const [exampleValue, setExampleValue] = useState<string>('');
    const [showCard, setShowCard] = useState<boolean>(true);

    const showHideCard = () => {
        setShowCard((prevValue)=> !prevValue)
    }

    const changeExampleValue = (event: ChangeEvent<HTMLInputElement>) => {
        setExampleValue(event.target.value);
    }
    
    console.log('render');
    
//первый пример при первом рендере
    // useEffect(()=>{
    //     console.log('Mounting(first render)')
    // },[])

    //второй пример - при выполнении действия при изменении компонента

    useEffect(()=>{setIsFirstRender(false)}, [])

    useEffect(()=> {
        if(!isFirstRender){
        console.log('Re-render (change state count)');
        }
    }, [count])

    useEffect(()=> {
        console.log('Input value change');
    }, [exampleValue])


   
    return (
        <Lesson11Container>
            <Result>{count}</Result>
            <Button name="Change" onClick={()=>{setCount(10)}}/>
                <Input name="example" value={exampleValue} onChange={changeExampleValue}/>
                <Button name="show/hide card" onClick={showHideCard}/>
               {showCard && <Product productName="Apple" productPrice={2} />}
                
        </Lesson11Container>
    )
}

export default Lesson11;