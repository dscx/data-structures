var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someObject = Object.create(stackMethods);
  someObject.counter = 0;
  someObject.storage = {};
  return someObject;
};

var stackMethods = {

  push: function(value){
    this.counter++;
    this.storage[this.counter] = value;
  },
  pop: function(){
    var save = this.storage[this.counter];
    delete this.storage[this.counter];
    if(this.counter > 0){this.counter--;}
    return save;
  },
  size: function(){
    return this.counter;
  } 


};

