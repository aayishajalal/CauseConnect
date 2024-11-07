import express from "express";
import {
  createEvent,
  getAllEvents,
//   getNearbyEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  registerForEvent,
  getEventsByOrganizer,
  getEventsByVolunteer,
} from "../controllers/eventController.js";
import protectedRoute from "../middleware/protected.js";

const router = express.Router();

// Protect all routes
router.use(protectedRoute);

router.route("/").post(createEvent).get(getAllEvents);

// router.get("/nearby", getNearbyEvents);
router.get("/organized", getEventsByOrganizer);
router.get("/volunteered", getEventsByVolunteer);

router.route("/:id").get(getEventById).patch(updateEvent).delete(deleteEvent);

router.post("/:id/register", registerForEvent);

export default router;
