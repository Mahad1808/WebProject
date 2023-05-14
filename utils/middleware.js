// const verifyToken = (req, res, next) => {
//     const token = req.headers.authorization;
  
//     if (!token) {
//       return res.status(401).json({ message: 'Token not found' });
//     }
  
//     try {
//       const decoded = jwt.verify(token, secret);
//       req.userId = decoded.userId;
//       next();
//     } catch (error) {
//       return res.status(401).json({ message: 'Token not valid' });
//     }
//   };

const jwt = require('jsonwebtoken')
const User  = require('../models/userModel')

const tokenExtractor = async(request, response, next) => {
    const authorization = request.get("authorization");
    if (authorization && authorization.toLowerCase().startsWith("bearer ")) {
      request.token = authorization.substring(7)
    }else{
    request.token= null;}
    next()
  }


  module.exports = {
    tokenExtractor
  }