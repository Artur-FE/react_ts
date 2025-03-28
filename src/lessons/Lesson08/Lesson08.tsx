import { ChangeEvent, useState } from "react";

import "./styles.css";
import EmployeeCard from "../../components/EmployeeCard/EmployeeCard";
import AvatarImg from "../../assets/avatar.jpg";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";

function Lesson08() {
  //Неконтролируемый компонент - элемент, который контролируется браузером
  //Контролируемый компонент - элемент, который контролируется с помощью React

  //1 шаг контроля - создание state, в котором будет храниться значение поля
  const [message, setMessage] = useState<string>('');
  const [showMessage, setShowmessage] = useState<boolean>(false);

  //2 шаг контроля - создание функций, которая будет изменять значение state, при
  // изменении значения поля
  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
        setMessage(event.target.value);
  }

const showMessageHandler = () => {
    setShowmessage(!showMessage);
}

  return (
    <div className="lesson08-container">
      <Input name="example" />
      <Input
        name="message"
        label="Message"
        id="message_id"
        placeholder="Enter yor message"
        value={message}
        onChange={onChangeMessage}
      />
        <Button name='Show message' onClick={showMessageHandler}/>
        {showMessage && <div>{message}</div>}
      <EmployeeCard
        name="Max Smith"
        position="Software Engineer"
        department="IT"
        img={AvatarImg}
      >
        <h3>The best employee</h3>
        <Button name="Show personal page" />
      </EmployeeCard>
    </div>
  );
}

export default Lesson08;
