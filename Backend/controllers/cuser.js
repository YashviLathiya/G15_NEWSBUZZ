const usermodel = require("../models/muser");
const jsonwebtoken = require("jsonwebtoken");
const CryptoJS = require('crypto-js');

const logInPost = async (req, res) => {

  console.log("req.body", req.body);

  const { email, password, role } = req.body;


  if (!role || !email || !password) {
    return res.status(210).json({ success: false, message: "All fields required" });
  }

  console.log(req.body.email);

  const userExist = await usermodel.findOne({
    email, role
  });

  if (!userExist) {
    return res.status(210).json({ success: false, message: "User not exist" });
  }

  // console.log(req.body.email);
  // Decrypt the stored password
  const decryptedPwd = CryptoJS.AES.decrypt(password, "news-aggregator-secret").toString(CryptoJS.enc.Utf8);
  console.log("decryptedPwd", decryptedPwd);

  const decrypteuserExistPwd = CryptoJS.AES.decrypt(userExist.password, "news-aggregator-secret").toString(CryptoJS.enc.Utf8);
  console.log("decrypteuserExistPwd", decrypteuserExistPwd);


  if (decryptedPwd !== decrypteuserExistPwd) {
    return res.status(210).json({ success: false, message: "Invalid password" });
  }

  const token = jsonwebtoken.sign({ id: userExist._id }, process.env.JWT_SECRET);

  return res.status(202).json({ success: true, message: "User signed in successfully", token: token });

};

module.exports = {logInPost};