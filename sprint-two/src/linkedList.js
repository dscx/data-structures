var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;
  list.chain = null;


  list.addToTail = function(value){
    var newNode = makeNode(value);
    if(!list.tail){
      list.tail = newNode;
      if(!list.head){
        list.head = list.tail;
        list.head.next = list.tail.value;
        list.tail.previous = list.head;
       }
    } else {
      var save = list.tail;
      list.tail = newNode;
      save.next = list.tail;
      list.tail.previous = save;
     
      } 
  };

  list.removeHead = function(){
    //save current head?
    //check if current head exists
    //define new head
    var saveHead = list.head;
    delete list.head;
    list.head = saveHead.next;
    list.head.previous = null;
    return saveHead.value;

  };

  list.addToHead = function(value){
    //check if list.head exists yet
    //debugger;
    if(!list.head) {
      list.head = list.head || makeNode(value);
    } 
    else {
   //copy current head
   var saveHead = list.head;
    //make new head
    list.head = makeNode(value);
      //assign new head next value to save value
    list.head.next = saveHead.value;
    // console.log(saveHead.next + ": " + "45");
    saveHead.previous = list.head.value;
    };
    return  list.head.value;


  };

  list.removeTail = function(){
    //save current tail
    var saveTail = list.tail;
    //save current pre-tail
    var nextTail = list.tail.previous;
    delete list.tail;
      //change previous node to be new tail
    list.tail = nextTail.previous;
    //point next to null
    list.tail.next = null;
    
    return list.tail.value;




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
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
