import {createAction, props} from "@ngrx/store";

export const loadMessageAction = createAction('[Global] load messages');
export const loadMessageSuccessAction = createAction('[Global] load messages success', props<{messages: Message[]}>());
export const createMessageAction = createAction('[Message] create new message', props<{message: Message}>());
export const createMessageSuccessAction = createAction('[Message] create new message success');
