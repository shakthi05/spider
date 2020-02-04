function addProperty(obj, key){
    obj[key]=true;
    console.log(obj)
   }
var obj={"neymarproperty":"neymar","messiproperty":"messi"}
var k=prompt("enter a property name:")
addProperty(obj,k)