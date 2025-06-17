import { Star } from "lucide-react";
import React from "react";

// Rating component for displaying star ratings
// Props: rating (number) - the number of stars to fill
type RatingProps = {
  rating: number;
};

const Rating = ({ rating }: RatingProps) => {
  // Render 5 stars, filled based on rating value
  return [1, 2, 3, 4, 5].map((index) => (
    <Star
      key={index}
      color={index <= rating ? "#FFC107" : "#E4E5E9"}
      className="w-4 h-4"
    />
  ));
};

export default Rating;
