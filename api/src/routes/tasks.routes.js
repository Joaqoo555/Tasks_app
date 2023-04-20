const { Router } = require("express");
const {
  createTask,
  getTask,
  getAllTasks,
  putTask,
  deleteTask,
  deleteAllTasks,  
} = require("../controllers/tasks.controller.js");
const router = Router();

router.get("/:idTask", getTask);
router.get("/", getAllTasks);


router.post("/", createTask);


router.put("/:idTask", putTask);


router.delete("/", deleteAllTasks);
router.delete("/:idTask", deleteTask);


module.exports = router;
