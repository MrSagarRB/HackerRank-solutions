import React from 'react'

function ArrayRev() {

    function reverseArray(a) {
        // Write your code here
        var rev = []
    
        for (let i = a.length - 1; i >= 0; i--) {
    
            rev.push(a[i]);
        }
    
        return rev;
    
    }
  return (
      
    <div>ArrayRev</div>
  )
}

export default ArrayRev