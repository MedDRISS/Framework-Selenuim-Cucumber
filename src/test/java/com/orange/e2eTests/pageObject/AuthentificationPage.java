package com.orange.e2eTests.pageObject;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import com.orange.e2eTests.util.FileReaderManager;

public class AuthentificationPage {
	
	WebDriver driver;
	public AuthentificationPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		
	}
	
	public void navigate () {
		FileReaderManager fileReaderMan = new FileReaderManager();
		driver.get(FileReaderManager.getInstance().getApplicationUrl());
		System.out.println("test url"+FileReaderManager.getInstance().getApplicationUrl());
		}
	
	/*Locatorw*/
	final static String USER_NAME_ID="txtUsername";
	final static String PASSEWORD_ID="txtPassword";
	final static String BUTTON_LOGIN_ID="btnLogin";
	final static String WELCOME_ID="welcome";
	
/*@FindBy*/
	//driver.findElement(by.id()).click;
	
	@FindBy(how=How.ID, using= USER_NAME_ID)
	public static WebElement userName;
	@FindBy(how=How.ID, using= PASSEWORD_ID)
	public static WebElement userPasseword;
	@FindBy(how=How.ID, using= BUTTON_LOGIN_ID)
	public static WebElement buttonLogin;
	@FindBy(how=How.ID, using= WELCOME_ID)
	public static WebElement welcome;
	
	/*Methodes*/
	
	public void setUserName() 
	{
		userName.sendKeys("Admin");
	}
	public void setPassword() 
	{
		userPasseword.sendKeys("admin123");
	}
	
	public void clickButtonLogin() 
	{
		buttonLogin.click();
	}
	
	

}
