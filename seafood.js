// Sample product data for Seafood
const products = [
    { id: 1, name: 'Live Tilapia', category: 'fish', price: 6.99, description: 'Per lb', image: 'seafoodimages/Live Tilapia.png' },
    { id: 2, name: 'Live Catfish', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Live Catfish.png' },
    { id: 3, name: 'Live Abalone', category: 'shellfish', price: 8.99, description: 'Each', image: 'seafoodimages/Live Abalone.png' },
    { id: 4, name: 'Live Stone Crab', category: 'shellfish', price: 6.99, description: 'Per lb', image: 'seafoodimages/Live Stone Crab.png' },
    { id: 5, name: 'Fresh Canada Crab', category: 'shellfish', price: 14.99, description: 'Per lb', image: 'seafoodimages/Fresh Canada Crab.png' },
    { id: 6, name: 'Fresh Lobster', category: 'shellfish', price: 16.99, description: 'Per lb', image: 'seafoodimages/Fresh Lobster.png' },
    { id: 7, name: 'Golden Pompano', category: 'fish', price: 6.99, description: 'Per lb', image: 'seafoodimages/Golden Pompano.png' },
    { id: 8, name: 'Fresh Tilapia', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Fresh Tilapia.png' },
    { id: 9, name: 'Red Tilapia', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Red Tilapia.png' },
    { id: 10, name: 'Milk Fish', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Milk Fish.png' },
    { id: 11, name: 'Red Drum', category: 'fish', price: 6.49, description: 'Per lb', image: 'seafoodimages/Red Drum.png' },
    { id: 12, name: 'Fresh Mackerel', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Fresh Mackerel.png' },
    { id: 13, name: 'Fresh Squid', category: 'fish', price: 5.49, description: 'Per lb', image: 'seafoodimages/Fresh Squid.png' },
    { id: 14, name: 'Yellow Croaker', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Yellow Croaker.png' },
    { id: 15, name: 'Porgy Fish', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Porgy Fish.png' },
    { id: 16, name: 'Black Sea Bass', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Black Sea Bass.png' },
    { id: 17, name: 'Giant Perch', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Giant Perch.png' },
    { id: 18, name: 'Spanish Mackerel', category: 'fish', price: 6.99, description: 'Per lb', image: 'seafoodimages/Spanish Mackerel.png' },
    { id: 19, name: 'Skate Wing', category: 'fish', price: 4.49, description: 'Per lb', image: 'seafoodimages/Skate Wing.png' },
    { id: 20, name: 'Salmon Steak', category: 'fish', price: 10.49, description: 'Per lb', image: 'seafoodimages/Salmon Steak.png' },
    { id: 21, name: 'Salmon Head', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Salmon Head.png' },
    { id: 22, name: 'Whiting Fish', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Whiting Fish.png' },
    { id: 23, name: 'Catfish', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Catfish.png' },
    { id: 24, name: 'Bonita Fish', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Bonita Fish.png' },
    { id: 25, name: 'Grass Carp', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Grass Carp.png' },
    { id: 26, name: 'Sea Bass Fish', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Sea Bass Fish.png' },
    { id: 27, name: 'Shark', category: 'fish', price: 4.49, description: 'Per lb', image: 'seafoodimages/Shark.png' },
    { id: 28, name: 'Perch', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Perch.png' },
    { id: 29, name: 'Yellow Tail', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Yellow Tail.png' },
    { id: 30, name: 'Striped Bass', category: 'fish', price: 8.49, description: 'Per lb', image: 'seafoodimages/Striped Bass.png' },
    { id: 31, name: 'Jack Fish', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Jack Fish.png' },
    { id: 32, name: 'Fresh Groupers', category: 'fish', price: 12.99, description: 'Per lb', image: 'seafoodimages/Fresh Groupers.png' },
    { id: 33, name: 'Branzino', category: 'fish', price: 8.99, description: 'Per lb', image: 'seafoodimages/Branzino.png' },
    { id: 34, name: 'Red Snapper', category: 'fish', price: 11.99, description: 'Per lb', image: 'seafoodimages/Red Snapper.png' },
    { id: 35, name: 'Fresh Small Squid', category: 'shellfish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Fresh Small Squid.png' },
    { id: 36, name: 'Headless Shrimp', category: 'shrimp', price: 7.99, description: 'Per lb', image: 'seafoodimages/Headless Shrimp.png' },
    { id: 37, name: 'Shrimp w/Head', category: 'shrimp', price: 6.99, description: 'Per lb', image: 'seafoodimages/Shrimp with Head.png' },
    { id: 38, name: 'Fresh Surf Clam', category: 'shellfish', price: 2.99, description: 'Per lb', image: 'seafoodimages/Fresh Surf Clam.png' },
    { id: 39, name: 'Fresh Moon Snail', category: 'shellfish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Fresh Moon Snail.png' },
    { id: 40, name: 'Fresh Pacific Geoduck', category: 'shellfish', price: 32.99, description: 'Per lb', image: 'seafoodimages/Fresh Pacific Geoduck.png' },
    { id: 41, name: 'Oyster', category: 'shellfish', price: 2.99, description: 'Per lb', image: 'seafoodimages/Oyster.png' },
    { id: 42, name: 'Sea Snails', category: 'shellfish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Sea Snails.png' },
    { id: 43, name: 'Conch', category: 'shellfish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Conch.png' },
    { id: 44, name: 'Large Clams', category: 'shellfish', price: 2.99, description: 'Per lb', image: 'seafoodimages/Large Clams.png' },
    { id: 45, name: 'BabyLonia Snail', category: 'shellfish', price: 5.99, description: 'Per lb', image: 'seafoodimages/BabyLonia Snail.png' },
    { id: 46, name: 'Blood Clam', category: 'shellfish', price: 7.99, description: 'Per lb', image: 'seafoodimages/Blood Clam.png' },
    { id: 47, name: 'Razor Clam', category: 'shellfish', price: 12.99, description: 'Per lb', image: 'seafoodimages/Razor Clam.png' },
    { id: 48, name: 'Blue Crab', category: 'shellfish', price: 5.49, description: 'Per lb (7lb for $4.49/lb, 15lb for $3.49/lb)', image: 'seafoodimages/Blue Crab.png' },
    { id: 49, name: 'Canada Crab', category: 'shellfish', price: 14.99, description: 'Per lb', image: 'seafoodimages/Canada Crab.png' },
    { id: 50, name: 'Fresh Butterfish', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Fresh Butterfish.png' },
    { id: 51, name: 'Fresh Spanish Mackerel', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Fresh Spanish Mackerel.png' },
    { id: 52, name: 'Fresh Bonita Fish', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Fresh Bonita Fish.png' },
    { id: 53, name: 'Golden Pompano (China)', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Golden Pompano (China).png' },
    { id: 54, name: 'Tilapia (China)', category: 'fish', price: 3.49, description: 'Per lb', image: 'seafoodimages/Tilapia (China).png' },
    { id: 55, name: 'Mackerel (Norway)', category: 'fish', price: 3.99, description: 'Per lb', image: 'seafoodimages/Mackerel (Norway).png' },
    { id: 56, name: 'Fresh Squid (USA)', category: 'shellfish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Fresh Squid (USA).png' },
    { id: 57, name: 'Cuttlefish (USA/Wild Caught)', category: 'shellfish', price: 6.99, description: 'Per lb', image: 'seafoodimages/Cuttlefish (USA Wild Caught).png' },
    { id: 58, name: 'Greenland Turbot (USA/Wild Caught)', category: 'fish', price: 5.99, description: 'Per lb', image: 'seafoodimages/Greenland Turbot (USA Wild Caught).png' },
    { id: 59, name: 'King Mackerel', category: 'fish', price: 0, description: 'Per lb', image: 'seafoodimages/King Mackerel.png' },
    { id: 60, name: 'Atlantic Croaker ', category: 'fish', price: 4.99, description: 'Per lb', image: 'seafoodimages/Atlantic Croaker.png' },
    { id: 61, name: 'Anchovy', category: 'fish', price: 8.99, description: 'Per lb', image: 'seafoodimages/Asnchovy.png' },
    { id: 62, name: 'Dried Shrimp', category: 'shrimp', price: 15.99, description: 'Per lb', image: 'seafoodimages/Dried Shrimp.png' },
    { id: 63, name: 'Salted Jellyfish Head', category: 'shellfish', price: 9.99, description: 'Per lb', image: 'seafoodimages/Salted Jellyfish Head.png' },
    { id: 64, name: 'Fish Bone', category: 'fish', price: 1.99, description: 'Per lb', image: 'seafoodimages/Fish Bone.png' }

];


// Function to display products with description and price
function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = ''; // Clear previous products
    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');
        productDiv.innerHTML = `
              <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p class="price">$${product.price.toFixed(2)}</p>
            <p class="description">${product.description}</p>
            
        `;
        productList.appendChild(productDiv);
    });
}

// Initial display of all products
displayProducts(products);

// Price Label Update
function updatePriceLabel(value) {
    document.getElementById('price-label').textContent = `$${value}`;
}

// Filter Functionality
document.getElementById('price-range').addEventListener('input', function() {
    filterProducts();
});

document.getElementById('category-filter').addEventListener('change', function() {
    filterProducts();
});

// Filtering products by price and category
function filterProducts() {
    const priceLimit = parseFloat(document.getElementById('price-range').value);
    const selectedCategory = document.getElementById('category-filter').value;

    const filteredProducts = products.filter(product => {
        const priceMatch = product.price <= priceLimit;
        const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
        return priceMatch && categoryMatch;
    });

    displayProducts(filteredProducts); // Display filtered products
}
