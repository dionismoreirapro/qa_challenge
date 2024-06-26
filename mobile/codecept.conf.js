const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './e2e/*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/dionismoreira/Documents/stefanini/mobile/app/ApiDemos-debug.apk',
      platform: 'Android',
      device: 'emulator'
    }
  },
  include: {
    I: './support/steps_file.js',

    pageObjectPage: "./support/pages/pageObject.js",
  },
  mocha: {
    "reporterOptions": {
      "reportDir": "output/index.html"
    }
  },
  name: 'mobile'
}