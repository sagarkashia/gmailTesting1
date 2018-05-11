Feature: Gmail Testing
Scenario: Gmail Login
Given url opened
Then I verify gmail get opened with text "Sign in"
When I enter the email address "xprotesting@gmail.com" and click next button
Then enter password 
And click login
When I click on the google "google" email
Then I verify message "New device signed in to"
Scenario: Close The Gmail Id
Then Close browser
