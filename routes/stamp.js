const express = require("express")
const router = express.Router()
const stamp = require("../controllers/stamp")

router.post("/", stamp.postStamp)
router.get("/checkout", stamp.checkoutStamp)
router.get("/order", stamp.checkoutStamp)

module.exports = router
