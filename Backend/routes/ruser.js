const router = require("express").Router();
const { logInPost } = require("../controllers/cuser.js");


router.post("/login", logInPost);


module.exports = router;