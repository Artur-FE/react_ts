import { useContext } from "react";
import { MessageContainer } from "./styles";
import { MessageText } from "../BlogManagement/BlogManagement";
import Button from "../../../../components/Button/Button";

function Message() {
  const { message, setMessage } = useContext(MessageText);
  const deleteMessage = () => {
    setMessage(undefined);
  };

  return (
    <MessageContainer>
      {message}
      {message && <Button name="Delete Post" onClick={deleteMessage} />}
    </MessageContainer>
  );
}
export default Message;
