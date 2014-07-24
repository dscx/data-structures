var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = mixIn({});

  // Use an object with numeric keys to store values
  var storage = {};
  // var instanceSize = 0;
  var nextUp = 1;
  var newItem = 1;


  someInstance.enqueue = function(value){
    someInstance.instanceSize++;
    storage[newItem] = value;
    newItem++;
  };

  someInstance.dequeue = function(){
    var save = storage[nextUp];
    delete storage[nextUp];
    nextUp++;
    if(someInstance.instanceSize > 0){someInstance.instanceSize--;}
    return save;
  };

  // someInstance.size = function(){
  //   return instanceSize;
  // };

  return someInstance;
};

var queueMethods = {};









