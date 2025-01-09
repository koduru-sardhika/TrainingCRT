let main=function()
{
    let a = Number(prompt("Enter number a:"))
    let b = Number(prompt("Enter number b:"))
    let c = Number(prompt("Enter number c:"))
    let d=a+b+c
    console.log(d);
    let e = a-b-c
    console.log(e);
    let f =a*b*c
    console.log(f);

    if(a>=b && a>=c){
        console.log("a is greatest")

    }else if(b>=a && b>=c){
        console.log("b is greatest");
    }else{
        console.log("C is greatest")
    }
}
console.log(main())

let main2=function(a)
{
    console.log(a);
    console.log(arguments);
    console.log(arguments[2])
}
console.log(main2(10,20,30))

function main4(a){//here a is the call back function
    console.log(a())  //Here this a call back prints both function output.

}
main4(function(){
    return"I am indian"
})

main4(function(){
    console.log("I am Indian2");
    
})
