const users = require('../utils/users.js');

const login = (req, res) => {
    const { email, password } = req.body;

    const userFound = users.find((user)=> user.email === email && user.password === password) 

    return userFound 
    ? res.status(200).json({accsess: true})
    : res.status(404).json({accsess: false})

}

module.exports = {login};