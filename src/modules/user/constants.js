const id = 2;
const User = [
  { id: 0, name: 'John', friends: [1, 2], messages: [0] },
  { id: 1, name: 'Alice', friends: [0, 2], messages: [1]  },
  { id: 2, name: 'Bob', friends: [0, 1], messages: [2] },
];
const Message = [
  { id: 0, text:'Hello', userMessage: [0] },
  { id: 1, text:'Hi', userMessage: [1] },
  { id: 2, text:'Hello Hi', userMessage: [2] },
];

export {
  User,
  id,
  Message,
};
