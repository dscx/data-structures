var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var existing = this._storage.get(i);
  if(existing){
    existing.push([k,v]);
    this._storage.set(i, existing);
  } else {
    this._storage.set(i, [[k,v]]);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var results = this._storage.get(i);
  if(results.length  === 1)  {
    return results[0][1];
  }
  else if(results.length > 1){
    for(var j = 0; j < results.length; j++){
      if(results[j][0] === k){
        return results[j][1];
      }
    }
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(i, null);
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
