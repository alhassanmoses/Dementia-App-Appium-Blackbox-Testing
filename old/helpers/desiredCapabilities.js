exports.options = {
  desiredCapabilities: {
    platformName: "android",
    platformVersion: "9.0",
    appPackage: "com.media4care.dementia",
    appActivity: "com.media4care.common.MainActivity",
    automationName: "uiautomator2",
    // avdReadyTimeout: "2000",
    deviceName: "emulator-5554",
    noReset: true,
    fullReset: false,
  },
  host: "localhost",
  port: 4723,
};
