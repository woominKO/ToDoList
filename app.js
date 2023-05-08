var button = document.querySelector('#button');
var container = document.querySelector('#container');
var form = document.querySelector('#form');

function add() {
  let newdiv = document.createElement('div');
  newdiv.setAttribute('id', 'newdiv');
  newdiv.setAttribute(
    'class',
    'mx-5 mt-2 d-flex justify-content-between bg-light align-items-center '
  );
  // newdiv.setAttribute('style', 'position:relative; left:-80px ');
  document.body.appendChild(newdiv);
  var inputValue = document.querySelector('#input').value;

  newdiv.innerHTML =
    `<input class="form-check-input mx-5" type="checkbox" value="" id="flexCheckDefault">
    <span id= 'result' class="mx-3" >` +
    inputValue +
    '</span>' +
    `
    <button id="delete" class="mx-5 my-3  " >
    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
          />
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </button>
      `;
}

function handleForm(event) {
  event.preventDefault();
}

button.addEventListener('click', add);
form.addEventListener('submit', handleForm);
