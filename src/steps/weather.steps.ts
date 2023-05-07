import * as locators from '../locators/bom.locators';
import { config } from '../support/config';
import { ICustomWorld } from '../support/custom-world';
import { getDateInFormat } from '../utils/dateUtils';
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

Given('Go to the bom homepage', async function (this: ICustomWorld) {
  const page = this.page!;
  await page.goto(config.BASE_URL);
  await page.locator(locators.WEATHER_SECTION).isVisible();
});

When('User clicks on city {string}', async function (this: ICustomWorld, city: string) {
  const page = this.page!;
  await page.locator(locators.CITY_FORECAST_LINK(city)).click();
  const pageTitle = await page.title();
  expect(pageTitle).toEqual(`${city} Forecast`);
});

Then(
  'Validate rain is less than {string} percentage for {string} days from today',
  async function (this: ICustomWorld, rainToBeBelow: string, days: number) {
    const page = this.page!;
    const dayFromNow = getDateInFormat(days);
    const dayElement = page.locator(locators.DAY_ELEMENT, {
      hasText: dayFromNow,
    });
    dayElement.scrollIntoViewIfNeeded();
    const rainElement = dayElement.locator('xpath=./parent::div').locator(locators.RAIN_TEXT);
    const rainText = await rainElement.innerText();
    const actualRainPercent = parseInt(rainText?.replace('%', '') ?? '0', 10);
    expect(actualRainPercent, `Looks like it will be a rainy day on ${dayFromNow}`).toBeLessThan(
      parseInt(rainToBeBelow),
    );
  },
);
