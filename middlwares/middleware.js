const middleware = (req, res, next) => {
  if (req.params.action === "showerror") {
    return res.status(400).json({
      success: false,
      message: "throwing error from middleware",
    });
  } else {
    req.key = "value";
    next();
  }
};

module.exports = middleware;
