module.exports = (err, res, next) => {
    const httpsStatus = err.status || 500;

    return res.status(httpsStatus).send({
        status: httpsStatus,
        message: err.message || "Internal server error"
    });
}