function getProperty(obj, key) {
    a=[];
    a=Object.keys(obj);
    console.log(a);
    for(i=0;i<a.length;i++)
    {
    if(key!=a[i])
    {alert(obj[key]);}
    }
}
var obj={"1":"shakthi","2":"nishanth"}
var k=Number(prompt("enter a key"));
getProperty(obj,k);