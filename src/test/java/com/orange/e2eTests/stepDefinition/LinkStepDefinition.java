package com.orange.e2eTests.stepDefinition;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.orange.e2eTests.pageObject.AuthentificationPage;
import com.orange.e2eTests.pageObject.LinkPage;
import com.orange.e2eTests.util.Setup;


import cucumber.api.java.en.When;

public class LinkStepDefinition {
	
	public WebDriver driver;
	private LinkPage linkPage= new LinkPage();
	
	public LinkStepDefinition()
	{
		driver=Setup.driver;
	}
	
	
	
	@When("^Click on Admin Link$")
	public void clickOnAdminLink() throws Throwable {
		PageFactory.initElements(driver, LinkPage.class);
		PageFactory.initElements(driver, AuthentificationPage.class);
		linkPage.clickAdminLink();
	    
	}

	@When("^Click on Dashbord Link$")
	public void clickOnDashbordLink() throws Throwable {
	         linkPage.clickDashbord();
	}
}
