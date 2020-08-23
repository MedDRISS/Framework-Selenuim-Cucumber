package com.orange.e2eTests;

import java.io.File;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import com.cucumber.listener.Reporter;
import com.orange.e2eTests.util.FileReaderManager;

import cucumber.api.junit.Cucumber;


import cucumber.api.SnippetType;
import cucumber.api.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		
		features = {"src/spec/features"}
		,
		//glue={""},
		plugin= {"pretty","html:target/cucumber-html-report","json:target/cucumber.json","com.cucumber.listener.ExtentCucumberFormatter:target/cucumber-reports/OrangeReport.html"},
		snippets = SnippetType.CAMELCASE,
		tags= {("@connexion")},

		monochrome = true
		)

public class TestRunner {

	@AfterClass
	/*public static void writeExtentReport() {
		
		Reporter.loadXMLConfig(new File("src/test/resources/configs/extent-config.xml"));
	}*/
	
	public static void writeExtentReport() {
		Reporter.loadXMLConfig(new File(FileReaderManager.getInstance().getReportConfigPath()));
	}
	
	
}


