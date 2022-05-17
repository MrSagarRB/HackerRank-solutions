import React from "react";

function ArrayPairSumZero() {
  [-5, -4, -3, -2, 0, 2, 4, 6, 8];

  function getSumZero(a) {
    for (let number of a) {
      for (let j = 1; j < a.length; j++) {
        if (number + a[j] === 0) {
          return [number, a[j]];
        }
      }
    }
  }

  console.log(getSumZero([-5, -4, -3, -2, 0, 2, 4, 6, 8]));

  return <div>ArrayPairSumZero</div>;
}

export default ArrayPairSumZero;
