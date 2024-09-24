import { Router } from "express";
const router = Router();
import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";

import { checkForTestuser } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getAllJobs)
  .post(checkForTestuser, validateJobInput, createJob);

router.route("/stats").get(showStats);

router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(checkForTestuser, validateIdParam, validateJobInput, updateJob)
  .delete(checkForTestuser, validateIdParam, deleteJob);

export default router;
