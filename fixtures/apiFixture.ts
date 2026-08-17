import { test as base } from '@playwright/test';
import { AuthService } from '../services/AuthService';
import { UserService } from '../services/UserService';
type MyFixtures = {
  userService: UserService;
};
export const test = base.extend<MyFixtures>({
  userService: async ({ request }, use) => {
    const authService = new AuthService(request);
    const token = await authService.login('emilys', 'emilyspass');
    const userService = new UserService(request, token);
    await use(userService);//Fixture execution/call
  }
});
export { expect } from '@playwright/test';