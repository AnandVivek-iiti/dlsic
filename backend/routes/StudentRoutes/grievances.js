// import router from "../profile";
import express from "express";
const router = express.Router();
// POST /api/grievances
router.post("/grievances", async (req, res) => {
  try {
    const { grievanceType, description, isAnonymous, name, class: studentClass } = req.body;
    await GrievanceModel.create({
      grievanceType,
      description,
      isAnonymous,
      name: isAnonymous ? undefined : name,
      class: isAnonymous ? undefined : studentClass,
      createdAt: new Date(),
    });
    res.status(200).json({ message: "Grievance submitted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to submit grievance" });
  }
});
export default router ;