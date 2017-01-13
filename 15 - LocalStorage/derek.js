const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
let items = JSON.parse(localStorage.getItem('items')) || [];

addItems.innerHTML += `
  <br>
  <hr>
  <input type="button" value="Check All" id="CheckAll">
  <input type="button" value="Uncheck All" id="UncheckAll">
  <input type="button" value="Clear All" id="ClearAll">
`;

function addItem(event) {
  event.preventDefault();
  const text = this.querySelector('[name=item]').value;
  const item = {
    text,
    done: false
  };

  items.push(item);
  setAndPop();

  this.reset();
}

function populateList(arr = [], listElement) {
  listElement.innerHTML = arr.reduce((acc, item, index) => {
    return acc + itemTemplate(item, index);
  }, '');
}

function itemTemplate(item, index) {
  return `
    <li>
      <input type="checkbox" data-index=${index} id="item${index}" ${item.done ? 'checked' : ''} />
      <label for="item${index}">${item.text}</label>
    </li>
  `;
}

function toggleDone(event) {
  if (event.target.matches('input')) {
    const i = event.target.dataset.index;
    items[i].done = !items[i].done;
    setAndPop();
  } // else do nothing
}

function handleButtons(event) {
  if (event.target.matches('#CheckAll')) {
    checkAll();
  } else if (event.target.matches('#UncheckAll')) {
    uncheckAll();
  } else if (event.target.matches('#ClearAll')) {
    clearAll();
  } // else do nothing
}

function checkAll() {
  items = items.map(item => {item.done = true; return item; });
  setAndPop();
}

function uncheckAll() {
  items = items.map(item => {item.done = false;  return item; });
  setAndPop();
}

function clearAll() {
  items = [];
  setAndPop();
}

function setAndPop() {
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
addItems.addEventListener('click', handleButtons);

setAndPop()
