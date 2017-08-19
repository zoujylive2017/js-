
var msg="hello";
for(var i=0;i<10;i++){
    var msg="hello"+i*2+i;
    console.log("此时i的值为："+i+" 所以msg为："+msg);
}
console.log(msg);//hello189
console.log(i);//10


var name="world";
(function(){
    if(typeof name==="undefined"){
        var name="jack";
        console.log("Goodbye"+name);//Goodbye jack
    }else{
        console.log("hello"+name);

    }
})();

function mytest(){
    for(var i=0;i<5;i++){
        setTimeout(function(){
            console.log(i);
        },0);
    }
}//没有调用 没有输出 调用de话输出55555
//1-100之间的素数/质数
for(var i=2;i<=100;i++){

    for(var j=2;j<i;j++){

        if(i%j==0){
            break;
        }
    }
    if(i<=j){
        console.log(i+" ");
    }
}

var aa="11"+2-"1";
console.log(aa);//111
console.log(typeof aa);//number
var bb="11"+2+"1";
console.log(bb);//1121
console.log(typeof bb)//string

var tt="aa";
function test(){
    console.log(tt);//undifined
    var tt="dd";
 console.log(tt);//dd
}
test();
