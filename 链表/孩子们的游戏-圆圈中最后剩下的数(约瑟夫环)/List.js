/**
 * @description { 链表类 }
 */

 /**
  * Node 类表示要添加的元素 , 他有 两个属性 ,一个element ,表示添加到链表中具体的值,
  * 另一个是 next , 表示要指向链表的下一个元素的指针
  */


function LinkedList () {
    //Node 类声明
    var Node = function(element) {
        this.element = element ;
        this.next = null ;
    } ;
    // 初始化链表长度
    let length = 0 ;
    // 初始化第一个元素
    let head = null ;
    // 向链表尾部添加一个新的元素
    this.append = function (element) {
        //初始化添加的 Node 实例
        let node = new Node(element) , current ;
        if(head === null) {
            b
        }
    }
}
