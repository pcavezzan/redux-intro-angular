import {
  Context,
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";
import { createMessage, findAllMessages } from "./http-api.service";

interface MessageContextData {
  messages: Message[];
  messageCreateSubmitForm: (message: Message) => void
}

const MessageContext: Context<MessageContextData> = createContext({
  messageCreateSubmitForm: (_) => {
  },
  messages: [] as Message[]
});

export const MessageContextProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    (async () => {
      const messages = await findAllMessages();
      setMessages(messages);
    })();
  }, [])

  const messageCreateSubmitForm = useCallback(async (message: Message) => {
    await createMessage(message);
    const messages = await findAllMessages();
    setMessages(() => messages);
  }, []);
  const messageContext = { messages, messageCreateSubmitForm };

  return (
    <MessageContext.Provider value={messageContext}>
      {children}
    </MessageContext.Provider>
  )
}

export const useMessages = () => useContext(MessageContext);
