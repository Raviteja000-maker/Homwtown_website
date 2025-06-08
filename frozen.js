// Sample product data for Frozen section
const products = [
    { id: 1, name: 'Frozen Peas', category: 'frozen-vegetables', price: 3.50, image: 'Images/frozen-peas.png', description: '500g pack' },
    { id: 2, name: 'Frozen Pizza', category: 'frozen-foods', price: 6.99, image: 'Images/frozen-pizza.png', description: 'Large pizza' },
    { id: 3, name: 'Vanilla Ice Cream', category: 'ice-cream', price: 4.99, image: 'Images/vanilla-ice-cream.png', description: '1L tub' },
    { id: 4, name: 'Frozen Broccoli', category: 'frozen-vegetables', price: 2.99, image: 'Images/frozen-broccoli.png', description: '500g pack' },
    { id: 5, name: 'Chocolate Ice Cream', category: 'ice-cream', price: 4.99, image: 'Images/chocolate-ice-cream.png', description: '1L tub' }
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
