package com.orange.e2eTests.stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orange.e2eTests.pageObject.AuthentificationPage;
import com.orange.e2eTests.util.Common;
import com.orange.e2eTests.util.Setup;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationStepDefinition extends Common {
	
	public WebDriver driver;
	private AuthentificationPage authentificationpage= new AuthentificationPage();
	public AuthentificationStepDefinition() 
	{
		driver=Setup.driver;
	}
	
	@Given("^Open application$")
	public void openApplication() throws Throwable {
		logger.info("open application orange");
		String url="https://opensource-demo.orangehrmlive.com/";
		driver.get(url);
	    
	}

	@When("^Set Username$")
	public void setUsername() throws Throwable {
		logger.info("set user name");
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationpage.setUserName();
	}

	@And("^Set Password$")
	public void setPassword() throws Throwable {
		logger.info("set password");
		authentificationpage.setPassword();
	}

	@And("^Click button Login$")
	public void clickButtonLogin() throws Throwable {
		logger.info("click Button Login");
		authentificationpage.clickButtonLogin();
	}

	@Then("^Show Page home$")
	public void showPageHome() throws Throwable {
		
		String wlc=AuthentificationPage.welcome.getText();
		Assert.assertTrue(wlc.contains("Welcome"));
	 
	}


}
