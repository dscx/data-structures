var makeTree = function(value){
  var newTree = {};
  _.defaults(newTree, treeMethods);
  newTree.value = value;
  //set to udnefined at some point
  newTree.children = undefined;
  // console.log(newTree);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
    if(this.children === undefined){
      this.children = [];
    }
    var child = {};
    _.defaults(child, treeMethods);
    child.value = value;
    this.children.push(child);
};

treeMethods.contains = function(target){
    
  for(var i = 0; i < this.children.length; i++){
    console.log(this.children[i].value);
    if(this.children[i].value === target){
      return true;
    }
  }
  
  for(i = 0; i < this.children.length; i++){
    if(this.children[i].children){
      if (this.children[i].contains(target)){
        return true;
      }
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */