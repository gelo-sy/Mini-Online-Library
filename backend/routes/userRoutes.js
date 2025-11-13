const express = require('express');
const router = express.Router();
const User = require('../models/user');

// post or add
router.post('/add', async(req, res) => {
    try{
        const {username, password} = req.body;
        const newUser = new User({username, password});
        await newUser.save();
        res.json({message: 'User added successfully!'});
    } catch(err){
        res.status(500).json({error: err.message});
    }
});

// get or get all users
router.get('/all', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users); 
    } catch (err){
        res.status(500).json({error: err.message});
    }
})

module.exports = router;