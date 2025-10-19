// Name: Alex Sifuenets
//Student ID: 1226486237
//Date: 10/19/2025

const loggerMiddleware = (req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} request to ${req.url}`);
    next()
};

module.exports = loggerMiddleware;