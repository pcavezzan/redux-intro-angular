import {FunctionComponent} from "react";

export const Messages: FunctionComponent<{ messages: Message[] }> = ({messages}) => {
  return (
    <>
      <p>messages</p>
      <ul>
        {messages.map((message) => (<li key={message.id}>{message.content}</li>))}
      </ul>
    </>
  );
};
