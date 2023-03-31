const { Router } = require("express");
const router = Router()


router.get("/", async (req, res)=> {
    res.json("Obtener Tareas")
})

router.post("/", async (req, res)=> {
    res.json("Create Task")
})

router.put("/", async (req, res)=> {
    res.json("Actualize Task")
})

router.delete("/", async (req, res)=> {
    res.json("Delete Task")
})


module.exports = router