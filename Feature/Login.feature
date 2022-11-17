Feature: Login Functionality

@Sanity
Scenario: Validate Login and Logout functionality with alid user credentials

Given User launch chrome browser
When user open "https://admin-demo.nopcommerce.com/admin/"
And user enter email as "admin@yourstore.com" and password as "admin"
And user click on Login
Then page title should be "Dashboard / nopCommerce administration"
When user click on Logout link
Then the page title should be "Your store. Login"
And close the browser

@Smoke
Scenario Outline: Validate Login and Logout functionality with alid user credentials

Given User launch chrome browser
When user open "https://admin-demo.nopcommerce.com/admin/"
And user enter email as "<email>" and password as "<password>"
And user click on Login
Then page title should be "Dashboard / nopCommerce administration"
When user click on Logout link
Then the page title should be "Your store. Login"
And close the browser

Examples:
|email|password|
|admin@yourstore.com|admin|
|admin123@yourstore.com|admin123|