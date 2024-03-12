class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    
  }
}

class Linkedlist {
  constructor(head = null) {
    this.head = head
    this.tail = null
    this.length = 0
  }
  insert(value) {

    let newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++
  }
  insertAtHead(val) {

    let newHead = new Node(val)
    newHead.next = this.head
    this.head = newHead
    this.length++
  }
  printlist() {
    let currentList = this.head;
    while (currentList) {
      console.log(currentList.value);
      currentList = currentList.next
    }
  }
  insertAtTail() {
    let newTail = new Node(9);

    this.tail.next = newTail;
    this.length++
  }

}
let list = new Linkedlist();
list.insert(1);
list.insert(2)
list.insert(5)
list.insertAtHead(3);
list.insertAtTail()
list.printlist()
console.log(list)