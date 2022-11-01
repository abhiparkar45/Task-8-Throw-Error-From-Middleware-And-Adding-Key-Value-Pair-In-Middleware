const express = require('express');
const middleware = require("../middlwares/middleware");
const controller = require("../controllers/controller")

const router = express.Router();

router.get("/:action",middleware,controller);

module.exports = router;