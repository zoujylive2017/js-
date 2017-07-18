//三大排序算法:快速排序
  var arr=[7,2,5,4,1,3,6];
function quickSort(arr){
  if(arr.length<=1) return arr;
  var i=parseInt((arr.length-1)/2);
  var c=arr.splice(i,1)[0];
  var left=[],right=[];
  //遍历arr中剩余元素
  for(var i=0;i<arr.length;i++){
    if(arr[i]>c) right.push(arr[i]);
    else left.push(arr[i]);
  }
  return arguments.callee(left).concat(c,arguments.callee(right));
}
arr=quickSort(arr);
console.log(String(arr));
