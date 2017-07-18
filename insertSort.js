//三大排序算法: 插入排序
  
var arr=[4,2,3,5,1];
function insertSort(arr){
  for(var i=1;i<arr.length;i++){
    var t=arr[i];
    var p=i-1;
    while(p>=0&&arr[p]>t){
      arr[p+1]=arr[p];
      p--;
    }
    arr[p+1]=t;
  }
}
insertSort(arr);
console.log(String(arr));//1,2,3,4,5


