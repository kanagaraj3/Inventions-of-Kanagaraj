const form=document.querySelector("#form");
const username=document.getElementById("username");
const email=document.getElementById("email");
const password=document.getElementById("password");
const conpassword=document.getElementById("conpassword");
let suc=true;

form.addEventListener('submit',(eve)=>
{

if(!validateinputs());
{
    eve.preventDefault();
}
});

function validateinputs()
{
    const username1=username.value.trim();
    const email1=email.value.trim();
    const password1=password.value.trim();
    const conpassword1=conpassword.value.trim();
    if(username1==='')
    {
        suc=false;
        seterror(username,'Username is required');
    }
    else
    {
        setsuccess(username)
    }
    
    if(email1==='')
    {
        suc=false;
        seterror(email,'Email is Required');
    }
    else if(!validateEmail(email1))
    {
        suc=false;
       seterror(email,'Please enter a valid email');
    }
    else
    {
        setsuccess(email)
    }

    if(password1==='')
    {
        suc=false;
        seterror(password,'Password is required');
    }
    else if(password1.length<=8)
    {
        suc=false;
      seterror(password,'Give atleast password upto 8 characters');
    }
    else
    {
        setsuccess(password)
    }

    if(conpassword1==='')
    {
        suc=false;
        seterror(conpassword,'Confirm password is required');
    }
    else if(conpassword1.length<=8)
    {
        suc=false;
      seterror(conpassword,'Give atleast password upto 8 characters');
    }
    else if(password1!==conpassword1)
    {
        suc=false;
      seterror(conpassword,'Password is Not matched');
    }
    else
    {
        setsuccess(conpassword);
    }
      return suc;
}

function seterror(element,message)
{
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector(".error");
    errorElement.innerText=message;
    inputgroup.classList.add('error');
    inputgroup.classList.remove('success');
}

function setsuccess(element,message)
{
    const inputgroup=element.parentElement;
    const errorElement=inputgroup.querySelector(".error");
    errorElement.innerText="";
    inputgroup.classList.add('success');
    inputgroup.classList.remove('error');
}

const validateEmail=(email)=>
{
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    return String(email.toLowerCase().match(pattern));
}