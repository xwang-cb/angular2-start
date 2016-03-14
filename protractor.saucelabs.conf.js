'use strict';

var pkg = require('./package.json'),
    buildNo =  process.env.TRAVIS_JOB_NUMBER || process.env.CIRCLE_BUILD_NUM,
    tunnelId = process.env.TRAVIS_JOB_NUMBER || undefined;

exports.config = {

  // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
  // The tests will be run remotely using SauceLabs.
  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  directConnect: false,

  // The timeout for each script run on the browser. This should be longer
  // than the maximum time your application needs to stabilize between tasks.
  allScriptsTimeout: 60000,

  // How long to wait for a page to load.
  getPageTimeout: 60000,

  // ----- What tests to run -----
  //
  // Spec patterns are relative to the location of this config.
  specs: [
    'src/**/**.e2e.ts',
    'src/**/*.e2e.ts'
  ],

  // Saucelabs capabilities reference
  // https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
  multiCapabilities: [
    {
      'browserName': 'firefox',
      'tunnel-identifier': tunnelId,
      'build': buildNo,
      'name':  pkg.name + ' (Firefox 44: Linux) Build: ' + buildNo,
      'version': '44.0',
      'platform': 'Linux'
    },
    {
      'browserName': 'chrome',
      'tunnel-identifier': tunnelId,
      'build': buildNo,
      'name':  pkg.name + ' (Chrome 48: Linux) Build: ' + buildNo,
      'version': '48.0',
      'platform': 'Linux'
    },
    // {
    //   'browserName': 'MicrosoftEdge',
    //   'tunnel-identifier': tunnelId, 
    //   'build': buildNo,
    //   'name':  pkg.name + ' (MSEdge 20: Windows 10) Build: ' + buildNo,
    //   'version': '20.10240',
    //   'platform': 'Windows 10'
    // },
    {
      'browserName': 'internet explorer',
      'tunnel-identifier': tunnelId,
      'build': buildNo,
      'name':  pkg.name + ' (IE11: Windows 10) Build: ' + buildNo,
      'version': '11.0',
      'platform': 'Windows 10'
    },
    {
      'browserName': 'internet explorer',
      'tunnel-identifier': tunnelId,
      'build': buildNo,
      'name':  pkg.name + ' (IE10: Windows 8) Build: ' + buildNo,
      'version': '10.0',
      'platform': 'Windows 8'
    },
    // {
    //   'browserName': 'internet explorer',
    //   'tunnel-identifier': tunnelId,   
    //   'build': buildNo,
    //   'name':  pkg.name + ' (IE9: Windows 7) Build: ' + buildNo,
    //   'version': '9.0',
    //   'platform': 'Windows 7'
    // },
    {
      'browserName': 'safari',
      'tunnel-identifier': tunnelId,
      'build': buildNo,
      'name':  pkg.name + ' (Safari: OS X 10.11) Build: ' + buildNo,
      'version': '9.0',
      'platform': 'OS X 10.11'
    }
  ],

  // ----- More information for your tests ----
  //
  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:3000/',

  // Selector for the element housing the angular app - this defaults to
  // body, but is necessary if ng-app is on a descendant of <body>
  rootElement: 'app',

  // ----- The test framework -----
  //
  // Jasmine is fully supported as a test and assertion framework.
  // Mocha has limited beta support. You will need to include your own
  // assertion framework if working with mocha.
  framework: 'jasmine',

  // ----- Options to be passed to minijasminenode -----
  //
  // See the full list at https://github.com/juliemr/minijasminenode
  jasmineNodeOpts: {
    // onComplete will be called just before the driver quits.
    onComplete: null,
    // If true, display spec names.
    isVerbose: true,
    // If true, print colors to the terminal.
    showColors: true,
    // If true, include stack traces in failures.
    includeStackTrace: true,
    // Default time to wait in ms before a test fails.
    defaultTimeoutInterval: 300000
  },

  /**
   * Angular 2 configuration
   *
   * useAllAngular2AppRoots: tells Protractor to wait for any angular2 apps on the page instead of just the one matching
   * `rootEl`
   *
   */
   useAllAngular2AppRoots: true

};