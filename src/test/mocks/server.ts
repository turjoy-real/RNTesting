import {setupServer} from 'msw/node';
// import {setupWorker} from 'msw/browser';
import {handlers} from './handlers';

export const server = setupServer(...handlers);
// export const server = setupWorker(...handlers);
