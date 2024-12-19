
import mongoose from "mongoose";

const reservationSchema = new mongoose.Schema({
    userId: { 
      type: mongoose.Schema.Types.ObjectId, 
      required: true, 
      ref: 'Clients' // Reference to the Clients collection 
    },
    restaurantId: { 
      type: mongoose.Schema.Types.ObjectId, 
      required: true, 
      ref: 'Restaurants' 
    },
    name: { 
      type: String, 
      required: true 
    },
    email: { 
      type: String, 
      required: true 
    },
    dateOfPayment: { 
      type: Date, 
      required: true 
    },
    numberOfTables: { 
      type: Number, 
      required: true 
    },
    restaurantName: { 
      type: String, 
      required: true 
    },
    location: { 
      type: String, 
      required: true 
    },
    timeslot: { 
      type: String, 
      required: true 
    },
    amount: { 
      type: Number, 
      required: true 
    },
    isActive: { 
      type: Boolean, 
      default: true // Default value is true
    },
    isRead: { 
      type: Boolean, 
      default: false // Default value is false
    },
    message: { 
      type: String, 
      default: 'Successfully reserved and paid' // Default value for the message
    }
  }, { timestamps: true }); // Adds createdAt and updatedAt fields automatically
  

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation