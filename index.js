students = [ 
{ name: 'John', age: 17 }, 
{ name: 'Jane', age: 19 }, 
{ name: 'Jack', age: 18 }, 
];

var adults=students.map((i)=>{
    return {
     ...i,//name,age
     isAdult:i.age>=18//true,false   
    }
})
console.log(adults);