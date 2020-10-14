# Dementai App Blackbox Testing(Appium)

> **NOTE:**
> This project tests are for Webdriver V6.

This Project runs Appium tests together with WebdriverIO for:

- iOS/Android Native Apps
- iOS/Android Hybrid Apps
- Android Chrome and iOS Safari browser ([check here](./README.md#automating-chrome-or-safari))

> **Note:**
> This project only handles local execution on 1 emulator/simulator at a time, not parallel execution. For more info about that Google on setting up a grid with Appium.

![webdriverio-demo-app-ios.ios](./docs/assets/appium-tests.gif)

## Based on
This test code is currently based on:
- **WebdriverIO:** `6.##.#`
- **Appium:** `1.15.#`


## Installing Appium on a local machine
See [Installing Appium on a local machine](./docs/APPIUM.md)

## Setting up Android and iOS on a local machine
To setup your local machine to use an Android emulator and an iOS simulator see [Setting up Android and iOS on a local machine](./docs/ANDROID_IOS_SETUP.md)

## Quick start
Choose one of the following options:

1. Clone the git repo — `git clone https://github.com/alhassanmoses/Dementia-App-Appium-Blackbox-Testing`

2. cd into cloned Repo — `cd Dementia-App-Appium-Blackbox-Testing`

3. Install dependencies — `npm install`
 
4. Run the tests for iOS with `npm run ios.app` and for Android with `npm run android.app`

## Config
This project uses a specific config for iOS and Android, see [configs](./config/) and is based on `wdio.shared.conf.js`.
This shared config holds all the defaults so the iOS and Android configs only need to hold the capabilities and specs that are needed for running on iOS and or Android (app or browser).

The project has been configured to run on the appium desktop client, you can edit the configurations in wdio.shared.conf.js to suite your preferences
```
    // ====================
    // Appium Configuration
    // ====================
    services: [
        [
            'appium',
            {
            // For options see
            // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                args: {
                // For arguments see
                // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
                },                
            },
        ],
    ],
```

## Locator strategy for native apps
The locator strategy for this project is to use `XPATH`'s, since only XPATHS's are available, see also the [WebdriverIO docs]

The following setup is used to make cross-platform selectors for XPATHS

```js
const SELECTORS = {
    WEB_VIEW_SCREEN: browser.isAndroid
        ? '*//android.webkit.WebView'
        : '*//XCUIElementTypeWebView',
};
```

## Automating Chrome or Safari
Mobile web automation is almost the same as writing tests for desktop browsers. The only difference can be found in the configuration that needs to be used.
Click [here](./config/wdio.ios.browser.conf.js) to find the config for iOS Safari and [here](./config/wdio.android.browser.conf.js) for Android Chrome.
For Android be sure that the lastest version of Chrome is installed, see also [here](./docs/FAQ.md#i-get-the-error-no-chromedriver-found-that-can-automate-chrome-).


## Cloud vendors

### Sauce Labs Real Device Cloud
This project also provides a setup for testing with the Real Device Cloud (RDC) of Sauce Labs. Please check the [SauceLabs](./config/saucelabs)-folder to see the setup for iOS and Android.

> With the latest version of WebdriverIO (`5.4.13` and higher) the iOS and Android config holds:
> - automatic US or EU RDC cloud selection by providing a `region` in the config, see the [iOS](./config/saucelabs/wdio.ios.rdc.app.conf.js) and the [Android](./config/saucelabs/wdio.ios.rdc.app.conf.js) configs
> - automatic update of the teststatus in the RDC cloud without using a customer script

Make sure you install the latest version of the `@wdio/sauce-service` with

```shell
$ npm install --save-dev @wdio/sauce-service
```

and add `services: ['sauce'],` to the config. If no `region` is provided it will automatically default to the US-RDC cloud.
If you provide `region: 'us'` or `region: 'eu'` it will connect to the US or the EU RDC cloud

There are 2 scripts that can be used, see the [`package.json`](./package.json), to execute the tests in the cloud:

    // For iOS
    $ npm run ios.sauce.rdc.app

    // For Android
    $ npm run android.sauce.rdc.app

## FAQ
See [FAQ](./docs/FAQ.md)

## Tips and Tricks
See [Tips and Tricks](./docs/TIPS_TRICKS.md)
