const input=document.querySelector("#input");
const btn=document.querySelector("btn");
const alert=document.querySelector("#alert");
const result=document.querySelector("#result");

function generate()
{
  let fin='';
  let loop=4;
  for(let i=1;i<=loop;i++)
  {
  let res=Math.round(Math.random()*5);
  fin+=String(res);
  }
  console.log(Number(fin));
  result.innerHTML=fin;
  result.style.opacity=1;
  check=fin;
}
let check;

function call()
{
  const check1=input.value;
  if(check===check1)
  {
    alert.innerHTML="OTP Verified Successfully";
    alert.style.color="green";
    setTimeout(()=>
    {
      window.open("next.html")
    },2000)
  }
  else
  {
  alert.innerHTML="Wrong OTP";
  alert.style.color="red";
  }
  setTimeout(()=>{
    location.reload();
  },3000);
}