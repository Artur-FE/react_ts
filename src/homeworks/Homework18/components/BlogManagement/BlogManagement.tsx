import { ChangeEvent, createContext, useState } from "react";
import Input from "../../../../components/Input/Input";
import Card from "../Card/Card";
import { BlogManagementContainer } from "./style";
import Button from "../../../../components/Button/Button";
import { MessageType } from "./types";

export const MessageText = createContext<MessageType>({
  message: "",
  setMessage: () => {},
});

function BlogManagement() {
  const [messageValue, setMessageValue] = useState<string | undefined>("");
  const [sendMessage, setSendMessage] = useState<string | undefined>("");

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setMessageValue(event.target.value);
  };

  const click = () => {
    setSendMessage(messageValue);
    setMessageValue("");
  };

  return (
    <MessageText.Provider
      value={{ message: sendMessage, setMessage: setSendMessage }}
    >
      <BlogManagementContainer>
        <Input
          name="message"
          id="message_id"
          value={messageValue}
          onChange={onChangeInput}
          placeholder="Enter your message"
        />
        <Button name="Post" onClick={click} type="submit" />
        <Card />
      </BlogManagementContainer>
    </MessageText.Provider>
  );
}

export default BlogManagement;
