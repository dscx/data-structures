var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(!list.tail){
      list.tail = newNode;
      if(!list.head){
         list.head = newNode;
         list.head.next = list.tail;
      }
    } else {
      var save = list.tail;
      list.tail = newNode;
      save.next = list.tail;
     
      } 
  };

  list.removeHead = function(){
    //save current head?
    //check if current head exists
    //define new head
    var saveHead = list.head;
    delete list.head;
    list.head = saveHead.next;
    return saveHead.value;

  };

  list.contains = function(target){
    //scan through each "node'' or linked "array"
    //if target exists do work otherwise return something
    //return boolean
    var answer = false;
    var obj = list.head;
    for(var prop in list){
      if(obj.value === target){
        answer = true;
      } 
      else if (obj.next === null) {
        return answer;
      } 
      else { 
        obj = obj.next;
      }
    }
      return answer;
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
