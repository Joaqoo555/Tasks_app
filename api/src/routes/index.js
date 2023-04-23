const { Router } = require("express");
const tasksRouter = require("./tasks.routes.js")
const tnRouter = require("./tiendaNube.routes.js")






const router = Router();

router.use("/tasks", tasksRouter);
router.use("/tiendaNube", tnRouter);

/*
router.use("/auths", []);
*/






module.exports = router;
