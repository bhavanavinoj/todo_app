const express = require('express')
const router = express.Router()
const userController = require ('../Controller/user/userController')
const authController = require('../Controller/auth/authController')

router.get("/user",userController.getUsers)
router.get("/user/:id",userController.getUserById)
router.post("/createUser",userController.createUser)
router.put("/updateUser/:id",userController.updateUser)
router.delete("/deleteUser/:id",userController.deleteUser)
router.post("/register", authController.registerUser)
router.post("/login", authController.loginUser)
router.post("/logout", authController.logoutUser);

module.exports = router
