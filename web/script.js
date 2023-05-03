let menu=document.querySelector(".menu");
let menulist=document.querySelector("nav ul");
menu.addEventListener('click',()=>
{
    menulist.classList.toggle('show');
});

const coffee = document.querySelector("#b4");
coffee.onclick = function() {
  window.open("coffee.html","_self");
}

const tea = document.querySelector("#b5");
tea.onclick = function() {
  window.open("tea.html","_self");
}

const snack = document.querySelector("#b6");
snack.onclick = function() {
  window.open("snack.html","_self");
}
const coffeeaudio=document.getElementById('coffeeaudio');
const b1=document.getElementById('b1');
b1.addEventListener("mouseover",function(){coffeeaudio.play();})

const teaaudio=document.getElementById('teaaudio');
const b2=document.getElementById('b2');
b2.addEventListener("mouseover",function(){teaaudio.play();})

const snackaudio=document.getElementById('snackaudio');
const b3=document.getElementById('b3');
b3.addEventListener("mouseover",function(){snackaudio.play();})

// This code is completly for Coffee page

const containers = document.querySelectorAll('.coff');

containers.forEach(coff => {
  coff.addEventListener('mouseover', () => {
    const price = coff.getAttribute('data-price');
    const priceElement = coff.querySelector('.p1');
    priceElement.innerHTML = price;
  });
});

//This code is completly for Tea Page

const containers1 = document.querySelectorAll('.te');

containers1.forEach(te => {
  coff.addEventListener('mouseover', () => {
    const price = te.getAttribute('data-price');
    const priceElement = te.querySelector('.p1');
    priceElement.innerHTML = price;
  });
});

//This code is completly for Snackpage

const containers2 = document.querySelectorAll('.sna');

containers2.forEach(sna => {
  coff.addEventListener('mouseover', () => {
    const price =sna.getAttribute('data-price');
    const priceElement = sna.querySelector('.p1');
    priceElement.innerHTML = price;
  });
});

//////////////////////////////////