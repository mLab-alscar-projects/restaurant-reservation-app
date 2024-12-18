import Reservation from "../Models/reservations.js";


const createReservation = async (req, res) => {
    try {
        const {
            userId,
            restaurantId,
            name,
            email,
            dateOfPayment,
            numberOfTables,
            restaurantName,
            location,
            timeslot,
            amount
        } = req.body;

        // Log incoming request data for debugging
        console.log("Incoming reservation data:", req.body);

        // Create a new reservation
        const newReservation = await Reservation.create({
            userId,
            restaurantId,
            name,
            email,
            dateOfPayment,
            numberOfTables,
            restaurantName,
            location,
            timeslot,
            amount
        });

        // Respond with the created reservation
        res.status(201).json({
            message: "Reservation successfully created!",
            reservation: {
                id: newReservation._id,
                userId: newReservation.userId,
                restaurantId: newReservation.restaurantId,
                name: newReservation.name,
                email: newReservation.email,
                dateOfPayment: newReservation.dateOfPayment,
                numberOfTables: newReservation.numberOfTables,
                restaurantName: newReservation.restaurantName,
                location: newReservation.location,
                timeslot: newReservation.timeslot,
                amount: newReservation.amount,
                isActive: newReservation.isActive,
                isRead: newReservation.isRead,
                message: newReservation.message,
                createdAt: newReservation.createdAt,
                updatedAt: newReservation.updatedAt
            }
        });
    } catch (error) {
        console.error("Reservation creation error:", error); // Log the error for debugging
        res.status(500).json({ error: "Internal server error" });
    }
};

export default createReservation 