// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

let total = 0;

// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    let menuBlock = document.getElementById('menu');
    // Loop through each category and its items in the menu object
    const categoryKeys = Object.keys(menu);

    for(let i = 0; i <categoryKeys.length; i++ ){
        let category = document.createElement('h1');
        category.innerText = categoryKeys[i];
        menuBlock.appendChild(category);

        let listOfItems = document.createElement('ul');
        listOfItems.style.listStyle = 'none';
        menuBlock.appendChild(listOfItems);

        menu[categoryKeys[i]].map((item)=>{
            let foodItem = document.createElement('li');
            foodItem.innerText = item;
            listOfItems.appendChild(foodItem);

       
        foodItem.addEventListener('click', () => addToOrder(item));
    });
    }
        
        // Create an element to represent the category
        

        // Set the text content of the category element to the category name

        // Append the category element to the menu container

        // Create an element to represent a list of items

        // Append a list of items element to the menu container

        // Loop through the items in the category and create list items

            // Create a list item element

            // Set the text content of the list item element to the item name

            // Attach a click event listener to the list item to add it to the order

            // Append the list item to the list of items

            
}

/*let menuBlock = document.getElementById('menu');
let addItem = document.createElement("h1");
addItem.innerText = "bruh";
menuBlock.appendChild(addItem);*/


// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML
let listOforders = document.getElementById('order-items');

let orderTotal = document.getElementById('order-total')
    // Create a list item for the order
 let item = document.createElement('li');

    // Set the text content of the list item to the item name
item.innerText = itemName;
    // Append the list item to the order items list
listOforders.appendChild(item);
    // Calculate and update the total price
total += 60;
    // Update the text content of the order total element with the new total
    orderTotal.innerText = (`${total}.00`);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
    displayMenuItems(menu);
}

// Start the menu system by calling the init function
initMenuSystem(menu);

