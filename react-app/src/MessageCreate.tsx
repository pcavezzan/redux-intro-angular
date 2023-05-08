import { ChangeEvent, FormEvent, FunctionComponent, useState } from 'react';
import { useAppDispatch } from './store/hooks';
import { createMessageAsync } from './store/messages/messages.slice';

const MessageCreateFormComponent: FunctionComponent<{
  messageSubmitForm: (message: Message) => void
}> = ({messageSubmitForm}) => {
  const [content, setContent] = useState('');

  const onSubmitMessageForm = (e: FormEvent) => {
    e.preventDefault();
    setContent('');
    messageSubmitForm({content});
  };

  const handleContentChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContent(e.target.value);
  };

  return (
    <form onSubmit={onSubmitMessageForm}>
      <p>Compléter le formulaire pour pouvoir le soumettre.</p>
      <label htmlFor="content">Contenu: </label>
      <input id="content" type="text" onChange={handleContentChange} value={content}/>
      <button type="submit">Valider</button>

    </form>
  );
};


export const MessageCreate: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const messageCreateSubmitForm = (message: Message) => {
    dispatch(createMessageAsync(message));
  };

  return (
    <MessageCreateFormComponent messageSubmitForm={messageCreateSubmitForm}></MessageCreateFormComponent>
  );
};
