package gmail.login.GmailTesting;

import java.util.List;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class stepDefinition {
    
    public static WebDriver obj=null;
    
    @Given("^url opened$")
    public void url_opened() {
    	System.setProperty("webdriver.chrome.driver", "C:\\SeleniumWebdrivers\\chromedriver_win32\\chromedriver.exe");
		obj = new ChromeDriver();
        obj.manage().window().maximize();
        obj.get("https://mail.google.com");
    }
    @Then("^I verify gmail get opened with text \"([^\"]*)\"$")
    public void i_verify_gmail_get_opened_with_text_something(String strArg1) throws Throwable {
    	System.out.println("I Open the gmail Page");
    }
    @When("^I enter the email address \"([^\"]*)\" and click next button$")
    public void i_enter_the_email_address_something_and_click_next_button(String strArg1) throws Throwable {
        obj.findElement(By.id("identifierId")).sendKeys("pushpendracse1@gmail.com");
        obj.findElement(By.id("identifierNext")).click();
        Thread.sleep(2000);
    }
    
    @Then("^enter password$")
    public void enter_password()  {
        obj.findElement(By.name("password")).sendKeys("#l123456#");
    }

    @Then("^click login$")
    public void click_login() throws InterruptedException  {
        obj.findElement(By.id("passwordNext")).click();
        Thread.sleep(6000);
    }
    @When("^I click on the google \"([^\"]*)\" email$")
    public void i_click_on_the_google_something_email(String allEmails) throws Throwable {
    	Thread.sleep(5000);
		getAllEmailsText();
    }

    public void getAllEmailsText() throws Exception
	{
		Thread.sleep(10000);
		List<WebElement> list = obj.findElements(By.id("allEmails"));
		
		for(int i=0; i<list.size(); i++)
		{
			System.out.println(list.get(i).getText());
			if(list.get(i).getText().contains("google"))
			{
				list.get(i).click();
				
			}
		}
		
	}
    
    @Then("^I verify message \"([^\"]*)\"$")
    public void i_verify_message_something(String message) throws Throwable {
    	Thread.sleep(5000);
		boolean result = verifyErrorMessage(message);
		Assert.assertEquals(true, result);
    }
	
    public boolean verifyErrorMessage(String message)
	{
		boolean result = true;
		List<WebElement> list = obj.findElements(By.className(".m_-5682272728523708609v2sp"));
		for(int i=0; i<list.size(); i++)
		{
			if(list.get(i).getText().equals(message)){
				result = true;
				break;
			}
		}
		return result;
	}
	
	@Then("^Close browser$")
    public void close_browser() {
        obj.quit();
    }
}
