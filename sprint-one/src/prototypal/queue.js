var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someObject = Object.create(queueMethods);
    someObject.newItem = 1;
    someObject.storage = {};
    someObject.nextUp = 1;
    someObject.counter = 0;

  return someObject;
};

var queueMethods =  { 

  enqueue: function(value){
    this.counter++;
    this.storage[this.newItem] = value;
    this.newItem++;
  },

  dequeue: function(){
    var save = this.storage[this.nextUp];
    delete this.storage[this.nextUp];
    this.nextUp++
    if (this.counter > 0 ) {
      this.counter--;
    }
    return save;

  },

  size: function(){
    return this.counter;

  }

};


