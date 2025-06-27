var age=17;
new Promise((res,rej)=>{
        if(age>=18){
            res("eligible for voting")
        }
        else
        {
            rej("not eligible")
        }
})
.then((msg)=>console.log(msg))
.catch((err)=>console.log("Error :"+err))
.finally(()=>console.log("Thank you!..."))