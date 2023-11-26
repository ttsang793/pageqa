let icon = document.createElement('link');
icon.rel = 'icon';
document.head.appendChild(icon);
icon.href = "./img/ttsang793.png"

document.querySelector('header').innerHTML = `
<div class="logo">
  <img src="./img/icon.png">
  <p>QUICK ACCESS</p>
</div>
<div class="menu">
  <a href="./index.html">
    <button class="head-button">Home</button>
  </a>
  <a href="./download.html">
    <button class="head-button">Download</button>
  </a>
</div>
`;

document.querySelector('footer').innerHTML = '&#169; 2023 by Tran Tuan Sang'