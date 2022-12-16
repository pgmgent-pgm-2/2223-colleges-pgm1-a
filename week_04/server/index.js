// Import the express module
const express = require('express');
// Make an express app
const app = express();

// Constants
const PORT = 8080;

// Routes
app.get('/', (req, res, next) => {
  res.send('Hello World :)');
});

app.get('/about', (req, res, next) => {
  res.send('I\'m Philippe, the real slim Shady');
});

const students = require('./data/students.json');

app.get('/students', (req, res, next) => {
  res.json(students);
});

app.get('/students/:studentId', (req, res, next) => {
  const { studentId } = req.params;
  const student = students.find(student => student.studentNumber == studentId);
  
  res.json(student);
});

const posts = require('./data/news.json');

app.get('/posts', (req, res, next) => {
  res.json(posts);
});

app.get('/posts/:postId', (req, res, next) => {
  const { postId } = req.params;
  const post = posts.find(post => post.id == postId);

  res.json(post);
});

// Listen to incoming requests => start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
