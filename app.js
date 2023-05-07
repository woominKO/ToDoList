var button = document.querySelector('#button');
// var container = document.getElementById('#container');
var form = document.querySelector('form');

function add() {
  let newdiv = document.createElement('div');
  document.body.appendChild(newdiv);
}

function handleForm(event) {
  event.preventDefault();
}

button.addEventListener('click', add);
form.addEventListener('submit', handleForm);
