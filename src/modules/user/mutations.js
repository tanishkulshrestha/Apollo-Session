import { User, id, Message } from './constants';
import { pubsub, USER_ADDED, MESSAGE_ADDED } from '../../subscription';

const Mutation = {
  addUser: (parent, { name, friends }) => {
    const temp = {
      id: id + 1,
      name,
      friends: User.filter(data => friends.indexOf(data.id) !== -1).map(user => user.id),
    };
    User.push(temp);
    pubsub.publish(USER_ADDED, { userAdded: temp });
    return temp;
  },
  sendMessage: (parent, { text, user }) => {
    const new_message = { id: Message.length + 1, text, user };
    const old_user = User.find(db_user => db_user.name == user);
    console.log('oldUser', old_user);
    console.log('newUser', new_message);
          Message.push(new_message);
          old_user.messages.push(new_message.id);
          console.log('MESSAGE', old_user.messages);
          pubsub.publish(MESSAGE_ADDED, { messageAdded: new_message });
          pubsub.publish(MESSAGE_ADDED, { userUpdated: new_message });
          return new_message;
        },
}

export default Mutation;
