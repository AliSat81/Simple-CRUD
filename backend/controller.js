let User = require('./models/user.model')
const fs = require('fs')

hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)


//get users
exports.home = async (req, res) => {
    User.find()
    .then( users => {
        res.json(users)
    })
    .catch(err => res.status(400).json('ERROR : '+ err ))
}

//add users
exports.create = (req, res) => {
    const file = req.file
    const ext = file.originalname.substr(file.originalname.lastIndexOf('.'))


    let day = new Date().getDate()
    let hour = new Date().getHours()
    const fileName = file.fieldname +'-'+req.body.email+day+hour
    hashFileName = hashCode(fileName) + ext
    const contentType = file.mimetype

    const newUser = new User ({
        email : req.body.email,
        firstName : req.body.firstName,
        lastName : req.body.lastName,
        ip : req.body.ip ,
        country : req.body.country,
        city : req.body.city,
        date : req.body.date ,
        filename : hashFileName ,
        contentType : contentType ,
    })
    newUser.save()
    .then( () =>res.json('User Added'))
    .catch( err => {
        const dir = '../src/uploads/'+hashFileName
        fs.rmSync(dir)
        res.status(400).json('ERROR : '+ err )
    })
    
    
}

exports.remove = (req ,res) => {

    User.findByIdAndDelete(req.params.id)
    .then((user) => {
        const dir = '../src/uploads/'+user.filename
        fs.rmSync(dir)
        res.json('User Deleted')
    })
    .catch( err => {
        console.log(err)
        res.status(400).json('ERROR : ' + err )
    })
}