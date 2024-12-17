// Import the Express module using ES Module syntax
import express from 'express';

// Create an Express application instance
const app = express();

// Set the port number for the server to listen on
const port = 3000;

// Define a route for the root URL ('/') to send a "Hello World!" response
app.get('/', (req, res) => {
  res.send('Get Started!'); // Send 'Get Started!' as the response
});

// Start the server and listen for requests on the specified port (3000)
app.listen(port, () => {
  // Log a message to the console when the server starts
  console.log(`Server is running at http://localhost:${port}`);
});
