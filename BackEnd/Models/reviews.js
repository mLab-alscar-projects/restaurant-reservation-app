
import mongoose from "mongoose";

const reviewsSchema = new mongoose.Schema({
  userId:{
   type: mongoose.Schema.Types.ObjectId,
   required:true,
   ref: "Clients"
  },
  restaurantId:{
  type:mongoose.Schema.Types.ObjectId,
  required: true,
  ref: "Restaurants"
  },
  heading: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100, 
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5, 
  },
  message: {
    type: String,
    required: true,
    trim: true,
    maxlength: 1000, 
  },
  createdAt: {
    type: Date,
    default: Date.now, 
  },
  isActive: { 
    type: Boolean, 
    default: true 
  },
  isRead: { 
    type: Boolean, 
    default: false 
  },
});

const Review = mongoose.model('Reviews', reviewsSchema);

export default Review
