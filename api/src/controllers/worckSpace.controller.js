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
const WorckSpace = require("../schemas/workSpace.shema.js");

const getAllWorckSpaces = (req, res) => {
  try {
    //Obtengo los worckspaces para elegir en cual voy a estar parado al momento de crear las tasks.
  } catch (error) {}
};

const createWorckSpace = async (req, res) => {
  try {
    const { title, description } = req.body;
    // El worcksSpace va a contar con un titulo y descripcion, a su vez va a contener las tasks indicadas para ese espacio de trabajo o "proyecto".
    const newWorckSpace = await WorckSpace.create({title, description});
  } catch (error) {}
};

const getOneWockSpace = (req, res) => {
  try {
    //Obtener el Id del worckspace. para poder integrarlo en el espacio de trabajo.
  } catch (error) {}
};

const updateWorckSpace = async (req, res) => {
  try {
    const {idWS} = req.params;
    const { idTask} = req.body;
    const updateWorckSpace = await WorckSpace.findByIdAndUpdate(idWS, {$push : {tasks: idTask}}, {new: true})
    res.status(successCode).json(HandleSuccessResponse("El espacio de trabajo se actualizo con exito", updateWorckSpace));

  } catch (error) {
    res.status(internalErrorCode).json(HanldeErrorResponse(error.message, error));
  }
};

const deleteWorckSpace = (req, res) => {
  try {
  } catch (error) {}
};

module.exports = {
  getAllWorckSpaces,
  getOneWockSpace,
  createWorckSpace,
  updateWorckSpace,
  deleteWorckSpace,
};
