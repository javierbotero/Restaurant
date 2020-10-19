import displayMenus from './menu';
import displayWines from './wines';

const { default: displayHome } = require('./home');

const content = document.getElementById('content');

function menusContent() {
  let html = '';
  let i = 0;
  ['Home', 'Menu', 'Wines'].forEach((content) => {
    html += `<li class="nav-item"><a class="nav-link text-dark" href="#" id="${i}">${content}</a></li>`;
    i += 1;
  });
  return html;
}

function greeting() {
  document.body.className = 'container-fluid';
  const myImage = document.createElement('div');
  myImage.classList += 'opening';
  myImage.innerHTML = '<br><h2 class="text-white bg-dark p-3 w-50 text-center mx-auto">Casa Vieja Restaurant</h2>';
  content.appendChild(myImage);
  content.innerHTML += `
  <div class='tabs-x tabs-above tabs-krajee'>
    <ul id="myTab-tabs-above" class="nav nav-tabs" role="tablist">
      ${menusContent()}
    </ul>
  </div>
  <div class="container" id="info">
    <h3 class="text-center py-5">Welcome to the flavors of the Caribbean</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>`;
}

function makeClickableMenu() {
  const array = [displayHome, displayMenus, displayWines];
  for (let i = 0; i < 3; i += 1) {
    document.getElementById(i).addEventListener('click', array[i]);
  }
}

export {
  greeting,
  content,
  makeClickableMenu,
};
