var makeQueue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var instanceSize = 0;
  var nextUp = 1;
  var newItem = 1;


  someInstance.enqueue = function(value){
    instanceSize++;
    storage[newItem] = value;
    newItem++;
  };

  someInstance.dequeue = function(){
    var save = storage[nextUp];
    delete storage[nextUp];
    nextUp++;
    if(instanceSize > 0){instanceSize--;}
    return save;
  };

  someInstance.size = function(){
    return instanceSize;
  };

  return someInstance;
};




