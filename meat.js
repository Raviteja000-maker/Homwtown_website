// Sample product data with images, prices, and descriptions
const products = [
        { id: 1, name: 'Beef', category: 'beef', price: 12.99, description: '2 lbs', image: 'meatimages/beef.jpg' },
        { id: 2, name: 'Chicken', category: 'chicken', price: 7.99, description: '1.5 lbs', image: 'meatimages/chicken.png' },
        { id: 3, name: 'Pork', category: 'pork', price: 8.99, description: '1 lb', image: 'meatimages/pork.jpg' },
        { id: 4, name: 'Lamb', category: 'lamb', price: 14.99, description: '2.5 lbs', image: 'meatimages/lamb.jpg' },
        { id: 5, name: 'Chicken Drumsticks', category: 'chicken', price: 12, description: '2.5 lbs', image: 'meatimages/chicken drumstick.png' },
        { id: 6, name: 'pork skin', category: 'pork', price: 12.99, description: '2 lbs', image: 'meatimages/pork skin.jpg' },
        { id: 7, name: 'Pork spare ribs', category: 'beef', price: 7.99, description: '1.5 lbs', image: 'meatimages/pork spare ribs.jpg' },
        { id: 8, name: 'Pork liver', category: 'pork', price: 8.99, description: '1 lb', image: 'meatimages/pork liver.jpg' },
        { id: 9, name: 'Turkey drum', category: 'turkey', price: 14.99, description: '2.5 lbs', image: 'meatimages/turkey drum.jpg' },
        { id: 10, name: 'Beef rib eve steak', category: 'beef', price: 12, description: '2.5 lbs', image: 'meatimages/beef rib eve.jpg' },
        { id: 11, name: 'pork ear', category: 'pork', price: 12.99, description: '2 lbs', image: 'meatimages/pork ear.jpg' },
        { id: 12, name: 'Chicken', category: 'chicken', price: 7.99, description: '1.5 lbs', image: 'meatimages/chicken.png' },
        { id: 13, name: 'Pork', category: 'pork', price: 8.99, description: '1 lb', image: 'meatimages/pork.jpg' },
        { id: 14, name: 'Lamb', category: 'lamb', price: 14.99, description: '2.5 lbs', image: 'meatimages/lamb.jpg' },
        { id: 15, name: 'Chicken Drumsticks', category: 'chicken', price: 12, description: '2.5 lbs', image: 'meatimages/chicken drumstick.png' }
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



