 class mainclass{
     constructor(firstname, lastname,age){
         this.firstname=firstname;
         this.lastname=lastname;
         this.age=age;
     }
     greet(){
         console.log(`${this.firstname} ${this.lastname} is ${this.age} years old`);
     }
 }
 var m1=new mainclass("Khasyap","K",21);
 m1.greet();


 class mainclass{
     greet(){
         console.log("Hello world");
     }
 }
 class sub extends mainclass{
     wish(){
         console.log("Good Morning");
     }
     greet(){
         console.log("How are you..");
     }
 }
 var s1=new sub();
 s1.greet();
 s1.wish();



 class mainclass{
    constructor(firstname){
        this.firstname=firstname;
    }
    greet(){
         console.log("Hello world");
     }
 }
    class sub extends mainclass{
         constructor(firstname,age) {
            super(firstname);
             this.age=age;
         }
     wish(){
         console.log(`${this.firstname} is ${this.age} years old`);
     }
     }
 var m1=new sub("Khasyap",25);
 m1.wish();
 m1.greet();


function hello(bs){
    console.log("Good Morning");
    bs();
}

function greet(){
    console.log("How are you!...");
}

setTimeout(hello,5000,greet);
hello(greet)



