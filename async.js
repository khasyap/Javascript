let pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("the promise success")
    },5000)
});

async function hello(){
    console.log("Hello world")
    let res=await pro;
    console.log(res); 
    console.log("completed")
}

hello();