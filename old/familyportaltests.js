// var webdriverio = require("webdriverio");
// var expect = require("chai").expect;
// var config = require("./helpers/fdesiredCapabilities").options;
// var client = webdriverio.remote(config);

const wdio = require("webdriverio");
const caps = {
  deviceName: "emulator-5554",
  platformName: "android",
  appPackage: "com.media4care.family",
  appActivity: "com.media4care.common.MainActivity",
  noReset: true,
  fullReset: false,
  ensureWebviewsHavePages: true,
};
const client = wdio.remote({
  protocol: "http",
  host: "localhost",
  port: 4723,
  path: "/wd/hub",
  desiredCapabilities: caps,
});

// describe("familyportaltest", function () {
//   before(function () {
//     this.timeout(50000);
//     return client.init();
//   });

//texting app texting capabilities
describe("family group texting test", function () {
  this.timeout(15000);
  it("click familygroup button and send a message to family", function () {
    const selector =
      "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View";
    return client.init(caps).waitForExist(selector).element(selector).click();
  });
});

//   after(function () {
//     // console.log("Test run successfully");
//     return client.end();
//   });
// });

// Requires the webdriverio client library
// (npm install webdriverio)
// Then paste this into a .js file and run with Node:
// node <file>.js

// const wdio = require('webdriverio');
// const caps = {"deviceName":"emulator-5554","platformName":"android","appPackage":"com.media4care.family","appActivity":"com.media4care.common.MainActivity","noReset":true,"fullReset":false,"ensureWebviewsHavePages":true};
// const driver = wdio.remote({
//   protocol: "http",
//   host: "localhost",
//   port: 4723,
//   path: "/wd/hub",
//   desiredCapabilities: caps
// });

// driver.init()
//   .element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[2]/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View")
//   .click()
//   .element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.EditText")
//   .click()
//   .setValue("familyportal text automation")
//   .element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.Button")
//   .click()
//   .element("/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.Button")
//   .click()
//   .end();

// el1.click();
// let el2 = client.element(
//   "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.EditText"
// );
// el2.click();
// el2.setValue("familyportal text automation");
// let el3 = client.element(
//   "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[3]/android.view.View[2]/android.view.View[2]/android.view.View[2]/android.view.View[1]/android.widget.Button"
// );
// el3.click();
// let el4 = client.element(
//   "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View/android.view.View/android.view.View[1]/android.view.View[1]/android.view.View[2]/android.view.View[1]/android.view.View/android.widget.Button"
// );
// el4.click();
