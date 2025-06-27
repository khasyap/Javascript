let pro = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("the promise success")
    },5000)
});


pro
.then((msg)=>console.log(msg))
.catch((err)=>console.log("error "+err));