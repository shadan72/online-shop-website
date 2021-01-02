import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfAlt as farStarHalf,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
export default function Rating(props) {
  const { rating, numReviews } = props;
  return (
    <div>
      <FontAwesomeIcon
        icon={rating >= 1 ? faStar : rating >= 0.5 ? farStarHalf : farStar}
      />
      <FontAwesomeIcon
        icon={rating >= 2 ? faStar : rating >= 1.5 ? farStarHalf : farStar}
      />
      <FontAwesomeIcon
        icon={rating >= 3 ? faStar : rating >= 2.5 ? farStarHalf : farStar}
      />
      <FontAwesomeIcon
        icon={rating >= 4 ? faStar : rating >= 3.5 ? farStarHalf : farStar}
      />
      <FontAwesomeIcon
        icon={rating >= 5 ? faStar : rating >= 4.5 ? farStarHalf : farStar}
      />
      <span>
        {numReviews + ' reviews'}
      </span>
    </div>
  );
}
