
//去除数组中重复的元素 方法1：
var arr=[2,3,2,1,3,2,4];//2,3,1,4
function repeat1(arr){
  for(var i=0,result=[];i<arr.length;i++){
    //for(var j=0;j<result.length;j++){
    //  if(result[j]==arr[i])
    //    break;
    //}
    //如果没找到才将arr[i]压入result
    //if(j==result.length)
    if(result.indexOf(arr[i])==-1)
      result.push(arr[i]);
  }
  return result;
}


//方法2：
function repeat2(arr){
  for(var i=0,result=[],hash={};i<arr.length;i++) {
    if(hash[arr[i]]===undefined){
      hash[arr[i]]=true;
      result.push(arr[i]);
    };
  }
  return result;
}
//arr=repeat2(arr);
//console.log(String(arr));
//比较两种方法的效率
for(var i=0,arr=[];i<1000000;i++){
  arr.push(parseInt(
    Math.random()*1000
  ));
}
console.time("repeat1");
repeat1(arr);
console.timeEnd("repeat1");
console.time("repeat2");
repeat2(arr);
console.timeEnd("repeat2");
