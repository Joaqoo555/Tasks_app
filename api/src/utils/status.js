const successCode = 200;
const createCode = 201;
const errorCode = 400;
const internalErrorCode =500;
const notFoundCode = 404;
const HandleSuccessResponse = (message = "Se realizo con exito", info = undefined) =>{
    return {
        status: "Success",
        message,
        info
    }
}
const HanldeErrorResponse = (errorMessage, error)=> {
    if(error.code === 11000 || error.code === 11001)
        return {
            status: error.status,
            errorMessage: "Esta tarea ya esta creada en la base de datos.",
            error
        }
    else return {
        status: error.status,
        errorMessage,
        error
    }
};

module.exports = {
    successCode,
    errorCode,
    HandleSuccessResponse,
    HanldeErrorResponse,
    createCode,
    internalErrorCode,
    notFoundCode
}