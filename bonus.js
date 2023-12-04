const arr =[12000,15000,7000,20000];
const result =arr.map((item)=> item*0.2).reduce((acc,curr)=> acc+curr)

console.log(result);