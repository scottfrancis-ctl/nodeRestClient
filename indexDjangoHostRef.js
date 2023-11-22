const RestClient = require('./rest-client');

// you have to start local py rest host & postgres before running this
const API_BASE_URL = 'http://127.0.0.1:8000/';
const client = new RestClient(API_BASE_URL);

(async () => {
    // GET - all example
    // const products = await client.get('/products/');
    // console.log('GET /Products:', products);
    
    // // Get one
    const getOne = {
        id: 6,
    };
    const byIdResult = await client.getById(`/products/${getOne.id}/`);   // note the backticks, not quotes
    console.log('GET /Products/' + getOne.id + ':', byIdResult);

    // // POST example
    // const newProduct = {
    //     part_no: 'GH-234',
    //     product_desc: 'Colander',
    //     product_cost: 12.87,
    // };
    // const createdProduct = await client.post('/products/', newProduct);
    // console.log('POST /product:', createdProduct);

    // PUT request example
    // const updatedProduct = {
    //     id: 6,
    //     part_no: 'LLBV',
    //     product_desc: 'Copper Gravy Boat',
    //     product_cost: 42.44,
    // };
    // const revisedProduct = await client.put(`/products/${updatedProduct.id}/`, updatedProduct);
    // console.log(`PUT /products/${updatedProduct.id}/:`, revisedProduct);

    // DELETE request example
    // const deletedProduct = await client.delete('/products/4/');
    // console.log('DELETE /products/4:', deletedProduct);

})();

module.exports = byIdResult;
