import { PubSub } from 'apollo-server';

export const pubsub = new PubSub();

export const USER_ADDED = 'USER_ADDED';
export const MESSAGE_ADDED = 'MESSAGE_ADDED';
