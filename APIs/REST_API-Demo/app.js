const Joi = require('joi');

const express = require('express');

const app = express();

const http = require('http');

const courses = [
    { id:1, name:'course1'},
    { id:2, name:'course2'},
    { id:3, name:'course3'},
    { id:4, name:'course4'},
    { id:5, name:'course5'}
];

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/api/courses', (req, res) => {
    // res.send([1, 2, 3]);
    res.send(courses);
});

// /api/courses/1

// app.get('/api/posts/:year/:month', (req, res) => {
//     // res.send(req.params);
//     res.send(req.query);
// })

app.get("/api/courses/:id", (req, res) => {
//   res.send(req.params.id);
    const course = courses.find(c =>
        c.id === parseInt(req.params.id)
    );
    if (!course) res.status(404).send('The Course with the given ID was not found');// 404 not found
    res.send(course);
});

// app.post();
app.post('/api/courses', (req, res) => {

    //input validation
    const { error } = validateCourse(req.body);

    // console.log(result);

    if (error) {
        //400 Bad Request
        req.status(400).send(error.details[0].message);
        return;

    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

// app.put();
app.put('/api/courses/:id', (req, res) => {
    //Look up the course
    // If not existing, return 404
    const course = courses.find((c) => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The Course with the given ID was not found');// 404 not found
      
    // validate
    // If invalid, return 400 -Bad Request
    const result = validateCourse(req.body);
    const { error } = validateCourse(req.body); // result.error

    if (error) {
        //400 Bad Request
        req.status(400).send(error.details[0].message);
        return;
    }

    // Update Course
    // Return the updated course
    course.name = req.body.name;
    res.send(course);
});

function validateCourse(course) {
    const schema = Joi.object({
        name: Joi.string()
                 .min(3)
                 .required()
    });
    // const validation = schema.validate(course, schema);
    // const res = res.send(validation);
    return schema.validate(course);
}

// app.delete();
app.delete('/api/courses/:id', (req, res) => {
  // Look up the course
  // Not existing, return 404
  const course = courses.find((c) => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The Course with the given ID was not found"); // 404 not found

  // Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);

    res.send(course)

  // Return the same course
});

// PORT
const port = process.env.PORT || 3001;
app.listen(port, ()=>{console.log(`Listening on the ${port}...`)})


// const server = http.createServer((req, res) => {
//     if (req.url === '/') {
//         res.write('Hello World');
//         res.end();
//     }

//     if (req.url === 'api/courses') {
//         res.write(JSON.stringify([1, 2, 3]));
//         res.end();
//     }
// });

// server.listen(3000);

// console.log('Listening to the port 3000......');