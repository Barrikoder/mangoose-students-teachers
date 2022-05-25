const express = require('express')
const app = express()
const port = 3000
require('dotenv').config();
require('colors');

const studentsRouter = require('./routes/student')
const teachersRouter = require('./routes/teacher')

const connectDB = require('./dbinit')

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/students', studentsRouter);
app.use('/teachers', teachersRouter);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})