Array.prototype.myEach = function(callback) { 
  for (let i = 0; i < this.length; i++) { 
    callback(this[i]); 
  } 
}; 

Array.prototype.myMap = function(callback) { 
  const res = []; 
  // how do we get each iteration back from myEach to store in res? 
  let cb = (el) => { res.push(callback(el)) }; 
  // this.myEach((el) => res.push(callback(el))); // This also works, is probably cleaner too 
  this.myEach(cb); 
  return res; 
}; 

Array.prototype.myReduce = function(callback, initialValue) { 
  let counter = 0; 
  
  if (initialValue === undefined) { // then do something or not, your choice 
    initialValue = this[0]; 
    counter++; 
  } 
  let cb = (el) => (initialValue += callback(el)); 
  this.slice(counter).myEach(cb); 
  return initialValue; 
}; 

Array.prototype.bubbleSort = function() {
  let sorted = false; 

  while (sorted === false) { 
    sorted = true; 
    for (let i = 0; i < this.length; i++) { 
      for (let j = i+1; j < this.length; j++) { 
        if (this[j] < this[i]) { 
          let temp = this[i]; 
          this[i] = this[j]; 
          this[j] = temp; 
          sorted = false; 
        } 
      } 
    } 
  } 
  return this; 
}; 

String.prototype.substrings = function() { 
  const res = []; 
  for (let i = 0; i < this.length; i++) { 
    for (let j = i + 1; j <= this.length; j++) { 
      res.push(this.slice(i, j)); 
    } 
  } 
  return res; 
}; 

function myRange(start, end) {
  if (start === end) {
    return [start];
  }
  let res = [start].concat(myRange(start+1, end));
  return res;
}