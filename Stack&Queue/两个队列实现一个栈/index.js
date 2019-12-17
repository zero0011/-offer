/**
 * @description { 用两个队列实现一个栈 }
 */


 class Stack {
     constructor () {
        this.queue1 = [] ; // 队列1
        this.queue2 = [] ; // 队列2
     }
     //入栈
     push(element) {
        // 哪个队列不为空 , push 到哪个队列
        if(this.queue2.length) {
           this.queue2.push(element)
        } else {
           this.queue1.push(element)
        }
     }
     //出栈
     pop () {
        // 如果栈为空 , 则报错
        if(!this.queue1.length && !this.queue2.length) {
          throw new Error('stack is empty')
        }
        // 从非空队列 依次转移到 空队列 , 直到非空队列只剩下一个元素 , 删除最后一个元素
        // queue2 为空
        if(!this.queue2.length) {
           while(this.queue1.length !== 1) {
              this.queue2.push(this.queue1.shift())
           }
           return this.queue1.shift()
        }
        // queue1 为空
        else if(!this.queue1.length) {
           while(this.queue2.length !== 1) {
              this.queue1.push(this.queue2.shift())
           }
           return this.queue2.shift()
        }
     }
 }

 let stack = new Stack()
//  stack.push('a')
//  stack.push('b')
//  stack.push('c')
stack.pop()
 console.log(stack.pop() , stack.pop())
 stack.push('d') 
 console.log(stack.pop())