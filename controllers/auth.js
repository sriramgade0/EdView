const user = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.regesterUser = async (req, res) => {
    try {
        const newUser = req.body;
        const takenUserEmail = await user.findOne({ email: newUser.email });
        const takenUserUsername = await user.findOne({ username: newUser.username });
        if (takenUserEmail || takenUserUsername) {
            return res.status(403).send({ message: 'Username or email is already registered' });
        } else {
            const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(newUser.password, salt);

            const dbuser = new user({
                username: newUser.username.toLowerCase(),
                email: newUser.email.toLowerCase(),
                password: hashedPassword
            });
            await dbuser.save(); // Ensure to await the save operation
            return res.status(201).send({ message: 'Successfully registered new user' });
        }
    } catch (error) {
        console.log(error.message);
        return res.status(400).send({ message: 'Error registering new user!' });
    }
};

exports.loginUser = async (req, res) => {
    const loggingInUser = req.body; // Use this variable instead
    const existingUser = await user.findOne({ username: loggingInUser.username });
    if (!existingUser) {
        return res.status(404).send({ message: 'Invalid username or password!' });
    }
    
    // Change userLoggingIn to loggingInUser
    const isPasswordCorrect = await bcrypt.compare(loggingInUser.password, existingUser.password);
    if (isPasswordCorrect) {
        const payload = {
            id: existingUser._id,
            username: existingUser.username,
        };
        jwt.sign(
            payload,
            "my_secret_key_but_it_is_not_secure", // Remember to change this key in production
            { expiresIn: '2h' }, // Use a more reasonable expiration time
            (error, token) => {
                if (error) {
                    return res.status(400).send({ message: 'Error generating token!' });
                }
                return res.status(200).send({
                    message: 'Logged in successfully',
                    token: "Bearer " + token // Added space after "Bearer"
                });
            }
        );
    } else {
        return res.status(401).send({ message: 'Invalid username or password!' });
    }
};
