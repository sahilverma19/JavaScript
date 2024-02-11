const sahil={
    id:1234,
    name:"sahilverma",
    course:"b.tech",
    branch:"computer_science_and_engineering",
    fullname:{
        firstname:"sahil",
        lastname:"verma",
        city:{
            cityname:"rawan",
            districtname:"balodabazar"
        }
    }         
}
//console.log(sahil.fullname.city); 
const name1={1:"a",2:"b"}
const name2={3:"c",4:"d"}
//const name3=Object.assign(name1,name2)
const name3={...name1,...name2}
console.log(name3);

const virat=[
    {
        id:18,
        name:"viratkohli"
    },
    {
        id:17,
        name:"abdevilliers"
    }
]
console.log(virat[1])
console.log(Object.keys(virat[1]));
console.log(Object.values(virat[1]));
console.log(Object.entries(virat[0]));
console.log(name1.hasOwnProperty('1'));