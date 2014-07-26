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

  },
  contains: function(value){

var traverse = function(node){
  if(node.value === value){
    return true;
  }
  else{
    if(value < node.value){
      if(node.left){
      return traverse(node.left);
      } return false;
    }
    
    else if(value > node.value){
     if(node.right){
      return traverse(node.right);
      } return false;
    }
    }
};
  return traverse(this);


  },
  depthFirstLog: function(callback){
    callback(this.value);
    
    var depth = function (node){

      if(node.left){
        callback(node.left.value);
        depth(node.left);
      }
      if(node.right){
        callback(node.right.value);
        depth(node.right);
      }
    };

    depth(this);
  }

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
