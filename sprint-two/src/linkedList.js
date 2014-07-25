var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(!list.tail){
      list.tail = newNode;
    } else {
      var save = list.tail;
      list.tail = newNode;
      save.next = list.tail;
      if(!list.head){
          list.head = save;
      }
    }
  };

  list.removeHead = function(){
    //save current head?
    //check if current head exists
    //define new head
    var saveHead = list.head;
    delete list.head;
    list.head = saveHead.next

   

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
