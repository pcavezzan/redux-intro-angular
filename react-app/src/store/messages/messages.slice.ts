import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { createMessage, findAllMessages } from '../../http-api.service';
import { RootState } from '../store';

export const LOAD_MESSAGES = 'messages/load messages';
export const CREATE_MESSAGE = 'messages/create new message';


interface MessagesState {
  messages: Message[];
}

const initialState: MessagesState = {
  messages: []
};


// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const loadMessagesAsync = createAsyncThunk(
  LOAD_MESSAGES,
  async () => {
    // The value we return becomes the `fulfilled` action payload
    return await findAllMessages();
  }
);

export const createMessageAsync = createAsyncThunk(
  CREATE_MESSAGE,
  async (message: Message, thunkAPI) => {
    await createMessage(message);
    thunkAPI.dispatch(loadMessagesAsync());
  }
);

const messagesSlice = createSlice({
  name: 'messages',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Redux Toolkit allows us to write "mutating" logic in reducers. It
    // doesn't actually mutate the state because it uses the Immer library,
    // which detects changes to a "draft state" and produces a brand new
    // immutable state based off those changes
  },
  extraReducers: builder => {
    builder
      .addCase(loadMessagesAsync.fulfilled, (state, action) => {
        state.messages = action.payload;
      });
  }
});

export const selectMessages = (state: RootState) => state.messages.messages;
export const selectMessageCount = (state: RootState) => state.messages.messages.length;


export default messagesSlice.reducer;