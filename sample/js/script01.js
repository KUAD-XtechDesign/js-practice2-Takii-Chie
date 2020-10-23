$(function(){

    let txt1 ="冬眠から起こすのは、";
    let txt2 ="レインボーローズの唇。"
    let num1 = 10;
    let num2 = 31;

    function sayHello(){
        $("#content").text("🦜");
    }

    function saySomething(txt){
        $("#content").text(txt);
    }

    function samTwo(arg1,arg2){
        $("#content").append(arg1 + arg2);
    }

    $("#button01").on("click",function(){
        sayHello();
    })

    $("#button02").on("click",function(){
        saySomething(txt1);
    })

    $("#button03").on("click",function(){
        samTwo(txt1,txt2);
    })

    $("#button04").on("click",function(){
        samTwo(num1,num2);
    })

    $("#button05").on("click",function(){
        samTwo(txt1,txt2)
        samTwo(num1,num2)
    })
    


})