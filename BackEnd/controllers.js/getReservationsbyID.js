import Reservation from "../Models/reservations.js";
// Controller to get reservations based on restaurantId and userId
const getReservationsByRestaurantAndUser = async (req, res) => {
  try {
    const { restaurantId, userId } = req.params;
    // Validate restaurantId and userId
    if (!restaurantId || !userId) {
      return res.status(400).json({ message: 'Restaurant ID and User ID are required' });
    }
    const reservations = await Reservation.find({
      restaurantId,
      userId,
    });
    if (reservations.length === 0) {
      return res.status(404).json({ message: 'No reservations found for this user at this restaurant' });
    }
    return res.status(200).json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default getReservationsByRestaurantAndUser