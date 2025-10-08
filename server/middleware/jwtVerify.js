import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config(); 
const secretKey = process.env.secretKey;

function verifyToken(req, res, next) {
  const token = req.headers.authorization.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, secretKey);

    console.log(decoded);
    res.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

export default verifyToken;
