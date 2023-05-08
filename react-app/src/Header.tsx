import { FunctionComponent } from 'react';
import { useAppSelector } from './store/hooks';
import { selectMessageCount } from './store/messages/messages.slice';

const MessageCountComponent: FunctionComponent<{ messageCount: number }> = ({messageCount}) => {
  return (
    <p>
      Vous avez {messageCount} messages
    </p>
  );
};


export const Header: FunctionComponent = () => {
  const messageCount = useAppSelector(selectMessageCount);
  return (
    <MessageCountComponent messageCount={messageCount}></MessageCountComponent>
  );
};
