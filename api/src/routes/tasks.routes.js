const { Router } = require("express");
const {
  POST_create_tasks,
  GET_tasks,
  PUT_tasks,
  DELETE_tasks,
  GET_oneTask,
  DELETE_oneTask
} = require("../controllers/tasks.controller.js");
const router = Router();

router.get("/:idTask", GET_oneTask);
router.get("/", GET_tasks);


router.post("/", POST_create_tasks);


router.put("/:idTask", PUT_tasks);


router.delete("/", DELETE_tasks);
router.delete("/:idTask", DELETE_oneTask);


module.exports = router;
