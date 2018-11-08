class LinkNode {
  constructor(public value, public previous?, public next?) {}
}

class LinkedList {
  public head;
  public tail;

  public prepend(value) {
    const newNode = new LinkNode(value, undefined, this.head);
    if (this.head) {
      this.head.previous = newNode;
    } else {
      this.tail = newNode;
    }
    this.head = newNode;
  }

  public append(value) {
    const newNode = new LinkNode(value, this.tail);
    if (this.tail) {
      this.tail.next = newNode;
    } else {
      this.head = newNode;
    }
    this.tail = newNode;
  }
}

const var1 = new LinkedList();
var1.prepend(3);
console.log(var1);
var1.append(4);
console.log(var1);
