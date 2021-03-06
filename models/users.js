'use strict';
const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs")

const gamerTagSchema = mongoose.Schema({
    game: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Game",
        required: true
    }, 
    gamerTag: {
        type: String,
        minlength: 1,
        required: true
    }
})

const UserSchema = mongoose.Schema({
    isAdmin: {
        type: Boolean,
        default: false
    },
    username: {
        type: String,
        minlength: 1,
        required: true,
		minlength: 1,
		trim: true,
		unique: true,
        required: true
    },
    country: {
        type: String,
        minlength: 2
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    discussions: {
    	type: Array,
		required: true,
		default: []
  	},
    profilePic: {
        type: String,
        required: true,
        default: ''
    },
    bio: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    },
    nickname: {
        type: String,
        default: ''
    },
    playlist: {
        type: Array,
        default: []
    },
    gamerTags: [gamerTagSchema]
})

UserSchema.statics.findAndValidate = async function(username, password) {
    const user = await this.findOne({ username })
    if (!user)
        return false
    const login = await bcrypt.compare(password, user.password)
    return login ? user : false
}

module.exports = mongoose.model('User', UserSchema)