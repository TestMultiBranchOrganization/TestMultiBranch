// Karma configuration
// Generated on Tue May 15 2018 10:50:36 GMT+0300 (GTB Daylight Time)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['qunit'],

    plugins: [
      'karma-chrome-launcher',
      'karma-coverage',
      'karma-qunit',
      'karma-junit-reporter',
      'karma-sonarqube-unit-reporter'
    ],

    // list of files / patterns to load in the browser
    files: [
      'src/js/Calculator.js',
      'TESTS/js/CalculatorQunitTEST.js'
    ],


    // list of files / patterns to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/js/Calculator.js':['coverage'],
      'TESTS/js/CalculatorQunitTEST.js':['coverage']
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reportery
    reporters: ['progress','sonarqubeUnit','coverage'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration modey

    // if true, Karma captures browsers, runs the tests and exits
    singleRun: true,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity,


  sonarQubeUnitReporter: {
     sonarQubeVersion: 'LATEST',
     outputFile: 'reports/sonar/TESTS-qunit.xml',
     suite: 'TESTS/js',
     useBrowserName: false
    },
    coverageReporter: {
        type: 'lcov',
        dir: 'reports',
        subdir: './coverage'
    },
  })
}