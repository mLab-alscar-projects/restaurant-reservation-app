import express  from "express";
import { getProfile, loginUser,registerUser,updateProfile } from "../controllers.js/userController.js";
import protect from "../Middleware/protect.js";
import getUsers from "../controllers.js/getUsers.js";
import createReservation from "../controllers.js/reservations.js";
import getAllReservations from "../controllers.js/getAllReservations.js";
import getReservationById from "../controllers.js/getReservationsbyID.js";
import getReservationsByUser from "../controllers.js/getUserReservations.js";
import getReservationsByRestaurant from "../controllers.js/getReservationbyRes.js";
import createReview from "../controllers.js/reviews.js";
import getAllReviews from "../controllers.js/getAllreviews.js";
import getReviewsByRestaurantId from "../controllers.js/getReviewsResID.js";

const router = express.Router()


router.post("/user/login", loginUser);

router.post("/user/register", registerUser)

router.put("/update-profile",  protect, updateProfile)

router.get("/get-profile", protect, getProfile)

router.get("/users", getUsers)

router.post("/reservations", protect, createReservation)

router.get("/get-reservations", protect, getAllReservations)

router.get('/get-reservation/:id', protect, getReservationById);

// Requires user id
router.get('/user-reservations/:id',protect, getReservationsByUser);

// must have restaurant id and will return reservations based on the restaurant
router.get('/restaurant-reservations/:id',protect, getReservationsByRestaurant);

router.post('/reviews', createReview);

router.get('/get-reviews', getAllReviews);

router.get("/reviews/restaurant/:restaurantId", getReviewsByRestaurantId);






export default router
