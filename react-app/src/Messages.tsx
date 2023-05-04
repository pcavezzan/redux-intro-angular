import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { selectMessages } from './redux/store';

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
  const messages = useSelector(selectMessages);
  return (
    <MessageListComponent messages={messages}></MessageListComponent>
  );
};
