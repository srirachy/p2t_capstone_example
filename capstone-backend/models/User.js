import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    name: {type: String},
    role: {type: String, default: 'user'},
},
    {
        timestamps: true,
    },
);

const User = mongoose.model('User', userSchema);

export default User;
