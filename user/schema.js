const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongoose-user');
const _schema = {
    name:require('../fields/name')
,   password:require('../fields/password')
,   email: require('../fields/email')
,   type: require('../fields/type')
,   created_at: require('../fields/created_at')
};

const userSchema = new Schema(_schema);
module.exports = userSchema;
