package stepDefs;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefinition {

	WebDriver driver;
	
	@Given("User launch chrome browser")
	public void user_launch_chrome_browser() {
	 WebDriverManager.chromedriver().setup();
	 driver = new ChromeDriver();
	 driver.manage().window().maximize();
	 driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	}

	@When("user open {string}")
	public void user_open(String string) {
	 driver.get(string);  
	}

	@When("user enter email as {string} and password as {string}")
	public void user_enter_email_as_and_password_as(String string, String string2) {
	  driver.findElement(By.id("Email")).clear();
	  driver.findElement(By.id("Email")).sendKeys("admin@yourstore.com");
	  driver.findElement(By.id("Password")).clear();
	  driver.findElement(By.id("Password")).sendKeys("admin");
	}

	@When("user click on Login")
	public void user_click_on_Login() {
	 driver.findElement(By.xpath("//button[text()='Log in']")).click(); 
	}

	@Then("page title should be {string}")
	public void page_title_should_be(String string) {
	  Assert.assertTrue(driver.getTitle().equalsIgnoreCase("Dashboard / nopCommerce administration"));
	}

	@When("user click on Logout link")
	public void user_click_on_Logout_link() {
	    driver.findElement(By.xpath("//a[text()='Logout']")).click();
	}
	
	@Then("the page title should be {string}")
	public void the_page_title_should_be(String string) {
	  Assert.assertTrue(driver.getTitle().equalsIgnoreCase("Your store. Login"));
	}

	@Then("close the browser")
	public void close_the_browser() {
	  driver.close();
	}
}
