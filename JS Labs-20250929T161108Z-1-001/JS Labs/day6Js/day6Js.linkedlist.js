class Node{
    constructor(data)
    {
    this.data=data
    this.next=null
    }
}
class LinkedList{
    constructor()
    {
        this.head=null
    }
    append(data)
    {
        let newnode=new Node(data)
        if(!this.head)
        {
            this.head=newnode
            return
        }
        let current=this.head
        while(current.next)
        {
            current=current.next
        }
        current.next=newnode
        
    }
    printList(){
      let current=this.head
      let result=""
      while(current)
      {
          result+=current.data+'->'
          current=current.next
      }
      console.log(result+'null')
    }
}
let list=new LinkedList()
list.append(23)
list.append(12)
list.append(3)
list.printList()