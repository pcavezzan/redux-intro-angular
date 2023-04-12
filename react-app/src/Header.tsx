import { FunctionComponent } from "react";
import { useMessages } from "./MessagesContextProvider";

const MessageCountComponent: FunctionComponent<{ messageCount: number }> = ({ messageCount }) => {
  return (
    <p>
      Vous avez {messageCount} messages
    </p>
  )
};


export const Header: FunctionComponent = () => {
  const {messages} = useMessages();
  const messageCount = messages.length;
  return (
    <MessageCountComponent messageCount={messageCount}></MessageCountComponent>
  )
}
