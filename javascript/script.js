const htmlList = document.getElementById("list");
let shoppingList = ["Latte", "Uova", "Prosciutto", "Salame", "Farina", "Mozzarella"];
let count = 0;

function addToList() {
while (count < shoppingList.length) {
  const element = document.createElement("li");
  element.innerHTML = `                    
  <input type="checkbox" name="${shoppingList[count]}" id="${count}">
    <label for="${shoppingList[count]}-${count}">${shoppingList[count]}</label>
    `;
  htmlList.append(element);
  count++;
}
}
addToList()


const insert = document.getElementById('insert');

insert.addEventListener('click', () => {
    shoppingList.push(document.getElementById('addList').value) 
    addToList()


})
