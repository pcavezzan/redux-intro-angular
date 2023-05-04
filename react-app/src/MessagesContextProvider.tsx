import {
  Context,
  createContext,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useContext, useEffect
} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectMessages} from "./redux/Store";
import {CREATE_MESSAGE, LOAD_MESSAGES} from "./redux/Actions";

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
  const dispatch = useDispatch();
  const messages = useSelector(selectMessages);
  useEffect(() => {
    dispatch({type: LOAD_MESSAGES});
  }, [dispatch])
  const messageCreateSubmitForm = useCallback((message: Message) => {
    dispatch({ type: CREATE_MESSAGE, payload: message });
  }, [dispatch]);
  const messageContext = { messages, messageCreateSubmitForm };

  return (
    <MessageContext.Provider value={messageContext}>
      {children}
    </MessageContext.Provider>
  )
}

export const useMessages = () => useContext(MessageContext);
