import { ChangeEvent, useState } from "react";
import Button from "../../components/Button/Button";
import Input from "../../components/Input/Input";
import './styles.css';

function Homework08() {
  const [userPassword, setUserPassword] = useState<string>('');
  const [showUserPassword, getShowUserPassword] = useState<boolean>(false);

  const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
    setUserPassword(event.target.value);
  }

  const showPassword = () => {
    getShowUserPassword(!showUserPassword);
  }

  let nameButton = showUserPassword ? 'HIDE PASSWORD' : 'SHOW PASSWORD' 

  return (
    <div className="hw08-container">
      <h1>Change password</h1>
      <Input
        name="password"
        label="password"
        type="password"
        placeholder="Enter your password"
        value={userPassword}
        onChange={onChangePassword}
      />

      {showUserPassword && <div className="password-h2"><h2>Your password</h2> 
      <Input name="userPassword" value={userPassword} /></div>}

      <Button name={nameButton} onClick={showPassword}/>
      
    </div>
  );
}

export default Homework08;
