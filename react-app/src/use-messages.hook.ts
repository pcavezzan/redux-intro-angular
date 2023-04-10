import {createMessage, findAllMessages} from "./http-api.service";
import {useCallback, useEffect, useState} from "react";

export const useMessages = () => {
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    (async () => {
      const messages = await findAllMessages();
      setMessages(messages);
    })();
  }, [])

  const onMessageSubmitForm = useCallback(async (message: Message) => {
    await createMessage(message);
    const messages = await findAllMessages();
    setMessages(() => messages);
  }, [createMessage, findAllMessages]);

  return {
    messages,
    onMessageSubmitForm
  };
};
