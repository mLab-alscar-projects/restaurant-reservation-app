import Reservation from "../Models/reservations.js";

const getAllReservations = async (req, res) => {
    try {
        // Fetch all reservations from the database
        const reservations = await Reservation.find();

        // Respond with the list of reservations
        res.status(200).json({
            message: "Reservations retrieved successfully!",
            reservations
        });
    } catch (error) {
        console.error("Error fetching reservations:", error); // Log the error for debugging
        res.status(500).json({ error: "Internal server error" });
    }
};

export default getAllReservations