const Tasks = require("../schemas/tasks.shema");

const POST_create_tasks = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if(!title || !description) throw new Error("Not available if not passage the content")
    const newTask = await Tasks.create({
      title,
      description,
      status
    });

    res.status(201).send(newTask);
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
};

const GET_tasks = async (req, res) => {
  try {
    const findAllTasks = await Tasks.find({});
    //if(findAllTasks.length === 0) return res.status(200).json({message: "Not Tasks"})
    return res.status(200).json(findAllTasks);
  } catch (error) {
    res.status(404).json({ message: error.message, error });
  }
};
const GET_oneTask = async (req, res) => {
  try {
    const { idTask } = req.params;

    const findOnetask = await Tasks.findById(idTask);
    return res.status(200).json(findOnetask);
  } catch (error) {
    res.status(404).json({ message: error.message, error });
  }
};

const PUT_tasks = async (req, res) => {
  const { idTask } = req.params;
  try {
    const newData = req.body;

    const updateTask = await Tasks.findByIdAndUpdate(idTask, newData, {
      new: true,
    });

    res.status(200).json(updateTask);
  } catch (error) {
    res.status(400).json({ message: error.message, error });
  }
};

const DELETE_tasks = async (req, res) => {
  try {
    const deleted = await Tasks.deleteMany({});
    if (deleted.deletedCount === 0) throw new Error("The tasks is not exits")
    return res.send("Documents deleted successfully");
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};
const DELETE_oneTask = async (req, res) => {
  try {
    const { idTask } = req.params;
    const deletedTask = await Tasks.findByIdAndDelete(idTask);
    if(!deletedTask) throw new Error("The task is not exits")
    return res
      .status(404)
      .json({ message: `Delete task is resolved` });
  } catch (error) {
    res.status(500).json({ message: error.message, error });
  }
};
module.exports = {
  POST_create_tasks,
  GET_tasks,
  GET_oneTask,
  DELETE_tasks,
  DELETE_oneTask,
  PUT_tasks,
};
