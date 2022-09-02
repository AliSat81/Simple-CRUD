const multer = require('multer')


// set storage


const storage = multer.diskStorage({
    destination : function ( req , file , cb ){
        cb(null, '../src/uploads')
    },
    filename : function (req, file , cb){
        let day = new Date().getDate()
        let hour = new Date().getHours()
        const ext = file.originalname.substr(file.originalname.lastIndexOf('.'))
        hashCode = s => s.split('').reduce((a,b)=>{a=((a<<5)-a)+b.charCodeAt(0);return a&a},0)
        hashFileName = hashCode(file.fieldname+'-'+req.body.email+day+hour)
        cb(null, hashFileName+ ext)
    }
})

module.exports = store = multer({ storage : storage })