package com.orange.e2eTests.stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orange.e2eTests.pageObject.AuthentificationOutlinePage;
import com.orange.e2eTests.pageObject.AuthentificationPage;
import com.orange.e2eTests.pageObject.AuthentificationParamPage;
import com.orange.e2eTests.util.Setup;

import cucumber.api.java.en.When;

public class AuthentificationOutlineStepDefinition {
	
	public WebDriver driver;
	private AuthentificationOutlinePage authentificationOutlinePage= new AuthentificationOutlinePage();
	
	public AuthentificationOutlineStepDefinition() {
		driver=Setup.driver;
	}


	@When("^Set Login \"([^\"]*)\"$")
	public void setLogin(String name) throws Throwable {
		PageFactory.initElements(driver, AuthentificationOutlinePage.class);
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationOutlinePage.setUserName(name);	
	}

	@When("^Set Pass \"([^\"]*)\"$")
	public void setPass(String passeword) throws Throwable {
		authentificationOutlinePage.setPassword(passeword);
	}

	

}
