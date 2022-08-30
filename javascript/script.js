const htmlList = document.getElementById("list");
let shoppingList = ["Latte", "Uova", "Prosciutto", "Salame", "Farina", "Mozzarella"]
let count = 0; 

while (count < shoppingList.length) {
    const element = document.createElement("li");
    element.append(shoppingList[count])
    htmlList.append(element)
    count++;
}

