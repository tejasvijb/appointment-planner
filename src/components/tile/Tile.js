import React from "react";

export const Tile = ({tile}) => {
  return (
    <div className="tile-container">
      {Object.values(tile).map((value,index) => {
        if(index === 0) return <p key={index} className="tile-title">{value}</p>
        else return <p key={index} className="tile">{value}</p>
      })}
    </div>
  );
};
