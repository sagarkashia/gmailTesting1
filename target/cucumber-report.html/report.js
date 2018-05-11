$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/GmailTest.feature");
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
  "duration": 423467248,
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: C:\\SeleniumWebdrivers\\chromedriver_win32\\chromedriver.exe\r\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:518)\r\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:123)\r\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:118)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:32)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:137)\r\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:302)\r\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:88)\r\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:124)\r\n\tat gmail.login.GmailTesting.stepDefinition.url_opened(stepDefinition.java:23)\r\n\tat ✽.Given url opened(src/test/java/GmailTest.feature:3)\r\n",
  "status": "failed"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.enter_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "stepDefinition.click_login()"
});
formatter.result({
  "status": "skipped"
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
  "status": "skipped"
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
  "status": "skipped"
});
formatter.scenario({
  "line": 10,
  "name": "Close The Gmail Id",
  "description": "",
  "id": "gmail-testing;close-the-gmail-id",
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
  "duration": 309310,
  "error_message": "java.lang.NullPointerException\r\n\tat gmail.login.GmailTesting.stepDefinition.close_browser(stepDefinition.java:94)\r\n\tat ✽.Then Close browser(src/test/java/GmailTest.feature:11)\r\n",
  "status": "failed"
});
});