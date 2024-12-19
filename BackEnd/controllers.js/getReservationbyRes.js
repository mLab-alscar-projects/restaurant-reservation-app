import Reservation from "../Models/reservations.js";
import mongoose from 'mongoose';

// Controller to get reservations based on restaurantId
const getReservationsByRestaurant = async (req, res) => {
  try {
    const { id } = req.params;
    
    // Validate id
    if (!id) {
      return res.status(400).json({ message: 'Restaurant ID is required' });
    }

    // Validate if id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid Restaurant ID format' });
    }

    const reservations = await Reservation.find({ 
      restaurantId: new mongoose.Types.ObjectId(id) 
    });

    if (reservations.length === 0) {
      return res.status(404).json({ message: 'No reservations found for this restaurant' });
    }

    return res.status(200).json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default getReservationsByRestaurant;