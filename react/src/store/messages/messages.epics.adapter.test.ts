import * as httpApiService from '../../http-api.service';
import { createMessage$, findAllMessages$ } from './messages.epics.adapter';
import { lastValueFrom } from 'rxjs';

describe('messages epics adapters', () => {

  test('should adapt load messages promise as an observable', async () => {
    const messages = [{id: 1, content: 'content'}];
    jest.spyOn(httpApiService, 'findAllMessages').mockResolvedValue(messages);

    const findAllMessages$1 = findAllMessages$();

    expect(await lastValueFrom(findAllMessages$1)).toEqual(messages);
  });


  test('should adapt create message promise as an observable', async () => {
    const message = {content: 'content'};
    jest.spyOn(httpApiService, 'createMessage').mockResolvedValue(void (0));

    const createMessage$1 = createMessage$(message);

    expect(await lastValueFrom(createMessage$1)).toEqual(void (0));
  });

});