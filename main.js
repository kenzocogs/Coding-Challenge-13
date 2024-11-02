// Task 2: Fetch products from the API using fetch and promises
const productDisplay = document.getElementById('product-display')

fetch('https://www.course-api.com/javascript-store-products')
    .then(response => {
        if (!response.ok) {
            throw new Error ('Network response was not okay'); 
        }
        return response.json(); // return response as JSON
    })
    .then(products => {
    // Task 3: Display Product Details Dynamically (also properly formatting the data)
        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.className = 'product'; // creating class id to apply styling 
            // formatting api data
            productDiv.innerHTML = ` 
            <h2>${product.fields.name}</h2>
            <p><i>Company: ${product.fields.company}</i></p>
            <p>Price: $${product.fields.price}</p>
            <img src="${product.fields.image[0].url}" style="width: 150px; height: 150px;">
            `;
            productDisplay.appendChild(productDiv);
        });
    })
    // Task 4: Handling Errors Gracefully
    .catch(error => {
        // logging error in console
        console.error('There was a problem with the fetch operation:', error);
        // displaying message on webpage if there is an error
        productDisplay.innerHTML = `<h2> ERROR: Products have failed to load. Please try again later. </h2>`
    });



