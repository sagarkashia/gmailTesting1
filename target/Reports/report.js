$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/demo.feature");
formatter.feature({
  "line": 1,
  "name": "Gmail Testing",
  "description": "",
  "id": "gmail-testing",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Gmail Login",
  "description": "",
  "id": "gmail-testing;gmail-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "url opened",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "I verify gmail get opened with text \"Sign in\"",
  "keyword": "Then "
});
formatter.step({
  "line": 5,
  "name": "I enter the email address \"xprotesting@gmail.com\" and click next button",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter password",
  "keyword": "Then "
});
formatter.step({
  "line": 7,
  "name": "click login",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on the google \"google\" email",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "I verify message \"New device signed in to\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.url_opened()"
});
formatter.result({
  "duration": 11718352188,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 37
    }
  ],
  "location": "stepDefinition.i_verify_gmail_get_opened_with_text_something(String)"
});
formatter.result({
  "duration": 13070804,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xprotesting@gmail.com",
      "offset": 27
    }
  ],
  "location": "stepDefinition.i_enter_the_email_address_something_and_click_next_button(String)"
});
formatter.result({
  "duration": 3985963121,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.enter_password()"
});
formatter.result({
  "duration": 313822975,
  "status": "passed"
});
formatter.match({
  "location": "stepDefinition.click_login()"
});
formatter.result({
  "duration": 6303986102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "google",
      "offset": 23
    }
  ],
  "location": "stepDefinition.i_click_on_the_google_something_email(String)"
});
formatter.result({
  "duration": 15094555722,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "New device signed in to",
      "offset": 18
    }
  ],
  "location": "stepDefinition.i_verify_message_something(String)"
});
formatter.result({
  "duration": 5050727805,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Gmail Close",
  "description": "",
  "id": "gmail-testing;gmail-close",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "Close browser",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefinition.close_browser()"
});
formatter.result({
  "duration": 2153599758,
  "status": "passed"
});
});