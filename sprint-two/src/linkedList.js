var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if(!this.tail){
      this.tail = {};
      this.tail.value = value;
    }
    else if (this.tail){
      var previous = this.tail;
      previous.next = value; 
      this.tail.value = value;
      console.log(this.tail.value);
    }
    //check if tail exists
    //(re)define tail
    //"push" in value
  };

  list.removeHead = function(){
    //save current head?
    //check if current head exists
    //define new head

  };

  list.contains = function(target){
    //scan through each "node'' or linked "array"
    //if target exists do work otherwise return something
    //return boolean



  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
