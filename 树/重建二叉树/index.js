/**
 * 重建二叉树
 */

 
 /**
  * 二叉树节点定义
  */

 function reConstructBinaryTree (pre,vin) {
     if(pre.length===0 || vin.length ===0) {
         return null;
     }

     //前序第一个为根节点, 也就是说中序左右子树的分割点
     let index = vin.indexOf(pre[0]);
     let left = vin.slice(0,index);// 中序左子树
     let right = vin.slice(index + 1);// 中序右子树

     return {
         val:pre[0],
         // 递归左右子树的前序,中序
         left:reConstructBinaryTree(pre.slice(1,index+1),left),
         right: reConstructBinaryTree(pre.slice(index+1),right)
     };
 }

 let pre = [1,2,4,7,3,5,6,8]
 let vin = [4,7,2,1,5,3,8,6]
 console.log(reConstructBinaryTree(pre,vin));