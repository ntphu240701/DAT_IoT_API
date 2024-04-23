const router = require("express").Router();
const auth = require("./authprocess");
// CRUD - create, get, update, drop 

// 0
router.get("/", async (req, res) => {
  res.status(200).json({ message: "Auth Connected!" });
});

// 1 /getUser
router.post("/getUser", async (req, res) => {
  let usr = await auth.getUser(req.body.mail);
  res.status(200).json(usr);
});

module.exports = router;
