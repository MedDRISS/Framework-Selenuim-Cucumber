package com.orange.e2eTests.pageObject;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class LinkPage {

	/*Locatorw*/
	final static String ADMIN_ID="menu_admin_viewAdminModule";
	final static String DASHBORD_ID="menu_dashboard_index";
	
	
/*@FindBy*/
	//driver.findElement(by.id()).click;
	
	@FindBy(how=How.ID, using= ADMIN_ID)
	public static WebElement adminLink;
	@FindBy(how=How.ID, using= DASHBORD_ID)
	public static WebElement dashbord;
	
	
	/*Methodes*/
	
	public void clickAdminLink() 
	{
		adminLink.click();
	}
	public void clickDashbord() 
	{
		dashbord.click();
	}
}
