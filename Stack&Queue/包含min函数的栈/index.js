/**
 * @description { 最小栈 }
 * @ 题目: 定义栈的数据结构 , 请在该类型中实现一个能够得到栈最小元素的 min 函数
    在该栈中 , 调用 min , push , pop 的时间复杂度都是 O(1)
 */

 class MinStack {
     constructor () {
         this.stack = [] ;
         // 辅助栈
         this.help = [] ;
     }
     //入栈
     push (element) {
         // 如果辅助栈为空 或者 加入元素小于辅助栈顶元素 , 则辅助栈进行入栈操作
         if(!this.help.length || element <= this.help[this.help.length -1]) {
             this.help.push(element)
         }
         this.stack.push(element)
     }
     // 出栈
     pop () {
         if(this.stack.pop() === this.help[this.help.length - 1]) {
             this.help.pop()
         }
     }
     // 返回最小值
     getMin() {
         //返回辅助栈顶元素 
        return this.help[this.help.length - 1]
     }
 }


 let stack = new MinStack() ;
 
 console.log(stack.getMin())