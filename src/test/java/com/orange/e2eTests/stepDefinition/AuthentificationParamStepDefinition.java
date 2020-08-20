package com.orange.e2eTests.stepDefinition;

import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orange.e2eTests.pageObject.AuthentificationPage;
import com.orange.e2eTests.pageObject.AuthentificationParamPage;
import com.orange.e2eTests.util.Setup;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class AuthentificationParamStepDefinition {
	
	public WebDriver driver;
	private AuthentificationParamPage authentificationparampage= new AuthentificationParamPage();
	public AuthentificationParamStepDefinition() 
	{
		driver=Setup.driver;
	}


	@When("^Set name \"([^\"]*)\"$")
	public void setName(String name) throws Throwable {
		PageFactory.initElements(driver, AuthentificationParamPage.class);
		PageFactory.initElements(driver, AuthentificationPage.class);
		authentificationparampage.setUserName(name);}

	@When("^Set Pwd \"([^\"]*)\"$")
	public void setPwd(String passeword) throws Throwable {
		authentificationparampage.setPassword(passeword);
	}

	

}
