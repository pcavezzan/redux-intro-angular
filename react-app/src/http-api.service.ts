export const getMessages = async () => {
  const response = await fetch('/api/messages', {method: 'GET'});
  return await response.json() as Message[];
};
