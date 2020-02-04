function removeProperty(obj, key){
    obj[key]=undefined;
   alert(obj[key]);
   console.log(obj);
  }
var obj={"1":"ronaldo","2":"messi"}
var k=Number(prompt("enter a key to be removed:"));
removeProperty(obj,k);