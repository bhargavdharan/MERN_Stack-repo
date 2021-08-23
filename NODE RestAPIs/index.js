const express = require('express');

const app = express();
const port = 3000;

//parse json using express
app.use(express.json());
app.use(express.urlencoded({extended: false}))

let movies = [{
    id: "1",
    title: 'the Dark knight rises',
    director: 'christopher Nolan',
    release_date: "2012-07-16"
},
{
    id: "2",
    title: "The Irishman",
    director: "Martin Scorsese",
    release_date: "2019-09-27"
},
{
    id: "3",
    title: "Inception",
    director: "christopher Nolan",
    release_date: "2010-07-16"
},
];

//get the movie list in the form of JSON
app.get('/movie',(req, res)=>{
    res.json(movies)
})

//add movie to the list
app.post('/movie',(req, res)=>{
    const movie = req.body;

    console.log(movie)
    movies.push(movie)
    res.send('Movie is added in the list!');
})

//search for a movie in the list
app.get('/movie/:id',(req, res)=>{
    const id = req.params.id;

    for(let movie of movies){
        if(movie.id === id){
            res.json(movie)
            return
        }
    }
    res.status(404).send('Movie not found in our database');
})

//delete movie from the list
app.delete('/movie/:id',(req, res)=>{
    const id = req.params.id;

    movies = movies.filter((movie) => {
        if(movie.id !== id){
            return true;
        }else{
            return false;
        }

    })

    res.send('Movie is deleted from the list')
})


//get the server to listen at port
app.listen(port, () =>{
    console.log(`Server listening at port ${port}`);
    console.log(`Loading.....${port}`);
})