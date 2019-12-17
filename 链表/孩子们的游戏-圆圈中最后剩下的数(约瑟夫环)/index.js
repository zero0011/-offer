/**
 * @description { 约瑟夫环 问题}
 */

/**
 * @description { 创建数据 }
 */

function createData(n) {
    let nums = new Array(n)
    for (let i = 0; i < n; i++) {
        nums[i] = i + 1;
    }
    return nums;
}
/**
 * 
 * @param {数组长度} n 
 * @param {每数几次删除数组元素} m 
 * @description { 循环队列 }
 */
function solution(n, m) {
    m = m - 1;
    //创建数组
    let nums = createData(n);
    // 输出数组
    let OutArray = new Array();
    let index = 0;
    while (nums.length > 0) {
        index = (index + m) % nums.length;
        OutArray.push(nums[index])
        // 删除 nums[index]
        nums.splice(index, 1)
    }
    return OutArray;
}


console.log(solution(12, 3))


/**
 * @desc { 利用链表解决 约瑟夫问题 }
 */

// 链表节点定义
let Node = function (element) {
    this.element = element;
    this.next = null;
}

//定义链表类
function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.currentNode = currentNode;
    // 从链表当前节点向前移动n个节点
    this.advance = advance;
    // 当前链表中有多少个元素
    this.count = count;
    this.display = display;

    // 查找节点
    function find(item) {
        let currNode = this.head;
        while (currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
    }

    //插入节点 , 插到 item 后面
    function insert(newElement, item) {
        let newNode = new Node(newElement);
        let current = this.find(item);
        newNode.next = current.next;
        current.next = newNode;
    }

    //查找当前节点的上一个节点
    function findPrevious(item) {
        let currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element !== item)) {
            currNode = currNode.next ;
        }
        return currNode ;
    }

    // 移出当前节点
    function remove(item) {
        let prevNode = this.findPrevious(item) ;
        if(!(prevNode.next == null)) {
            prevNode.next  = prevNode.next.next ;
        }
    }

    // 向前移动 n个节点
    function advance(n) {
        while(n > 0) {
           
        }
    }

    // 当前链表中有多少个元素
    function count () {
        let currnode = this.head ;
        let i = 0 ;
        while(!(currnode.next.element == "head")){
            
        }
    }
}




/**
 * @description { 递归解决 约瑟夫环问题 }
 * @description { 似乎是最优解 }
 */
