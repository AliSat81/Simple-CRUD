const route = require('express').Router()
const multer  = require('multer')
const controller = require('./controller')
//const upload = multer({ dest: '../uploads' })
const store = require('./middleware/multer')


route.get('/',controller.home)
route.post('/createuser/',store.single('uploaded_file'),controller.create)
route.delete('/deleteuser/:id',controller.remove)

module.exports = route

