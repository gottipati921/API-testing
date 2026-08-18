import {test,expect,request} from '@playwright/test';


test('test authorization and generate token',async({request})=>{
const response = await request.post('https://dummyjson.com/auth/login',
    {
data:{
    username:'emilys',
    password:'emilyspass'
}
    }
);
const body = await response.json();
console.log(body);
const accessToken = body.accessToken;
console.log(body.accessToken);


const profileResponse = await request.get('https://dummyjson.com/auth/me',
    {
        headers:{
            Authorization :`Bearer ${accessToken}`
        }

    }

);

const profileBody = await profileResponse.json();
console.log(profileBody);
});

