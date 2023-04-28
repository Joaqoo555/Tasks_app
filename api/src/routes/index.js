const { Router } = require("express");
const tasksRouter = require("./tasks.routes.js")
const tnRouter = require("./tiendaNube.routes.js")
const wsRouter = require("./worckSpace.routes.js")





const router = Router();

router.use("/tasks", tasksRouter);
// router.use("/tiendaNube", tnRouter);
router.use("/worckspace", wsRouter);
/*
router.use("/auths", []);
*/






module.exports = router;
