const router = require("express").Router();
const passwordController = require("../controllers/passwordController");

//get all password data
router.get("/", passwordController.findAll);

//add new password
router.post("/", passwordController.create);

module.exports = router;