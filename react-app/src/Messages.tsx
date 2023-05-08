import { FunctionComponent } from 'react';
import { selectMessages } from './store/messages/messages.slice';
import { useAppSelector } from './store/hooks';

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
  const messages = useAppSelector(selectMessages);
  return (
    <MessageListComponent messages={messages}></MessageListComponent>
  );
};
