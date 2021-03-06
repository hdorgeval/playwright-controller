import * as SUT from '../../playwright-fluent';

describe('Playwright Fluent - delayRequestsTo(url)', (): void => {
  let p: SUT.PlaywrightFluent;
  beforeEach((): void => {
    jest.setTimeout(30000);
    p = new SUT.PlaywrightFluent();
  });
  afterEach(async (): Promise<void> => {
    await p.close();
  });

  test('should return an error when browser has not been launched', async (): Promise<void> => {
    // Given

    // When
    let result: Error | undefined = undefined;
    try {
      await p.delayRequestsTo('/foobar', 10);
    } catch (error) {
      result = error;
    }

    // Then
    expect(result && result.message).toContain(
      "Cannot delay requests to '/foobar' because no browser has been launched",
    );
  });
});
