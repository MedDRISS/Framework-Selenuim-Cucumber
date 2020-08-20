package com.orange.e2eTests.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class AuthentificationParamPage {
	
	/*Locatorw*/
	final static String USER_NAME_ID="txtUsername";
	final static String PASSEWORD_ID="txtPassword";
	
	
/*@FindBy*/
	//driver.findElement(by.id()).click;
	
	@FindBy(how=How.ID, using= USER_NAME_ID)
	public static WebElement userName;
	@FindBy(how=How.ID, using= PASSEWORD_ID)
	public static WebElement userPasseword;
	
	
	/*Methodes*/
	
	public void setUserName(String name) 
	{
		userName.sendKeys(name);
	}
	public void setPassword(String passeword) 
	{
		userPasseword.sendKeys(passeword);
	}
	
	
	
	

}
