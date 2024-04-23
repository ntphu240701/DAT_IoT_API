const router = require("express").Router();
const data = require("./dataprocess");

// 0
router.get("/", async (req, res) => {
    res.status(200).json({ message: "Data Connected!" });
});

module.exports = router;