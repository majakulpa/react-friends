import React from "react";
import Card from "./Card";

const CardList = ({ robots }) => {
  const style = {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  };
  return (
    <div style={style}>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            id={robots[i].id}
            name={robots[i].name}
            email={robots[i].email}
          />
        );
      })}
    </div>
  );
};

export default CardList;
