/* eslint-disable @typescript-eslint/no-unused-vars */
//пример импорта по умолчанию
import Button from "../../components/Button/Button";
import { getAction, TRAFFIC_LIGHT } from "./object_types";
function Lesson06() {
    console.log(getAction(TRAFFIC_LIGHT.GREEN));
    return <div><Button /></div>
}
//Экспорт по умолчанию для компонента Lesson06
export default Lesson06;