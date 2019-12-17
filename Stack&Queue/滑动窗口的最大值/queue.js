/**
 * @description { 实现一个队列 }
 *  入队 时间复杂度 O(1)
 *   出队 时间复杂度 O(1)
 *   获得最大值 O(1)
 */

 class MaxQueue {
    constructor() {
        this.stack1 = [] ;
        this.stack2 = [] ;
        // 求最大值的辅助栈  h1[] 与 h2 的栈顶元素中的最大值 , 便是队列最大值
        this.helper1 = [] ;
        this.helper2 = [] ;
    }
    // 入队
    enqueue (element) {
        if(!this.helper1.length || element >= this.helper1[this.helper1.length - 1]) {
            this.helper1.push(element)
        }
        this.stack1.push(element)
    }
    /*出队
    */ 
    dequeue () {
        while(this.stack1.length) {
            let res = this.stack1.pop() ;
            if(!this.helper2.length || res >= this.helper2[this.helper2.length -1]) {
                this.helper2.push(res)
            }
            this.stack2.push(res)
        }
        if(!this.stack2.length) throw new Error('queue is empty!')
        return this.stack2.pop()
    }
    // 获得最大值
     Max () {
        if(this.helper1[this.helper1.length -1] === undefined) {
            return this.helper2[this.helper2.length - 1]
        } else if (this.helper2[this.helper2.length - 1] === undefined) {
            return this.helper1[this.helper1.length -1]
        } else {
            return Math.max(this.helper1[this.helper1.length - 1] , this.helper2[this.helper1.length - 1])
        }
    }
 }

 // 测试数据
 let nums = [1 , -2 ,3 , -4]
 let queue = new MaxQueue()
 queue.enqueue(3)
 queue.enqueue(-2)
 queue.enqueue(1)
 queue.enqueue(-4)
 
 console.log(queue.Max())
 
 console.log(queue.dequeue())
 console.log(queue.Max())

