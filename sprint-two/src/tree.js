var makeTree = function(value){
  var newTree = {};
  _.defaults(newTree, treeMethods);
  newTree.value = value;
  //set to udnefined at some point
  newTree.children = [];
  // console.log(newTree);
  return newTree;
};




var treeMethods = {};

treeMethods.addChild = function(value){
    // var child = 0;
    // if(this.children === undefined){
    //   this.children = [];
    // }
    var child = {};
    child.value = value;

    this.children.push(child);
    console.log(this.children[0]);
    // console.log(this.children[0]);

};

treeMethods.contains = function(target){

};


/*
 * Complexity: What is the time complexity of the above functions?
 */


// newTree = {
//   value: value,
//   children: undefined,
//   addChild = function(){},
//   contains = function(){}
    

// };