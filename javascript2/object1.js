const mysym=Symbol(key1)
const object={
    name:"sahilverma",
    college:"rcetBhilai",
    age:"20",
    passion:"cricket",
    isLoggedIn:false,
    lastLoggedIn:["monday","tuesday"],
    [mysym]:"mykey1" 

}
console.log(object);
console.log(object.college);
console.log(object["name"],object["college"]);
console.log(typeof object.mysym);