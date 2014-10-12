var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);


};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);

  if(!bucket){
    bucket = [];
    this._storage.set(i, bucket);
  }
    bucket.push([k,v]);
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var results = this._storage.get(i);
    for(var j = 0; j < results.length; j++){
      if(results[j][0] === k){
        return results[j][1];
      }
    } return null;
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var results = this._storage.get(i);

  for(var j = 0; j < results.length; j++){
    if(results[j][0] === k){
      results.splice(j,1);
      this._storage.set(i,results);
      return;
    }
}
};

  //need to track size
  //need hasthtable prototype for resize

/*
 * Complexity: What is the time complexity of the above functions?
 */