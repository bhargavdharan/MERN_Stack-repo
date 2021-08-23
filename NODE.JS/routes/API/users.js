const express = require('express')
const router = express.Router()
const uuid = require('uuid')
let users = require('../../Users')

//get all users
router.get("/",(req, res) =>{
    res.json(users);
})

//get users by id
router.get('/:id', (req,res)=>{
    const found = users.some( (user) => user.id === parseInt(req.params.id))

    if (found){
        res.json(users.filter((user) => user.id === parseInt(req.params.id)))
    } else{
        res.sendStatus(400);
    }
});

//create a new user
router.post('/',(req,res) => {
    const newUser = {
        id: uuid.v4(),
        name: req.body.name,
        location: req.body.location,
    }

    if(!newUser.name || !newUser.location){
        return res.sendStatus(400)
    }

    users.push(newUser);
    res.json(users);
});

router.put('/:id',(req,res)=>{
    const found = users.some( (user) => user.id === parseInt(req.params.id))
    if(found){
        const updateUser =  req.body;
        users.forEach(user => {
            if(user.id === parseInt(req.params.id)){
                user.name = updateUser.name ? updateUser.name: user.name;
                user.location = updateUser.location ? updateUser.location : user.location;
                res.json({msg: 'User updated',user});
            }
        })
    }
    });

//delete user
router.delete('/:id',(req,res)=>{
    const found = users.some( (user) => user.id === parseInt(req.params.id))
    if(found){
        users = users.filter((user) => user.id !==parseInt(req.params.id))
        res.json({
            msg: "User deleted",
            users,
        });
    }else{
        res.sendStatus(400);
    }
});

module.exports = router