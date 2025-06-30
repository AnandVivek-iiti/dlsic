import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // ✅ Check if Authorization header exists
  if (!authHeader) {
    return res.status(401).json({ message: "No token provided" });
  }

  // ✅ Extract token from "Bearer <token>"
  const token = authHeader.split(" ")[1];
console.log("Token:", token); // Debugging line to check token
  try {
    // ✅ Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;  // ✅ Attach decoded user info
    next();              // ✅ Continue
  } catch (err) {
    console.error("JWT Error:", err.message);

    return res.status(403).json({ message: "Token invalid" }); // ⚠️ 403 = Forbidden
  }
};
