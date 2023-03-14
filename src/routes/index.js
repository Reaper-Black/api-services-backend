const { Router } = require('express')
const router = Router()

const User = require('../models/users')
const jwt = require('jsonwebtoken')

router.post('/signup', async (req, res) => {
    const {email, nickname, password, rol} = req.body
    const newUser = new User({email: email, nickname: nickname, password: password, rol: rol})
    await newUser.save()
    const token = jwt.sign({_id : newUser._id }, 'token')
    res.status(200).json({token})
})

router.post('/signin', async (req, res) => {
    const { email, password } = req.body
    const user =  await User.findOne({email: email})
    if (!user) return res.status(401).send("Correo inexistente")
    if (user.password !== password) return res.status(401).send("Contraseña erronea")
    const token = jwt.sign({_id: user._id}, 'token')
    console.log(user)
    return res.status(200).json({token, user})
})

router.get('/signin', verifyToken, async (req, res) => {
    let _id = req.userId;
    let usuario = await User.findOne({_id})
    res.json({usuario})
  })

router.get('/dashboard', verifyToken, (req, res) => {
    res.send(req.userId)
})

module.exports = router

function verifyToken(req, res, next){
   if(!req.headers.authorization){
    return res.status(401).send('Petición no autorizada')
   }

   const token = req.headers.authorization.split(' ')[1]
   if (token === 'null'){
    return res.status(401).send('Petición no autorizada')
   }

   const data = jwt.verify(token, 'token')
   req.userId = data._id
   next()
}