import jwt from 'jsonwebtoken';  // Import jsonwebtoken for token verification
import dotenv from 'dotenv';

dotenv.config();

const verifyToken = (req, res, next) => {
    const token = req.cookies.jwtToken;  // Extract the JWT token from the cookies
    if (token === 'null' || !token || token === undefined) {
        return res.status(401).json({ message: 'Access Denied' });  
    }
    try {
        const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);   // Verify the token using the secret
        req.user = verified; // Attach the decoded token payload to `req.user`
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        console.log("Error in verifying token ");
        res.status(400).send('Invalid Token');
    }
}
export { verifyToken };