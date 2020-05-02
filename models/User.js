const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema;
const SALT_ROUNDS = 6;

const userSchema = new Schema({
    name: {
    type: String,
    required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    phone_num: String,
    age: Number,
    goalie: {
    type: Boolean,
    required: true,
    default: false
    },
    sport: {
        type: [String],
        enum: ['hockey', 'lacrosse', 'soccer']
    },
    skill_level: {
        type: String,
        enum: ["A", "B", "C", "D", "Beginner"]
    },
    admin: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

userSchema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.hash(user.password, SALT_ROUNDS, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
    });
});

userSchema.methods.comparePassword = function(tryPassword, cb) {
    bcrypt.compare(tryPassword, this.password, cb);
}

const User = mongoose.model('User', userSchema);
module.exports = User;