package gmail.login.GmailTesting;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		plugin = {
				"pretty",
	            "json:target/cucumber-report.json",
	            "html:target/cucumber-report.html",
	            "junit:target/cucumber-report.xml"
	       },
        features="src/test/java/GmailTest.feature",
        glue = "gmail.login.GmailTesting"
        )
public class RunnerClass {

}