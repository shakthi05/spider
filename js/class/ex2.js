function areBothOdd(num1, num2){
    if((num1%2==0) && (num2%2==0))
    {
        alert(false)
    }
    else{
        alert(true)
    }
}
num1=Number(prompt("enter the num"))
num2=Number(prompt("enter the num"))
areBothOdd(num1, num2)
