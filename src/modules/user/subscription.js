import { pubsub, USER_ADDED, MESSAGE_ADDED } from '../../subscription';

const Subscription = {
  userAdded: {
    subscribe: () => pubsub.asyncIterator(USER_ADDED),
  },
  messageAdded: {
    subscribe: () => pubsub.asyncIterator(MESSAGE_ADDED),
  },
};

export default Subscription;
