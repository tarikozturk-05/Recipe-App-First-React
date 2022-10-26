import React from "react";

const RecipeCars = ({arr}) => {
  // console.log(arr.recipe);
  return (
    <div>
      <div  className="card shadow" style={{width: "18rem",height: "26rem"}}>
        <img src={arr?.recipe?.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{arr?.recipe?.label}</h5>
         
          <a href="#" style={{color:"aqua",backgroundColor:"#1B7F79"}} className="btn ">
            Detail
          </a>
        </div>
      </div>
    </div>
  );
};

export default RecipeCars;
