import { User, Message } from './modules/user/constants';

export const nestedQuery = {
  User: {
    friends: parent => User.filter(data => parent.friends.indexOf(data.id) !== -1),
    messages: parent => Message.filter(data => parent.messages.indexOf(data.id) !== -1),
  },
  Message: {
    userMessage: parent => User.filter(data => parent.userMessage.indexOf(data.id) !== -1),
  },
};
console.log('Nested', nestedQuery.Message);
export default nestedQuery;
