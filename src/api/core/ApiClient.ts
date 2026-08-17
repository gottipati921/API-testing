import {APIRequestContext} from '@playwright/test';
export class ApiClient
{
  constructor(
  
    protected request: APIRequestContext,
    protected baseURL: string 
  )
  {}
  async get(endpoint: string, headers?: any)
  {
    return this.request.get(`${this.baseURL}${endpoint}`,//Playwright built in HTTP GET Method
      {
        headers //headers carry authentication tokens, content-type
      });
      //https://dummyjson.com/auth/me
  }
  //{username: "11", password: "Rahul"}
  //{auth: "Bearer eYJhbGCiOi...", application/json}
  //await request.get("https://dummyjson.cpm/users");
  async post(endpoint: string, data: any, headers?: any)
  {
    return this.request.post(`${this.baseURL}${endpoint}`,//Playwright built in HTTP POST Method
      {
        data, //username & password
        headers //headers carry authentication tokens, content-type, application/jsonJOSN.Stringify(data)
      });
     
  }
}