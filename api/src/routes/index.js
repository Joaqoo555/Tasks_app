const { Router } = require("express");
const tasksRouter = require("./tasks.routes.js")







const router = Router();

router.use("/tasks", tasksRouter);

/*
router.use("/users", []);
router.use("/auths", []);
*/






module.exports = router;
