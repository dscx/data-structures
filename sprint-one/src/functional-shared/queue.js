var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.


  // Use an object with numeric keys to store values
  var someInstance = {
    storage : {},
    instanceSize : 0,
    nextUp : 1,
    newItem : 1
  };
  
  _.defaults(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {

  enqueue : function(value){
    this.instanceSize++;
    this.storage[this.newItem] = value;
    this.newItem++;
  },

  dequeue : function(){
    var save = this.storage[this.nextUp];
    delete this.storage[this.nextUp];
    this.nextUp++;
    if(this.instanceSize > 0){this.instanceSize--;}
    return save;
  },

  size : function(){
    return this.instanceSize;
  }


};









