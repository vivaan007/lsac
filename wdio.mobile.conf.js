exports.config = {
  // ====================
  // Runner and framework
  // Configuration
  // ====================
  runner: 'local',
  framework: 'jasmine',
  jasmineNodeOpts: {
    // Updated the timeout to 30 seconds due to possible longer appium calls
    // When using XPATH
    defaultTimeoutInterval: 90000,
  },
  sync: true,
  logLevel: 'silent',
  specs: [
    './*spec.js'
  ],
  isMobile: true,
  capabilities: [
    {
      // The defaults you need to have in your config
      platformName: 'Android',
      browserName: 'chrome',
      maxInstances: 1,
      // For W3C the appium capabilities need to have an extension prefix
      // http://appium.io/docs/en/writing-running-appium/caps/
      // This is `appium:` for all Appium Capabilities which can be found here
      'appium:deviceName': 'Pixel_8.1',
      'appium:avd': 'Pixel_8.1',
      'appium:platformVersion': '8.1',
      'appium:orientation': 'PORTRAIT',
      // `automationName` will be mandatory, see
      // https://github.com/appium/appium/releases/tag/v1.13.0
      'appium:automationName': 'UiAutomator2',
      'appium:newCommandTimeout': 240,
      'goog:chromeOptions': {
        w3c: true,
        // Add this option to prevent the annoying "Welcome"-message
        args: ['--no-first-run'],
      },
    },
  ],
  deprecationWarnings: true,
  bail: 0,
  baseUrl: 'http://the-internet.herokuapp.com',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  reporters: ['spec'],

  // ====================
  // Appium Configuration
  // ====================
  services: ['appium'],
  appium: {
    // For options see
    // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    args: {
      // For arguments see
      // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    },
    command: 'appium'
  },

  port: 4723,

  // ====================
  // Some hooks
  // ====================
  beforeSession: (config, capabilities, specs) => {
    require('@babel/register');
  },
};