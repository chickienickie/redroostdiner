function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('nav-active');
}


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
        

    ],
    lunch: [
        { name: "", price: "" }
    ],
    dinner: [
        { name: "", price: "" }
    ],
    about: [
        { name: "", price: "" }
    ]
};

function displayMenu() {
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = ""; // Clear previous content

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
