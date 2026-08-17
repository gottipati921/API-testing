import { test, expect } from '../fixtures/apiFixture';
// OR (after alias)
// import { test, expect } from '@api/fixtures/apiFixture';
test('Validate user profile', async ({userService}) => {
  const response = await userService.getProfile();
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(body.username).toBe('emilys');
});