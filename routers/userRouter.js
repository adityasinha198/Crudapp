const express = require('express')
const router  = express.Router()

const userController = require('../controllers/userController')

router.get('/getinfo',userController.getuser)
router.post('/register',userController.adduser)
router.patch('/update/:id',userController.upadateuser)
router.delete('/remove/:id',userController.deleteuser)



module.exports = router