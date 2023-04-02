const { Router } = require("express");
const {POST_create_tasks, GET_tasks} = require("../controllers/tasks.controller.js")
const router = Router()


router.get("/", GET_tasks)


router.post("/", POST_create_tasks)


router.put("/", async (req, res)=> {
    res.json("Actualize Task")
})

router.delete("/", async (req, res)=> {
    res.json("Delete Task")
})


module.exports = router