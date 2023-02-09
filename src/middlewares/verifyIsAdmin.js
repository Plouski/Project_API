function verifyIsAdmin(req, res, next) {
  console.log(req.userToken);
  if (!req.userToken.isAdmin) {
    return res.status('401').send({
      auth: false,
      message: "Vous devez etre admin"
    })
  }
  next();
}

module.exports = verifyIsAdmin;