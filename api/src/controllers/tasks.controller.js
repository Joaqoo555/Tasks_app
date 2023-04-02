const Tasks = require("../schemas/tasks.shema")

const POST_create_tasks = async (req, res) => {

    const {title, description} = req.body

    const task1 = await Tasks.create({
        title,
        description
    })

    res.status(201).send("Task created")
}


const GET_tasks = async (req, res) => {
    const findtask = await Tasks.find()
    
    console.log(findtask)
    res.json("Obtener Tareas")
}

module.exports = {
    POST_create_tasks,
    GET_tasks
}