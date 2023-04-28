const { Router } = require("express");
const {
  createTask,
  getTask,
  getAllTasks,
  putTask,
  deleteTask,
  deleteAllTasks,  
} = require("../controllers/tasks.controller.js");
const { validateTasks } = require("../utils/conditionalTasks.js");
const router = Router();

router.get("/:idTask",  validateTasks, getTask);
router.get("/", validateTasks, getAllTasks);


router.post("/", validateTasks, createTask);


router.put("/:idTask", validateTasks,putTask);


router.delete("/", deleteAllTasks);
router.delete("/:idTask", deleteTask);


module.exports = router;
