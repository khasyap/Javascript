let n1=12345;
let count1=0;
while(n1!=0){
    count1++;
    n1=parseInt(n1/10);
}
console.log(count1);

let n=123456;
let rem,sum=0;
while(n!=0){
    rem=n%10;
    sum+=rem;
    n=parseInt(n/10);
}
console.log(sum);

let num=125;
let rem1,str="";
while(num!=0){
    rem1=num%10;
    str+=rem1;
    num=parseInt(num/10);
}
console.log(str)

let num1=120;
let temp=num1;
let rem2,str1="";
while(num1!=0){
    rem2=num1%10;
    str1+=rem2;
    num1=parseInt(num/10);
}
if(temp=str){
    console.log(`${str} is a palidrome`);
}
else{
        console.log(`${str} is not a palidrome`);
}

let n2=154;
let temp1=n;
let count=0, sum1=0;
while(n2!=0){
    n2=parseInt(n2/10);
    count++;
}
n=temp;
while(n!=0){
    rem=n%10;
    sum+=rem**count;
    n=parseInt(n/10);
}
if(temp=sum){
    console.log(`${temp} is a armstrong`);
}
else{
    console.log(`${temp} is not a armstrong`);
}


let n3=145;
let temp2=n3;
let sum2=0,rem3;
while(n3!=0){
    rem3=n3%10;
fact=1;
for(i=1;i<=rem3;i++){
    fact=fact*i;
}
    sum2+=fact;
n3=parseInt(n3/10);
}
if(sum2==temp1){
    console.log(`${temp2} is a strong`);
}
else{
    console.log(`${temp2} is not a strong`);
}