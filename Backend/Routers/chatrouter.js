const express = require("express");
const router = express.Router();
const { chatController } = require("../Controllers/chatcontroller.js");

// router.post("/", (req, res) => {
//   const { message, history } = req.body;
//   res.json({ reply: "AI reply here" });
// }

// );
router.post("/", chatController);
module.exports = router;