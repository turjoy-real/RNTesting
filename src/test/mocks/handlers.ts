import {http, HttpResponse} from 'msw';
import mockedApiResponse from './mockedApiResponse.json';
export const handlers = [
  http.get('https://dummyjson.com/users', ({request, params, cookies}) => {
    return HttpResponse.json(mockedApiResponse);
  }),
];
