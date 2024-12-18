import Reservation from "../Models/reservations.js";

const getReservationById = async (req, res) => {
    try {
        const { id } = req.params; // Extract the ID from the request parameters

        // Fetch the reservation with the given ID
        const reservation = await Reservation.findById(id);

        // Check if the reservation exists
        if (!reservation) {
            return res.status(404).json({
                message: "Reservation not found"
            });
        }

        // Respond with the reservation data
        res.status(200).json({
            message: "Reservation retrieved successfully!",
            reservation
        });
    } catch (error) {
        console.error("Error fetching reservation:", error); // Log the error for debugging
        res.status(500).json({ error: "Internal server error" });
    }
};

export default getReservationById