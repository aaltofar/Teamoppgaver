let items = [
  "Hapå",
  "Sigg",
  "Snurring",
  "Dreamies",
  "Seigmenn",
  "Joika",
  "Rødcola",
];

let inventoryItems = [];

let invHidden = false;

updateView();

function updateView() {
  document.getElementById("app").innerHTML = /*HTML*/ `
    <div class="container">
      ${drawAllItems()}
    </div>
    
    <button onclick="toggleInv()">${
      invHidden ? "Show inventory" : "Hide inventory"
    }</button>
    
    <div id="inventory" style="display:${invHidden ? "none" : ""}">
    ${drawInventoryItems()}
    </div>
   
    <input type="text" onchange="addNewItem(this.value)">
    `;
}

function addNewItem(newItem) {
  items.push(newItem);
  updateView();
}

function drawAllItems() {
  let itemsHtml = "";
  for (let i = 0; i < items.length; i++) {
    itemsHtml += `<div onclick="moveItemToInventory('${items[i]}', ${i})" class="item">${items[i]}</div>`;
  }
  return itemsHtml;
}

function drawInventoryItems() {
  let inventoryHtml = "";
  for (let i = 0; i < inventoryItems.length; i++) {
    inventoryHtml += `<div onclick="moveItemToGround(
        '${inventoryItems[i]}', ${i}
      )" class="item">${inventoryItems[i]}</div>`;
  }
  return inventoryHtml;
}

function toggleInv() {
  invHidden = !invHidden;
  updateView();
}

function moveItemToInventory(item, index) {
  items.splice(index, 1);
  inventoryItems.push(item);
  console.log(item);
  updateView();
}

function moveItemToGround(item, index) {
  inventoryItems.splice(index, 1);
  items.push(item);
  updateView();
}
