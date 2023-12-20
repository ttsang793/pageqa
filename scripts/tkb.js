const listHinh = [
  {img: "../img/23-24_2.png",  caption: "Học kì 2 (2023 - 2024)"},
  {img: "../img/23-24_1.png",  caption: "Học kì 1 (2023 - 2024)"},
  {img: "../img/22-23_H.png",  caption: "Học kì hè (2022 - 2023)"},
  {img: "../img/22-23_2.png",  caption: "Học kì 2 (2022 - 2023)"},
  {img: "../img/22-23_1.png",  caption: "Học kì 1 (2022 - 2023)"},
  {img: "../img/21-22_H.png",  caption: "Học kì hè (2021 - 2022)"},
  {img: "../img/21-22_2.png",  caption: "Học kì 2 (2021 - 2022)"},
  {img: "../img/21-22_1.png",  caption: "Học kì 1 (2021 - 2022)"}
]

let index = 0;
function prevImage() {
  if (index === 0) index = listHinh.length - 1;
  else index--;

  document.getElementById("imgTKB").classList.add('animate__animated', 'animate__fadeOutRight');
  setTimeout(() => {
    document.getElementById("img").innerHTML = "";
  
    document.getElementById("img").innerHTML = `<img src="${listHinh[index].img}" alt="" id="imgTKB" width="83%" class="animate__animated animate__fadeInLeft">`;
    document.getElementById("title").innerHTML = listHinh[index].caption
  }, 500);
}

function nextImage() {
  if (index === listHinh.length - 1) index = 0;
  else index++;

  document.getElementById("imgTKB").classList.add('animate__animated', 'animate__fadeOutLeft');
  setTimeout(() => {
    document.getElementById("img").innerHTML = "";
  
    document.getElementById("img").innerHTML = `<img src="${listHinh[index].img}" alt="" id="imgTKB" width="83%" class="animate__animated animate__fadeInRight">`;
    document.getElementById("title").innerHTML = listHinh[index].caption
  }, 500);
}