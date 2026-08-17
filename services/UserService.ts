import { APIRequestContext, expect } from "@playwright/test";
import { ApiClient } from "../src/api/core/ApiClient";

export class UserService extends ApiClient
{

    private token: string;

    constructor(request: APIRequestContext, token : string)
    {
        super(request, 'https://dummyjson.com');
        this.token =token;
    }
    async getProfile()
    {
        return this.get('/auth/me', {
            Authorization : `Bearer ${this.token}`
        });
    }

}
