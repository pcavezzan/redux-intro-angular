export const findAllMessages = async (): Promise<Message[]> => {
  const response = await fetch('/api/messages', {method: 'GET'});
  return await response.json() as Message[];
};

export const createMessage = async (message: Message): Promise<void> => {
  await fetch(
    '/api/messages',
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(message),
    });
};
