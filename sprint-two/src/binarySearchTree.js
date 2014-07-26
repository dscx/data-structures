var makeBinarySearchTree = function(value){

  var binaryTree = Object.create(binaryMethods);
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;

  return binaryTree;
};

var binaryMethods ={
  insert : function(value){  
    //compare value to thisvalue
  var traverse = function(node, direction){
    if(!node[direction]){
      node[direction] = makeBinarySearchTree(value);
    }
    else{
      if(value < node[direction].value){
        traverse(node[direction], "left");
      }
      else{
        traverse(node[direction], "right");
      }
    }
  };

 var chooseDirection = value < this.value ? "left" : "right";
    
  traverse(this, chooseDirection);
  
    //determine which to direction to go
      //continue until no "children" in planned direction
      //create a new object
        //assign property
  },
  contains: function(){

  },
  depthFirstLog: function(){

  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
