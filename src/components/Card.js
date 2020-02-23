import React from "react";
import "./Card.css";

const Card = ({ name, email, id }) => {
  return (
    <div className="Card">
      <img src={`https://robohash.org/${id}?size=200x200`} alt="avatar" />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
