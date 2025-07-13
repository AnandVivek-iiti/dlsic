// utils/roleMiddleware.js
export const checkRole = (allowedRoles) => {
  return (req, res, next) => {
    const userRole = req.userRole; // comes from JWT decoding middleware
    if (!allowedRoles.includes(userRole)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};