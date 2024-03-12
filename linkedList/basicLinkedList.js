class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    /**
 * Adds a new node to the end of the linked list.
 * @param {number} value - The value of the node to be added.
 */
    insert(value) {
        /** @type {Node} */
        let newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
        }
        else {
            /** @type {Node} */
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
        return this;
    }
    printList() {
        let head = this.head;
        let temp = head

        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }
   
    deleteHead() {
        let head = this.head;
        let temp = head;
        head=head.next;
         temp.next = null;
        // linkedList.printList()
        console.log(head);

        // while (temp !== null) {
            
     
        // }
    }
    
}
// invoke this class
let linkedList = new LinkedList();
linkedList.insert(1);
linkedList.insert(2);
linkedList.insert(3);

linkedList.printList();
linkedList.deleteHead();
