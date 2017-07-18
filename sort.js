//三大排序算法: 冒泡排序
  
  function bubbleSort(arr){
    //外层循环控制轮数
    for(var r=1;r<arr.length;r++){
      for(var i=0;i<arr.length-r;i++){
        //如果i位置的值>i+1位置的值
        if(arr[i]>arr[i+1]){
          //交换两位置的值
//          arr[i]^=arr[i+1];
//          arr[i+1]^=arr[i];
//          arr[i]^=arr[i+1];
          //问题：只支持number类型
          //解决: b=[a,a=b][0];
          arr[i+1]=[
            arr[i],
            arr[i]=arr[i+1]
          ][0];
        }
      }
    }
  }
  var arr=//[4,6,3,5,2,1];
          //[12,2,123,3,23,1];
          ["rose","jack","tom","jerry"];
  bubbleSort(arr);
  console.log(String(arr));


