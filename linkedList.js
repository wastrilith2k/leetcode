function insertNodeAtPosition(llist, data, position) {
    // Write your code here
    let newList = new SinglyLinkedListNode()
    let iter = 0
    let currPointer = newList;
        
    while (llist.next) {
        if (iter === position) {
            currPointer.data = data
            currPointer.next = new SinglyLinkedListNode()
            currPointer = currPointer.next
            iter++
        }
        currPointer.data = llist.data
        currPointer.next = new SinglyLinkedListNode()
        currPointer = currPointer.next
        llist = llist.next
        iter = iter + 1
    }
    if (iter === position) {
        currPointer.data = data
        currPointer.next = new SinglyLinkedListNode()
        currPointer = currPointer.next
        }
    currPointer.data = llist.data
    return newList

}
