$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Feature/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validate Login and Logout functionality with alid user credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.step({
  "name": "user open \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.step({
  "name": "user enter email as \"\u003cemail\u003e\" and password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user click on Login",
  "keyword": "And "
});
formatter.step({
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user click on Logout link",
  "keyword": "When "
});
formatter.step({
  "name": "the page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ]
    },
    {
      "cells": [
        "admin@yourstore.com",
        "admin"
      ]
    },
    {
      "cells": [
        "admin123@yourstore.com",
        "admin123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validate Login and Logout functionality with alid user credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsPOM.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user open \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefsPOM.user_open(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"admin@yourstore.com\" and password as \"admin\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsPOM.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsPOM.user_click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsPOM.page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Logout link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefsPOM.user_click_on_Logout_link()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsPOM.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsPOM.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate Login and Logout functionality with alid user credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "User launch chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefsPOM.user_launch_chrome_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user open \"https://admin-demo.nopcommerce.com/admin/\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefsPOM.user_open(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user enter email as \"admin123@yourstore.com\" and password as \"admin123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsPOM.user_enter_email_as_and_password_as(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "user click on Login",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsPOM.user_click_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "page title should be \"Dashboard / nopCommerce administration\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsPOM.page_title_should_be(String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected [true] but found [false]\r\n\tat org.testng.Assert.fail(Assert.java:94)\r\n\tat org.testng.Assert.failNotEquals(Assert.java:513)\r\n\tat org.testng.Assert.assertTrue(Assert.java:42)\r\n\tat org.testng.Assert.assertTrue(Assert.java:52)\r\n\tat stepDefsPOM.StepDefsPOM.page_title_should_be(StepDefsPOM.java:120)\r\n\tat ✽.page title should be \"Dashboard / nopCommerce administration\"(file:Feature/Login.feature:22)\r\n",
  "status": "failed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "user click on Logout link",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefsPOM.user_click_on_Logout_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "the page title should be \"Your store. Login\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefsPOM.the_page_title_should_be(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefsPOM.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});