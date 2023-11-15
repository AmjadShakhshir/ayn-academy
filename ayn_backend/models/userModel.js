const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
        name: {
            type: String,
            required: [true, 'Please enter a name'],
        },
        email: {
            type: String,
            required: [true, 'Please enter an email'],
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: [true, 'Please enter a password'],
            minlength: 6,
        },
    },{
        timestamps: true,
    }
);

userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);




