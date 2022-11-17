package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Login {

	WebDriver driver;
	


	public Login (WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
	}
	
	@FindBy(id="Email")
	WebElement usernameField;
	
	@FindBy(id="Password")
	WebElement passwordField;
	
	@FindBy(tagName = "button")
	WebElement loginField;
	
	@FindBy(linkText="Logout")
	WebElement logoutField;
	
	

	public void enterEmail(String email) {
		usernameField.clear();
		usernameField.sendKeys(email);
	}
	
	public void enterPassword(String password) {
		passwordField.clear();
		passwordField.sendKeys(password);
	}
	
	public void clickLogin() {
		loginField.click();
	}
	
	public void clickLogout() {
		logoutField.click();
	}
}


