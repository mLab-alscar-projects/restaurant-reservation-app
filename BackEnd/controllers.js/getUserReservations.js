import Reservation from "../Models/reservations.js";
import mongoose from 'mongoose';

// Controller to get reservations based on userId
const getReservationsByUser = async (req, res) => {
  try {
    // Log the entire req.params to debug
    console.log('Request params:', req.params);
    
    const { id } = req.params; 
    
    // Validate id
    if (!id) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    // Convert userId string to ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: 'Invalid User ID format' });
    }

    const reservations = await Reservation.find({ 
      userId: new mongoose.Types.ObjectId(id) 
    });

    if (reservations.length === 0) {
      return res.status(404).json({ message: 'No reservations found for this user' });
    }

    return res.status(200).json(reservations);
  } catch (error) {
    console.error('Error fetching reservations:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

export default getReservationsByUser;