// This file is used to convert the json format report from cucumber to html
// Just execute using: node htmlreport.js
var reporter = require('cucumber-html-reporter');
 
var options = {
        theme: 'bootstrap',
        jsonFile: 'report/cucumber_report.json',
        output: 'report/cucumber_report.html',
        brandTitle: 'My Report',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"1.0.0",
            "Test Environment": "STAGING",
            "Browser": "Chrome  69.0.3497.100",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };
 
    reporter.generate(options);