const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwtoken = require('../lib/jwt');

const { SECRET } = require('../config/config');

exports.register = async (userData) => {

    const user = await User.create(userData);

    const payload = {
        _id: user._id,
        email: user.email
    }

    const token = await jwtoken.sign(payload, SECRET);

    return token
}

exports.login = async (email, password) => {
    const user = await User.findOne({ email }).lean();

    if (!user) {
        throw new Error('Wrong email or password')
    };

    const isVerified = await bcrypt.compare(password, user.password);

    if (!isVerified) {
        throw new Error('Wrong email or password!');
    };

    const payload = {
        _id: user._id,
        email: user.email
    }

    const token = await jwtoken.sign(payload, SECRET);

    return token
}
