const logRequest = (req, res, next) => {
  console.log("a request to", req.path);
  next();
};

module.exports = logRequest;
