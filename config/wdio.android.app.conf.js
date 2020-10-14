const { join } = require("path");
const { config } = require("./wdio.shared.conf");

// ============
// Specs
// ============

//Tells which files to loops through during testing
const config_string_for_dementia = "./tests/specs/**/dem*.spec.js";
const config_string_for_family = "./tests/specs/**/fam*.spec.js";
const deafult_config_string = "./tests/specs/**/app*.spec.js";

//scrip to know which test to run /--------------"default" , "seniors" or "family"--------------/
//change the value of "app_tested" to test respective apps
let app_tested = "family";
var appPackageText = "com.media4care.dementia";
switch(app_tested){
  //Default
  case "default":

    appPackageText = "com.media4care.dementia";
config.specs = [`${deafult_config_string}`];

  break;

  //Seniors App
  case "seniors":
    appPackageText = "com.media4care.dementia"
config.specs = [`${config_string_for_dementia}`];

  break;

  //Family App
  case "family":
    appPackageText = "com.media4care.family"
config.specs = [`${config_string_for_family}`];

  break;
    
}
// config.specs = ["./tests/specs/**/app*.spec.js"];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
config.capabilities = [
  {
    // The defaults you need to have in your config
    platformName: "Android",
    maxInstances: 1,
    // For W3C the appium capabilities need to have an extension prefix
    // http://appium.io/docs/en/writing-running-appium/caps/
    // This is `appium:` for all Appium Capabilities which can be found here
    "appium:deviceName": "emulator-5554",
    "appium:platformVersion": "9.0",
    // "appium:orientation": "LANDSCAPE",
    // `automationName` will be mandatory, see
    // https://github.com/appium/appium/releases/tag/v1.13.0
    "appium:automationName": "UiAutomator2",
    // The path to the app
    // "appium:app": join(process.cwd(), "./apps/Android-NativeDemoApp-0.2.1.apk"),
    
    "appium:appPackage": appPackageText,
    "appium:appActivity": "com.media4care.common.MainActivity",
    "appium:fullReset": false,
    // Read the reset strategies very well, they differ per platform, see
    // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
    "appium:noReset": true,
    "appium:newCommandTimeout": 240,
  },
];

exports.config = config;