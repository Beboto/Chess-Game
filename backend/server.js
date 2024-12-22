// Import the Express module using ES Module syntax
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url'; // Required to simulate __dirname in ES Modules

// Simulate __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(__dirname);
// console.log(path.join(__dirname, 'index.html'))
// console.log(path.extname(__filename));

// Create an Express application instance
const app = express();

// Set the port number for the server to listen on
const port = 3000;

app.use(express.static(path.join(__dirname, "public")))

// Define a route for the root URL ('/') to send a "Hello World!" response
app.get('/:name', (req, res) => {
  res.send('Get Started!' + req.params.name); // Send 'Get Started!' as the response
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html')); // Send the 'index.html' file
 //res.json({"Beboto": 22})
});

// Start the server and listen for requests on the specified port (3000)
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
