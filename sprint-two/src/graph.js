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
    console.log(this);
    if(this[fromNode].edges[toNode]){return true;}
    else{return false;}
};

Graph.prototype.addEdge = function(fromNode, toNode){
    console.log(fromNode);
    this[fromNode].edges[toNode] = "edgeNode";
    this[toNode].edges[fromNode] = "edgeNode";
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


//this.edges = []
//puppies.edges[0] = kittens
//puppies.edge = {kittens: "edgeNode"}
  //  puppies.edge.hasOwnProperty(kittens) // "exists"