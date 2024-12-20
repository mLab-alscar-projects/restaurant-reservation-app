import Review from "../Models/reviews.js";

const getReviewsByRestaurantId = async (req, res) => {
    const { restaurantId } = req.params;

    // Validate restaurantId
    if (!restaurantId) {
        return res.status(400).json({ error: "Restaurant ID is required." });
    }

    try {
        // Fetch reviews for the specified restaurant ID
        const reviews = await Review.find({ restaurantId });

        // Check if reviews exist
        if (reviews.length === 0) {
            return res.status(404).json({ message: "No reviews found for this restaurant." });
        }

        // Respond with the list of reviews
        res.status(200).json({
            message: "Reviews retrieved successfully!",
            reviews,
        });
    } catch (error) {
        console.error("Error fetching reviews by restaurant ID:", error); // Log the error for debugging
        res.status(500).json({ error: "Internal server error" });
    }
};

export default getReviewsByRestaurantId;
