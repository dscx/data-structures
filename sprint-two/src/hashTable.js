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

// results = [   [v1,v1], [v2,v2], [v3,null], [v4,v4]   ]

// results[2] = null;

// results = [   [v1,v1], [v2,v2], [v4,v4]  ]

// set(i, results)

/*
 * Complexity: What is the time complexity of the above functions?
 */
