import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { selectMessageCount } from './redux/store';

const MessageCountComponent: FunctionComponent<{ messageCount: number }> = ({messageCount}) => {
  return (
    <p>
      Vous avez {messageCount} messages
    </p>
  );
};


export const Header: FunctionComponent = () => {
  const messageCount = useSelector(selectMessageCount);
  return (
    <MessageCountComponent messageCount={messageCount}></MessageCountComponent>
  )
}
