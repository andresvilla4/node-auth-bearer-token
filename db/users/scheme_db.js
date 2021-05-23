const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new Schema ({
    usuario: {type: String, unique: true},
    contraseña: {type: String, required: true}
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('users', userSchema);