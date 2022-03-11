module.exports = (req, res, next) => {
  const { password } = req.body;

  if (req.path === "/login") {
    if (![password].every(Boolean)) {
      return res.status(401).json("Missing Credentials");
    }
  }

  next();
};