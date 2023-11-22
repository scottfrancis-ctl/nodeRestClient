const RestClient = require('./rest-client');

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';
const client = new RestClient(API_BASE_URL);

(async () => {
    // GET - all example
    // const posts = await client.get('/posts/24');
    // console.log('GET /Posts:', posts);

    // GET by id example
    const getOne = {
        id: 18,
    };
    const byIdResult = await client.getById(`/posts/${getOne.id}`);   // note the backticks, not quotes  `/posts/${getOne.id}`
    console.log('GET /Posts/' + getOne.id + ':', byIdResult);

    // POST example
    // const newPost = {
    //     title: 'New post title',
    //     body: 'New post body',
    //     userId: 1,
    // };
    // const createdPost = await client.post('/posts', newPost);
    // console.log('POST /posts:', createdPost);

    // // PUT request example
    // const updatedPost = {
    //     id: 1,
    //     title: 'Updated post title',
    //     body: 'Updated post body',
    //     userId: 1,
    // };
    // const updateResult = await client.put(`/posts/${updatedPost.id}`, updatedPost);
    // console.log(`PUT /posts/${updatedPost.id}:`, updateResult);

    // DELETE request example
    // const deletedPost = await client.delete('/posts/18');
    // console.log('DELETE /posts/18:', deletedPost);

    module.exports = byIdResult;

 })();

 

