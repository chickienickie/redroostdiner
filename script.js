
const menuItems = {
    breakfast: [
        { name: "Eggs & Toast", price: "$2.95" },
        { name: "2 Eggs & Toast", price: "$3.95" },
        { name: "2 Eggs, Toast, & Potatoes", price: "$5.95" },
        { name: "2 Eggs, Toast, & Potatoes & Meat", price: "$7.95" },
        { name: "Egg Sandwich", price: "$2.95" },
        { name: "Egg Sandwich w/cheese", price: "$3.45" },
        { name: "Breakfast Sandwich", price: "$4.50" },
        { name: "Sausage biscuits & gravy", price: "$4.95" },
        { name: "Sausage biscuits & gravy w/eggs", price: "$6.95" },
        { name: "Scrapple & eggs", price: "$6.95" },
        { name: "Egg Omelette w/cheese & toast", price: "$5.95" },
        { name: "Ham, egg, & cheese omelette w/toast", price: "$7.95" },
        { name: "Veggie omelette w/toast", price: "$7.95" },
        { name: "Western omelette w/toast", price: "$7.95" },
        { name: "Sausage gravy omelette w/toast", price: "$8.95" },
        { name: "Three meat omelette w/toast", price: "$9.95" },
        { name: "Bacon, tomato, and cheddar omelette w/toast", price: "$8.95" },
        { name: "Cheesesteak Omelette w/toast", price: "$10.95" },
        { name: "Steak & Eggs w/toast", price: "$14.95" },
        { name: "Belgian Waffle", price: "$5.95" },
        { name: "Pancakes", price: "$4.95" },
        { name: "Toast", price: "$1.99" },
        { name: "Sausage links", price: "$4.99" },
        { name: "Bacon (4)", price: "$4.99" },
        { name: "Ham Slices", price: "$3.99" },
        { name: "Scrapple (2)", price: "$4.99" },
    ],
    lunchdinner: [
        { name: "", price: "" },
    ],
    desserts: [
        { name: "6 Layer Italian Cream Cake", price: "$3.99" },
        { name: "Apple Pie", price: "$1.99" },
        { name: "Peach Pie", price: "$1.99" },
        { name: "Bluberry Pie", price: "$1.99" }
    ],
   drinks: [
        { name: "Coffee", price: "$2.25" },
        { name: "Tea", price: "$1.99" },
        { name: "Pepsi", price: "$1.25" },
        { name: "Diet Pepsi", price: "$1.25" },
        { name: "Mt. Dew", price: "$1.25" },
        { name: "Bottle Water", price: "$1.50" },
        { name: "Sm. Gatorade", price: "$1.50" },
        { name: "Sunny D", price: "$1.25" },
        { name: "Apple Juice", price: "$1.25" },
        { name: "Berry Juice", price: "$1.25" },
        { name: "Propel", price: "$1.50" },
        { name: "Chocolate Milk", price: "$2.99" },
        { name: "White Milk", price: "$2.49" },
        { name: "Orange Juice", price: "$2.99" },
    ],
    about: [
        { name: "", price: "" }
    ]
};

function displayMenu() {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = ""; 

    for (const [category, items] of Object.entries(menuItems)) {
        const sectionDiv = document.createElement("div");
        sectionDiv.classList.add("menu-section");

        sectionDiv.innerHTML = `<h2>${category.charAt(0).toUpperCase() + category.slice(1)} Menu</h2>`;

        items.forEach(item => {
            const menuItemDiv = document.createElement("div");
            menuItemDiv.classList.add("menu-item");
            menuItemDiv.innerHTML = `
                <span class='item-name' style='color: #ce2c38; font-size: 20px; font-family: Oswald, sans-serif; font-weight: 500;'>${item.name}</span>
                <span class='price' style='color: #000; font-size: 20px; font-family: Oswald, sans-serif;'>${item.price}</span>
            `;
            sectionDiv.appendChild(menuItemDiv);
        });

        menuContainer.appendChild(sectionDiv);
    }
}

document.addEventListener("DOMContentLoaded", displayMenu);
