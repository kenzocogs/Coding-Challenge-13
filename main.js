// Task 2: Fetch products from the API using fetch and promises

fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error ('Network response was not okay')
        }
        return response.json(); // return response as JSON
    })
    .then(products => {
        const productDisplay = document.getElementById('product-display')
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.textContent = `${product.company} - $${product.price} - ${product.name} - ${product.image}`;
            productDisplay.appendChild(productDiv);
        });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

