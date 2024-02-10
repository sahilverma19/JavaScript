const mysym=Symbol("key1")
const object={
    name:"sahilverma",
    college:"rcetBhilai",
    age:"20",
    passion:"cricket",
    isLoggedIn:false,
    lastLoggedIn:["monday","tuesday"],
    [mysym]:"mykey1" 

}
//console.log(object);
console.log(object.college);
console.log(object["name"],object["college"]);
console.log(typeof object.mysym);
object.age="19";
//console.log(object);
//Object.freeze(object)
object.college="sankaracharya";
console.log(object);

object.greeting=function()
{
    console.log("hii my name is sahil verma");
}
console.log(object.greeting());

