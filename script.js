// var i=5;
// if(true){
//     let i=7;
//     console.log(i);
// }
// console.log(i);
arr=[12,25,2,23,24,29,28,27,21,20,18,22,33,30,53,43]
function add(...arr){
    return arr.reduce((acc,i)=>acc+i);
}
console.log(add());

  function outer(){
            let i=0;
            function inner(){
                return i++;
            }
            return inner
            
        }
        let res=outer();
        console.log(res());
        console.log(res());
        console.log(res());