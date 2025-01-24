import Reservation from "../Models/reservations.js";

const updateReservation = async (req, res) => {
    const {id} = req.params;
    const {updatedData} = req.body;
   try {
    const reservation = await Reservation.findOneAndUpdate( { _id: id }, updatedData, { new : true} );
    if (!reservation)
        {
            return reservation.status(404).json({message: "Reservation not found with the id"});
        }
    res.status(201).json({message: 'Successfully updated reservation', data: reservation});
   } catch (error) {
    res.status(500).json({message: 'Failed to update reservation', error: error.message});
    console.error("Failed to update reservation", error.message)
   }
};
export default updateReservation;