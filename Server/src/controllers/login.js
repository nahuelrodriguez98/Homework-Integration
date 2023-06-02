const { User } = require('../DB_connection')

module.exports = async (req,res)=>{
    try {
        const { email, password } = req.query;

        if(!email || !password) return res.status(400).send("Faltan datos");

        const user = await User.findOne({where:{email}})//donde el email sea igual al email 

        if(!user) return res.status (404).send("Usuario no encontrado")

        return user.password === password 
        ? res.json({access: true}) 
        : res.status(403).send("Contraseña incorrect)");

    } catch (error) {
        return res.status(500).send(error.message)
    }
}