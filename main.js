//Night Mode

 let hour = new Date().getHours();
 console.log(hour);

 if (hour >= 18 || hour < 6){ // between 6pm and 6 am    
   const background  = document.querySelector('body');
   background.className = 'dark';
   const text  = document.querySelectorAll('p, ul, ol, header, footer, a, h1, h2, h3');
   for (let i = 0; i < text.length; i++) {
     text[i].classList.add('dark');
   }
 }

 //Night Mode Button

 function nightMode() {
  const background  = document.querySelector('body');
    background.className = 'dark';
    const text  = document.querySelectorAll('p, ul, ol, header, footer, a, h1, h2, h3');
    for (let i = 0; i < text.length; i++) {
      text[i].classList.add('dark');
   }
}
//Day Mode Button

function dayMode() {
  const background  = document.querySelector('body');
    background.className = '';
    const text  = document.querySelectorAll('p, ul, ol, header, footer, a, h1, h2, h3');
    for (let i = 0; i < text.length; i++) {
      text[i].classList.remove('dark');
  }
}


 // Keep nav bar highlighted when you're on that page

let url = window.location.href; 
let color = "black";
console.log(url);

if (url == "https://jeannerahmey.github.io/index.html"){
  var link = document.getElementById("link1");
  link.style.backgroundColor = "#f71568";
}
else if (url == "https://jeannerahmey.github.io/work.html"){
  var link = document.getElementById("link2");
  link.style.backgroundColor = "#008882";
  color = "#008882";
}
else if (url == "https://jeannerahmey.github.io/volunteer.html"){
  var link = document.getElementById("link3");
  link.style.backgroundColor = "#00aef2";
  color = "#00aef2";
}
else if (url == "https://jeannerahmey.github.io/skills.html"){
  var link = document.getElementById("link4");
  link.style.backgroundColor = "#6800f2";
}
else if (url == "https://jeannerahmey.github.io/hobbies.html"){
  var link = document.getElementById("link5");
  link.style.backgroundColor = "#ffbfb3";
}

//Highlight jobs when hover over title

let colors = document.querySelectorAll('.job');
console.log(colors);

function mouseOver() {
  colors[0].style.color = "black";
  colors[1].style.color = "black";
  colors[2].style.color = "black"; //swapped these and mouseout
  colors[3].style.color = "black";

  this.style.color = color; //changed from "black"
}

function mouseOut(){
  colors[0].style.color = color;
  colors[1].style.color = color;
  colors[2].style.color = color;
  colors[3].style.color = color;
}

colors[0].addEventListener('mouseover', mouseOver);
colors[1].addEventListener('mouseover', mouseOver);
colors[2].addEventListener('mouseover', mouseOver);
colors[3].addEventListener('mouseover', mouseOver);

colors[0].addEventListener('mouseout', mouseOut);
colors[1].addEventListener('mouseout', mouseOut);
colors[2].addEventListener('mouseout', mouseOut);
colors[3].addEventListener('mouseout', mouseOut);