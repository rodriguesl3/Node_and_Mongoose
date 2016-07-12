const Model = require('./model');

/* Creating a new User */
// const _userData = {
//     name:'Lucas Rodrigues'
// ,   password: '123321'
// ,   email: 'lucas@teste.com'
// };
// Model.create(_userData);

//getting user by name
const query = /Lucas Rodrigues/i;
// Model.read(query);
 Model.get(query);