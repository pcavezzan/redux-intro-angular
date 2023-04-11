import {FunctionComponent} from "react";
import { useMessages } from "./use-messages.hook";

const MessageListComponent: FunctionComponent<{ messages: Message[] }> = ({messages}) => {
  return (
    <>
      <p>messages</p>
      <ul>
        {messages.map((message) => (<li key={message.id}>{message.content}</li>))}
      </ul>
    </>
  );
};

export const Messages: FunctionComponent = () => {
  const {messages} = useMessages();
  return (
    <MessageListComponent messages={messages}></MessageListComponent>
  );
};
