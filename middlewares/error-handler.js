const CustomApiError = require('../errors/custom_error');

const errorHandlerMiddleWare = (err, req, res, next) => {
    if (err instanceof CustomApiError) {
        return res.status(err.statusCode).json({msg: err.message})
    }
    return res.status(err.status).json({ msg: "Something went wrong. Please try again later. " });
}

module.exports = errorHandlerMiddleWare;