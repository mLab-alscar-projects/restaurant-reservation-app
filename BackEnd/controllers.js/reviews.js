import Review from "../Models/reviews.js";

const createReview = async (req, res) => {
    const { userId, restaurantId, heading, rating, message } = req.body;

    // Validate required fields
    if (!userId || !restaurantId || !heading || !rating || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

    try {
        // Create a new review instance
        const newReview = new Review({
            userId,
            restaurantId,
            heading,
            rating,
            message,
        });

        // Save the review to the database
        const savedReview = await newReview.save();

        // Respond with the saved review
        res.status(201).json({
            message: "Review created successfully!",
            review: savedReview,
        });
    } catch (error) {
        console.error("Error creating review:", error); // Log the error for debugging
        res.status(500).json({ error: "Internal server error" });
    }
};

export default createReview;
