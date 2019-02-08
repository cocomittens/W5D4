Array.prototype.uniq = function() {
  let res = []; 

  for (let i = 0; i < this.length; i++) {
    let uniq = true; 
    for (let j = 0; j < this.length; j++) {
      if (this[j] === this[i] && j !== i) {
        uniq = false; 
      }
    }
    if (uniq === true) {
      res.push(this[i]); 
    }
  }

  return res;
};

Array.prototype.twoSum = function() {
  let res = [];

  for (let i = 0; i < this.length; i++) {
    for (let j = i+1; j < this.length; j++) {
      if (this[j] + this[i] === 0) {
        res.push([i, j]);
        // console.log([j, i]);
      }
    }
  }

  return res;
};

Array.prototype.transpose = function() {
  let res = []; 

  for (let i = 0; i < this.length; i++) {
    // use a temp array that then gets concat'ed into res 
    let temp = []; 
    for (let j = 0; j < this[0].length; j++) {
      temp.push(this[j][i]);
    }
    res.push(temp);
  }

  return res; 
};