const WorckSpace = require("../schemas/workSpace.shema")
const { internalErrorCode, HanldeErrorResponse } = require("./status")

async function validateTasks (req, res, next) {
    try {
        const foundWorckSpace = await WorckSpace.count()
        if(foundWorckSpace) return next()
        else throw new Error("No existen worckspaces, no podes hacer tareas")
    } catch (error) {
        return res.status(internalErrorCode).json(HanldeErrorResponse(error.message, error))
    }
}

module.exports = {
    validateTasks
}