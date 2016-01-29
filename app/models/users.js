/**
 * Created by max on 29.01.16.
 */
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var userSchema = new Schema({
        firstName: {type: String, require: true},
        lastName: {type: String, require: true},
        company: {type: String, require: true},
        email: {type: String, require: true, unique: true},
        phone: {type: String, require: true},
        password: {type: String, require: true},
        passwordConfirm: {type: String, require: true},
        termsConditions:{type: Boolean, require: true},
        created_at: Date,
        updated_at: Date
});

var user = mongoose.model('user', userSchema);

module.exports = user;