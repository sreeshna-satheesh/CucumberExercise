package stepDefsPOM;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
/*import org.openqa.selenium.WebDriver;*/
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.testng.Assert;

import cucumber.api.java.Before;
import cucumber.api.java.BeforeStep;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import pages.Login;
import stepDefs.BaseTest;

public class StepDefsPOM extends BaseTest {
	// public WebDriver driver;
	// Login lp;

	@Before // execution before anything

	public void setup() throws Exception {

		log = Logger.getLogger("NOP Comm Login");

		PropertyConfigurator.configure(".\\testData\\log4j.properties");

		// Load Properties file

		prop = new Properties();

		FileInputStream fis = new FileInputStream(".\\testData\\Config.properties");

		prop.load(fis);

		String browser = prop.getProperty("broswer");

		log.info("Execution on browser: " + browser);

		if (browser.equalsIgnoreCase("chrome")) {

			WebDriverManager.chromedriver().setup();

			driver = new ChromeDriver();

		}

		else if (browser.equalsIgnoreCase("edge")) {

			WebDriverManager.edgedriver().setup();

			driver = new EdgeDriver();

		}

		else {

			WebDriverManager.chromedriver().setup();

			driver = new ChromeDriver();

		}

	}

	@BeforeStep

	public void executeBeforeEachSteps() {

		log.info("=================executeBeforeEachSteps=========================");

	}

	@Given("User launch chrome browser")
	public void user_launch_chrome_browser() {
		/*WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();*/
		driver.manage().window().maximize();
		log.info("max browser");
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		lp = new Login(driver);
	}

	@When("user open {string}")
	public void user_open(String app_url_QA) {
		log.info("launch app : " + app_url_QA);
		driver.get(app_url_QA);
	}

	@When("user enter email as {string} and password as {string}")
	public void user_enter_email_as_and_password_as(String email, String password) {
		/*
		 * lp.enterEmail(email); lp.enterPassword(password);
		 */
		log.info("enter email: " + email);

		lp.enterEmail(email);

		log.info("enter pass: " + password);

		lp.enterPassword(password);
	}

	@When("user click on Login")
	public void user_click_on_Login() {
		log.info("click on Login Button");
		lp.clickLogin();
	}

	@Then("page title should be {string}")
	public void page_title_should_be(String appTitle) {
		log.info("Application Title: " + appTitle);
		Assert.assertTrue(driver.getTitle().equalsIgnoreCase("Dashboard / nopCommerce administration"));
	}

	@When("user click on Logout link")
	public void user_click_on_Logout_link() {
		log.info("click on Login Button");
		lp.clickLogout();
	}

	@Then("the page title should be {string}")
	public void the_page_title_should_be(String string) {
		Assert.assertTrue(driver.getTitle().equalsIgnoreCase("Your store. Login"));
	}

	@Then("close the browser")
	public void close_the_browser() {
		log.info("close Application");
		driver.close();
	}
}
