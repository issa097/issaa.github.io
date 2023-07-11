let progres11 = document.getElementById("issa1");
let progres50 = document.getElementById("issa");
let progres22 = document.getElementById("issa2");
let progres33 = document.getElementById("issa3");
let progres44 = document.getElementById("issa4");

let htmllink = document.getElementById("htmls");

let csslink = document.getElementById("csslink");
let javalink = document.getElementById("javalink");
let scsslink = document.getElementById("scsslink");
let bootlink = document.getElementById("bootlink");

let htmlskils = document.getElementById("html");
let cssskils = document.getElementById("css1");
let javaskils = document.getElementById("js");
let scssskils = document.getElementById("scss");
let bootskils = document.getElementById("boot");

window.onscroll = function () {
  let value = scrollY;
  if (scrollY >= 1120) {
    progres11.style.width = 75 + "%";

    progres50.style.width = 100 + "%";
    progres22.style.width = 90 + "%";
    progres33.style.width = 75 + "%";
    progres44.style.width = 30 + "%";
  } else {
    progres11.style.width = 0 + "%";
    progres50.style.width = 0 + "%";
    progres22.style.width = 0 + "%";
    progres33.style.width = 0 + "%";
    progres44.style.width = 0 + "%";
  }
};
htmllink.onclick = function () {
  htmlskils.style.cssText = `
  font-size:50px;
  `;
  javaskils.style.cssText = `
  font-size:25px;
  `;

  scssskils.style.cssText = `
  font-size: 25px;

  
  `;
  bootskils.style.cssText = `
  font-size: 25px;

  
  `;
};

javalink.onclick = function () {
  javaskils.style.cssText = `
  font-size:50px;
  `;
  htmlskils.style.cssText = `
        font-size: 25px;
       
  `;
  scssskils.style.cssText = `
  font-size: 25px;

  
  `;
  bootskils.style.cssText = `
  font-size: 25px;

  
  `;
};
scsslink.onclick = function () {
  scssskils.style.cssText = `
  font-size:50px;
  
  `;
  javaskils.style.cssText = `
  font-size: 25px;

  `;
  htmlskils.style.cssText = `
  font-size: 25px;

  `;

  bootskils.style.cssText = `
  font-size: 25px;

  
  `;
};
bootlink.onclick = function () {
  bootskils.style.cssText = `
  font-size:50px;
  
  `;
  javaskils.style.cssText = `
  font-size: 25px;

  `;
  htmlskils.style.cssText = `
  font-size: 25px;

  `;
  scssskils.style.cssText = `
  font-size: 25px;
  `;
};
