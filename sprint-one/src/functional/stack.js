var makeStack = function(){
  

  // Use an object with numeric keys to store values
  var storage = {};

  var someInstance = {};

  var instanceSize = 0;
  // Implement the methods below
  someInstance.push = function(value){
    instanceSize++;
    storage[instanceSize] = value;
  };

  someInstance.pop = function(){
    var save = storage[instanceSize];
    delete storage[instanceSize];
    if(instanceSize > 0){
      instanceSize--;
    }
    return save;
  };

  someInstance.size = function(){
    return instanceSize;
  };

  return someInstance;
};

