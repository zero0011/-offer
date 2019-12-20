// const LinkedList = require('./main.js.js.js');

// 创建一个 LinkedList 实例

let list = new LinkedList();

// 插入一些元素
list.insert('zs','head');
list.insert('hw','zs');

list.display(); // 显示元素, 控制台输出
list.remove('zs');
list.display()