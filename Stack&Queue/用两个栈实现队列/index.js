/**
 * @description { 两个栈实现队列 }
 * @问题  实现它的两个函数 appendTail 在队尾插入结点
 *                        deleteHead  在队头删除结点
 */

 class Queue {
     constructor () {
        this.stack1 = [] // 栈1
        this.stack2 = [] // 栈2
     }
     // 入队
     appendTail (element) {
        this.stack1.push(element)
     }
     //出队
     deleteHead () {
        while(this.stack1.length) {
            this.stack2.push(this.stack1.pop())
        }
        if(!this.stack2.length) {
            throw new Error('queue is empty')
        }
        return this.stack2.pop()
     }
 }

 let MyQueue = new Queue() ;
 let arr = [1 , 3 ,-2]
 arr.forEach(val =>{
     MyQueue.appendTail(val)
 })
console.log(MyQueue.deleteHead())