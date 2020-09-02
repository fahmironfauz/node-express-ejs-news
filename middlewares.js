const logger = (req, res, next) => {
    let d = new Date();
    let timestamp = d.toJSON().slice(0,19).replace('T',':');
    console.log(`${req.method} ${req.url} at ${timestamp}`);
    next();
}

//Nomer 1-Challange Bonus
const internalServerError = (err, req, res, next) => {
    console.error(err)
    res.status(500).json({
        status: 'fail',
        errors: err.message
    })
    next();
}

const notFoundHandler = (req, res, next) => {
    res.status(404).send("URL Not Found");
    next();
}

module.exports = {logger, internalServerError, notFoundHandler};