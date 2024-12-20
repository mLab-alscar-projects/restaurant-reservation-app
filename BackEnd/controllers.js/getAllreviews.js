import Review from "../Models/reviews.js";

const getAllReviews = async (req, res) => {
    try {
        // Fetch all reviews from the database
        const reviews = await Review.find();

        // Respond with the list of reviews
        res.status(200).json({
            message: "Reviews retrieved successfully!",
            reviews,
        });
    } catch (error) {
        console.error("Error fetching reviews:", error); // Log the error for debugging
        res.status(500).json({ error: "Internal server error" });
    }
};

export default getAllReviews;
