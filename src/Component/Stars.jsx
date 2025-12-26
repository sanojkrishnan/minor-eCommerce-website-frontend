import React from "react";

function Stars({ rating }) {
  if (!rating) {
    return (
      <>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </>
    );
  } else if (rating === 1) {
    return (
      <>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </>
    );
  } else if (rating === 2) {
    return (
      <>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </>
    );
  } else if (rating === 3) {
    return (
      <>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </>
    );
  } else if (rating === 4) {
    return (
      <>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-regular fa-star"></i>
      </>
    );
  } else if (rating === 5) {
    return (
      <>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </>
    );
  }
}

export default Stars;
