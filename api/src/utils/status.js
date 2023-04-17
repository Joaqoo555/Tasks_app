const successCode = 200;
const createCode = 201;
const errorCode = 400;
const internalErrorCode =500;
const notFoundCode = 404;
const HandleSuccessResponse = (message = "Se realizo con exito", info = undefined) =>{
    return {
        status: "success",
        message,
        info
    }
}
const HanldeErrorResponse = (errorMesssage, error)=> {
    return {
        status: "Error",
        errorMesssage,
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