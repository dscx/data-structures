var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  

var someInstance = mixIn({});
someInstance.storage = {};
someInstance.instanceSize = 0;
return someInstance;

};


var stackMethods = {};





var push = function(value){
  this.instanceSize++;
  this.storage[this.instanceSize] = value;

};
var pop = function(){
  var save = this.storage[this.instanceSize];
  delete this.storage[this.instanceSize];
  if(this.instanceSize > 0){this.instanceSize--;}
  return save;

};


var size = function() {
  return this.instanceSize;
};

var mixIn = function(obj){
  obj.size = size;
  obj.pop = pop;
  obj.push = push;
  return obj;
};

