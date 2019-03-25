import { User, Message } from './constants';

const Query = {
  getAllUser: () => User,
  getUser: (parent, { id }) => User.filter(data => data.id === id)[0],
  getMessageFromUser: (parent, { id }) => Message.filter(data => data.id === id)[0],
getAllMessage: () => Message,
}
console.log(Message);
export default Query;
