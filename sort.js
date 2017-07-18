//js中的三大排序方法

<script>
  //1，冒泡排序
  function bubbleSort(arr){
    for(var l=1;l<arr.length;l++){
      for(var i=0;i<arr.length-l;i++){
        if(arr[i]>arr[i+1]){
          arr[i+1]=[arr[i],arr[i]=arr[i+1]][0];
        }
      }
    }
  }
  var arr=[1,5,8,44,2,11,478];
  bubbleSort(arr);
  console.log(String(arr));





</script>
