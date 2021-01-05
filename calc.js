
 let a,b,result;
 takeinput=() =>{
    a = Number(document.getElementById("fnumber").value);
   b= Number(document.getElementById("snumber").value);
  }


showResults=()=>{
const para = document.querySelector('p');
 console.log(para);
 para.innerHTML ='<center>'+ result+'</center';}

 add=()=>{
     takeinput();

     result= 'sum is'+(a+b);
     showResults();
    }

    sub=()=>{
     takeinput();

     result= 'sum is'+(a-b);
     showResults();
    }
    div=()=>{
        takeinput();
   
        result= 'sum is'+(a/b);
        showResults();
       }
       mul=()=>{
        takeinput();
   
        result= 'sum is'+(a*b);
        showResults();
       }