import { test, expect } from '@playwright/test';


//test('Get single post', async ({ request }) => {
/*     const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const body = await response.json();
    console.log(body);
    expect(body.id).toBe(1);
    expect(body.userId).toBe(1);
});
 */
/* test('Create Post', async({request})=>{
const response = await request.post('https://jsonplaceholder.typicode.com/posts',
{
data:{
title: 'PlayWright API',
body: 'Learning Post Request',
userId: 1
},
headers:{
'Content-type': 'application/json',
Accept: 'application/json',
charset: 'utf-8'
}
});
expect(response.status()).toBe(201);
expect(response.ok()).toBeTruthy();
const responseBody = await response.json();
expect(responseBody.title).toBe('PlayWright API');
expect(responseBody.body).toBe('Learning Post Request');
expect(responseBody.userId).toBe(1);    
expect(responseBody).toHaveProperty('userId');
expect(responseBody).toHaveProperty('body','Learning Post Request');
});
 */
test('Create Put', async({request})=>{
const response = await request.post('https://jsonplaceholder.typicode.com/posts');
{
data:{
id: 1
title: 'updated PlayWright API'
body: 'Learning Put Request'
userId: 1
}
}
expect(response.status()).toBe(201);
});

test('Get comments post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/comments');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const comments = await response.json();
    console.log(comments);
   expect(comments.length).toBeGreaterThan(0);
   console.log(`Total comments: ${comments.length}`);
});


/* test('Get users post', async ({ request }) => {
    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();

    const user = await response.json();
    console.log(user);
    expect(user.id).toBe(1);
    expect(user.name).toBe('Leanne Graham');
    expect(user.username).toBe('Bret');
    expect(user.email).toBe('Sincere@april.biz');
    expect(user.address.street).toBe('Kulas Light');
    expect(user.address.suite).toBe('Apt. 556');
    expect(user.address.city).toBe('Gwenborough');
    expect(user.address.geo.lat).toBe('-37.3159');
    //expect(user.address.geo.lng).toBe('43.9367');
    expect(user.company.name).toBe('Romaguera-Crona');
    expect(user).toHaveProperty('address.zipcode', '92998-3874');
 */

//});
