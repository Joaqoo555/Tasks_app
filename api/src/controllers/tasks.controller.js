const Tasks = require("../schemas/tasks.shema");
const statusResponses = require("../utils/status.js");
const {
  errorCode,
  successCode,
  createCode,
  notFoundCode,
  internalErrorCode,
  HandleSuccessResponse,
  HanldeErrorResponse,
} = statusResponses;

const createTask = async (req, res) => {
  try {
    const { title, description, status } = req.body;
    if (
      !title ||
      typeof title !== "string" ||
      !description ||
      typeof description !== "string"
    )
      throw new Error("Title and description are required and must be strings");

    //Create new Task
    const newTask = await Tasks.create({
      title,
      description,
      status,
    });
    const message = "The Task was successfully created";
    res.status(createCode).send(HandleSuccessResponse(message, newTask));
  } catch (error) {
    res.status(errorCode).json(HanldeErrorResponse(error.message, error));
  }
};

const getAllTasks = async (req, res) => {
  try {
    //Find all tasks.
    const findAllTasks = await Tasks.find({});
    return res
      .status(successCode)
      .send(HandleSuccessResponse("tasks found", findAllTasks));
  } catch (error) {
    res.status(notFoundCode).json(HanldeErrorResponse(error.message, error));
  }
};

const getTask = async (req, res) => {
  try {
    const { idTask } = req.params;
    //Get one Task for idTask, if not found return message
    const findOnetask = await Tasks.findById(idTask);
    if (!findOnetask) {
      return res
        .status(notFoundCode)
        .json(HandleSuccessResponse("task Not found", findOnetask));
    }
    return res
      .status(successCode)
      .json(HandleSuccessResponse("Task Found", findOnetask));
  } catch (error) {
    res
      .status(internalErrorCode)
      .json(HanldeErrorResponse(error.message, error));
  }
};

const putTask = async (req, res) => {
  const { idTask } = req.params;
  try {
    const newData = req.body;

    const updateTask = await Tasks.findByIdAndUpdate(idTask, newData, {
      new: true,
    });

    res
      .status(successCode)
      .json(HandleSuccessResponse("Task actualizated", updateTask));
  } catch (error) {
    res.status(errorCode).json(HanldeErrorResponse(error.message, error));
  }
};

const deleteAllTasks = async (req, res) => {
  try {
    const deleted = await Tasks.deleteMany({});
    if (deleted.deletedCount === 0) throw new Error("not found tasks");
    return res.send(HandleSuccessResponse("Tasks deleted successfully"));
  } catch (error) {
    res
      .status(internalErrorCode)
      .json(HanldeErrorResponse(error.message, error));
  }
};
const deleteTask = async (req, res) => {
  try {
    const { idTask } = req.params;
    const deletedTask = await Tasks.findByIdAndDelete(idTask);
    if (!deletedTask) throw new Error("The task not exits");
    return res
      .status(successCode)
      .json(HandleSuccessResponse(`Delete task is resolved`));
  } catch (error) {
    res
      .status(internalErrorCode)
      .json(HanldeErrorResponse(error.message, error));
  }
};
module.exports = {
  createTask,
  getAllTasks,
  getTask,
  deleteAllTasks,
  deleteTask,
  putTask,
};
