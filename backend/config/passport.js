import passport from 'passport'; 
import { Strategy as GoogleStrategy } from 'passport-google-oauth20'; // Import Google OAuth 2.0 strategy
import User from '../models/userModel.js'; // Import User model for database operations
import dotenv from 'dotenv'; 
import BackendURL from './config.js'; 

dotenv.config(); 

// Configure Google OAuth strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID, 
      clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
      callbackURL: `${BackendURL}/api/auth/google/callback`, // URL Google redirects to after login
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
        // Check if user already exists in the database
        let user = await User.findOne({ googleId: profile.id });

        if (!user) {
          // If user doesn't exist, create a new user record
          const password = profile.id; // Temporary placeholder for password
          user = new User({
            name: profile.displayName,
            email: profile.emails[0].value,
            googleId: profile.id,
            profilePicture: profile.photos ? profile.photos[0].value : '', 
            emailVerified: true,
            password, // Should be securely hashed
          });

          await user.save(); // Save new user to the database
        }

        const jwtToken = user.generateAccessToken(); // Generate JWT for the user

        return done(null, jwtToken, user); // Pass user info and JWT to Passport
      } catch (error) {
        console.error('Error in Google OAuth authentication:', error); 
        return done(error, false); // Pass error to Passport
      }
    }
  )
);

// Serialize user to store their ID or token in session
passport.serializeUser((user, done) => {
  done(null, user.id); // Use user ID for session serialization
});

// Deserialize user by their ID for session retrieval
passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user); // Retrieve user object from database by ID
  });
});
