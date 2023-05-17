import { from, Observable } from 'rxjs';
import { createMessage, findAllMessages } from '../../http-api.service';

export const findAllMessages$: () => Observable<Message[]> = () => from(findAllMessages());
export const createMessage$: (message: Message) => Observable<void> = (message: Message) => from(createMessage(message));