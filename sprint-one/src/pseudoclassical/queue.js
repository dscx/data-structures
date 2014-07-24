var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this._storage = {};
  this._counter = 0;
  this._newItem = 1;
  this._nextItem = 1;


};

Queue.prototype.enqueue = function (value){
  this._counter++;
  this._storage[this._newItem] = value;
  this._newItem++;
};

Queue.prototype.dequeue = function(){
  var save = this._storage[this._nextItem];
  delete this._storage[this._nextItem];
  this._nextItem++;  
  this._counter > 0 && this._counter--;
  return save;

};

Queue.prototype.size = function(){
  return this._counter;
};


