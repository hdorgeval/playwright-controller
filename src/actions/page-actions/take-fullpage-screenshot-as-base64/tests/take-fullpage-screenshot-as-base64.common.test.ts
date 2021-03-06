import * as SUT from '../index';
import { Page } from 'playwright';

describe('full page screenshot', (): void => {
  beforeEach((): void => {
    jest.setTimeout(30000);
  });

  test('should return an error when browser has not been launched', async (): Promise<void> => {
    // Given
    const page: Page | undefined = undefined;

    // When
    // Then
    const expectedError = new Error(
      'Cannot take a screenshot of the full page because no browser has been launched',
    );
    await SUT.takeFullPageScreenshotAsBase64(page, SUT.defaultFullPageScreenshotOptions).catch(
      (error): void => expect(error).toMatchObject(expectedError),
    );
  });
});
