const express = require("express");

const router = express.Router();

const assignmentController = require("../controllers/assignment-controller");

router.get("/:prompt", assignmentController.getResponse);

module.exports = router;
