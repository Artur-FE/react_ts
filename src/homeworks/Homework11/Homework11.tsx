import { ChangeEvent, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import { Homework11Container, Result } from "./styles";

function Homework11() {

const [note, setNote] = useState<string>('');
const [additNote, setAdditNote] = useState<string>('');
const [countNoteChange, setCountNoteChange] = useState<number>(0);

const onChangeNote = (event : ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
}

const onChangeAdditNote = (event : ChangeEvent<HTMLInputElement>) => {
    setAdditNote(event.target.value)
}

useEffect(()=>{
    setCountNoteChange((prevValue)=>prevValue + 1)
}, [note])

// useEffect(()=>{
//     if(note)
//     setCountNoteChange((prevValue)=>prevValue + 1)
// }, [note])

    return(
        <Homework11Container>
        <Input name="note" placeholder="Enter your note" value={note} onChange={onChangeNote}/>
        <Result>
            {/* Количество изменений в поле Note {countNoteChange === -1 ? 0 : countNoteChange} */}
            Количество изменений в поле Note {countNoteChange - 1}
        </Result>
        <Input name="note_additional" placeholder="Enter your additional_note" value={additNote} onChange={onChangeAdditNote}/>
        
        </Homework11Container>
    )
}

export default Homework11;






// import { ChangeEvent, useEffect, useState } from "react";
// import Input from "../../components/Input/Input";
// import { Homework11Container, ResultBox, ResultValue } from "./styles";

// function Homework11() {
//   const [controlInputValue, setControlInputValue] = useState<string>("");
//   const [nOControlInputValue, setNoControlInputValue] = useState<string>("");
//   const [resultInputValue, setResultInputValue] = useState<number>(0);
//   const [firstRender, setFirstRender] = useState<boolean>(true);

//   const controlInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setControlInputValue(event.target.value);
//   };

//   const noControlInputChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setNoControlInputValue(event.target.value);
//   };


//   useEffect(() => {
//     setFirstRender(false);
//   }, []);

//   useEffect(() => {
//     if (!firstRender) {
//       setResultInputValue((prev)=>prev + 1);
//     }
//   }, [controlInputValue]);

//   return (
//     <Homework11Container>
//       <Input name="controlInput" value={controlInputValue} onChange={controlInputChange} />
//       <Input name="noControlInput" value={nOControlInputValue} onChange={noControlInputChange}/>
//       <ResultBox>
//         Внесено изменений в первый Input:
//         <ResultValue>{resultInputValue}</ResultValue>
//       </ResultBox>
//     </Homework11Container>
//   );
// }

// export default Homework11;
