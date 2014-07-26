var Graph = function(){
   // this.edges = {};
    this.nodeCounter = 0;
    this.firstNode = null;
    this.blah = "blah";
};

Graph.prototype.addNode = function(newNode, toNode){
  this[newNode] = {};
  this[newNode].edges = {};
  this.nodeCounter++;
  if(this.nodeCounter === 1){
    this.firstNode = newNode;
  }
  if(this.nodeCounter === 2){
      this.addEdge(this.firstNode, newNode);
  }
  if(toNode){
    this.addEdge(newNode, toNode);
  }

};

Graph.prototype.contains = function(node){
  if(this[node]) { 
    return true;
  }
  return false;
};

Graph.prototype.removeNode = function(node){
  delete this[node];
};

Graph.prototype.getEdge = function(fromNode, toNode){
  if(this[fromNode].edges[toNode]){return true;}
  else{return false;}
};

Graph.prototype.addEdge = function(fromNode, toNode){
  this[fromNode].edges[toNode] = "edgeNode";
  this[toNode].edges[fromNode] = "edgeNode";
};

Graph.prototype.removeEdge = function(fromNode, toNode){
  delete this[fromNode].edges[toNode];
  delete this[toNode].edges[fromNode];
  if(Object.keys(this[fromNode].edges).length === 0){
      delete this[fromNode];
  }if (Object.keys(this[toNode].edges).length ===0){
      delete this[toNode];
  }
};


// Object.keys(obj).length
/*
 * Complexity: What is the time complexity of the above functions?
 */


//this.edges = []
//puppies.edges[0] = kittens
//puppies.edge = {kittens: "edgeNode"}
  //  puppies.edge.hasOwnProperty(kittens) // "exists"