const jwt = require('jsonwebtoken');

exports.authenticate = async (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];// Ensure the key is 'authorization' without ':' 
    console.log("Token:", token); // Log the token for debugging
    
    if (token) {
        jwt.verify(token, "my_secret_key_but_it_is_not_secure", (error, decoded) => {
            if (error) {
                return res.status(401).send({
                    isLoggedIn: false,
                    message: 'Failed to authenticate'
                });
            }
            req.user = {
                id: decoded.id,
                username: decoded.username
            };
            next(); // Call next to continue to the next middleware/route handler
        });
    } else {
        return res.status(401).json({ message: 'Not logged in. Login or signup to access this resource.' });
    }
};
