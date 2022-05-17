import React from "react";

function Add() {


    var a = [17, 28, 30];
    var b = [99, 16, 8];
  
    var aScore = 0;
    var bScore = 0;
  
    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        aScore = aScore + 1;
      } else if (a[i] < b[i]) {
        bScore = bScore + 1;
      } else {
        // do nothing
      }
    }



console.log( aScore, bScore );

  return <div></div>;
}

export default Add;
