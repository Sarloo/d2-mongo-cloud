const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    try {
        const jwtSecret = process.env.JWT_SECRET || 'secreto-token';
        const decoded = jwt.verify(token, jwtSecret);

        if (!decoded.user) {
            return res.status(401).json({ msg: 'Token payload is invalid' });
        }

        req.user = decoded.user;
        return next();
    } catch (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }
};
