# raincheck-playwright

A test automation repo for BOM rain check based on Cucumber(7) with Playwright using Typescript.

## Based On
This repo is based on https://github.com/Tallyb/cucumber-playwright/

[Read](https://tally-b.medium.com/e2e-testing-with-cucumber-and-playwright-9584d3ef3360) or [watch](https://www.youtube.com/watch?v=PUVFmhYJNJA&list=PLwwCtx3xQxlVMZzS4oi2TafVRngQ1wF_0&index=2). 


## Framework

- Typescript setup for writing steps with eslint/typescript and prettier
- Launching of Playwright browser before running all tests
- Running feature with video recording option
- Report generated with last good image attached
- Utilies functions
## Tests

Weather BOM raincheck feature

## Setup

## To run your tests

`npm run test` or `npx cucumber-js` runs all tests

## Browser selection

By default we will use chromium. You can define an envrionment variable called BROWSER and
set the name of the browser. Available options: chromium, firefox, webkit

On Linux and Mac you can write:
BROWSER="Google Chrome" npm run test

`BROWSER=firefox npm run test` or `BROWSER=firefox npx cucumber-js` runs all tests using Firefox

On Windows you need to write

```
set BROWSER=Google Chrome
npm run test
```

specific browser with tag example,
```
BROWSER="Google Chrome" USE_ALLURE=1 npm run debug -- -t @weather
```

### Headless

**Warning**
Headless mode doesn't work with BOM since web scraping is disabled on this site

- `npm run debug` - headful mode with APIs enables both APIs and debug options
- `npm run api` - headless mode with debug apis
- `npm run video` - headless mode vith video

## To choose a reporter

The last reporter/formatter found on the cucumber-js command-line wins:

```text
--format summary --format @cucumber/pretty-formatter --format cucumber-console-formatter
```

In [cucumber.mjs](cucumber.mjs) file, modify the options.

## To view the html report of the last run

- run the command `npm run report`.

