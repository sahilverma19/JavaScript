const myarray=["sahil","verma","computer","science"]
//console.log(myarray);
const array2=["thor","superman","ironman"]
/*myarray.push(array2)
console.log(myarray);*/
// const newarray=myarray.concat(array2)
// console.log(newarray);

const carryarray=[...myarray,...array2]
console.log(carryarray);

const array=[1,2,3,4,[3,4,5,6[6,5,4,3 ,6,7,8]]]
const array3=array.flat(Infinity)
console.log(array3);

console.log(Array.isArray("hitesh"));//to check is it array or not
console.log(Array.from("sahil"));//make array from the given word