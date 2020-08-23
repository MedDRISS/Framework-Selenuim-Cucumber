$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("authentification/Authentification.feature");
formatter.feature({
  "line": 2,
  "name": "Orange - Authentification",
  "description": "ETQ User je souhaite m\u0027authentifier",
  "id": "orange---authentification",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion"
    }
  ]
});
formatter.before({
  "duration": 14937619048,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Set Username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Set Password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click button Login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.openApplication()"
});
formatter.result({
  "duration": 888836820,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.setUsername()"
});
formatter.result({
  "duration": 176234723,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"txtUsername\"}\n  (Session info: chrome\u003d84.0.4147.135)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 143 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027test-PC\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49450}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\test\\AppData\\Local\\Temp\\scoped_dir4268_1353123957}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.135, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: b36f6744807399f1eeff503aac00bf93\n*** Element info: {Using\u003did, value\u003dtxtUsername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.orange.e2eTests.pageObject.AuthentificationPage.setUserName(AuthentificationPage.java:48)\r\n\tat com.orange.e2eTests.stepDefinition.AuthentificationStepDefinition.setUsername(AuthentificationStepDefinition.java:37)\r\n\tat ✽.When Set Username(authentification/Authentification.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.setPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AuthentificationStepDefinition.clickButtonLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 14,
  "name": "Orange - Authentification",
  "description": "",
  "id": "orange---authentification;orange---authentification",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 13,
      "name": "@cnx"
    }
  ]
});
formatter.step({
  "line": 15,
  "name": "Show Page home",
  "keyword": "Then "
});
formatter.match({
  "location": "AuthentificationStepDefinition.showPageHome()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("current page url is data:,");
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 2845112410,
  "status": "passed"
});
formatter.before({
  "duration": 10284499436,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Set Username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Set Password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click button Login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.openApplication()"
});
formatter.result({
  "duration": 1305260,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.setUsername()"
});
formatter.result({
  "duration": 31965779,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"txtUsername\"}\n  (Session info: chrome\u003d84.0.4147.135)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 31 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027test-PC\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49465}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\test\\AppData\\Local\\Temp\\scoped_dir6472_398010493}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.135, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 9e3ac9e809a6c6264dd7b844b1f39cf4\n*** Element info: {Using\u003did, value\u003dtxtUsername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.orange.e2eTests.pageObject.AuthentificationPage.setUserName(AuthentificationPage.java:48)\r\n\tat com.orange.e2eTests.stepDefinition.AuthentificationStepDefinition.setUsername(AuthentificationStepDefinition.java:37)\r\n\tat ✽.When Set Username(authentification/Authentification.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.setPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AuthentificationStepDefinition.clickButtonLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 17,
  "name": "Click-link",
  "description": "",
  "id": "orange---authentification;click-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@link1"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Click on Admin Link",
  "keyword": "When "
});
formatter.match({
  "location": "LinkStepDefinition.clickOnAdminLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("current page url is data:,");
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 1861007529,
  "status": "passed"
});
formatter.before({
  "duration": 9708483573,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "Open application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Set Username",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Set Password",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click button Login",
  "keyword": "And "
});
formatter.match({
  "location": "AuthentificationStepDefinition.openApplication()"
});
formatter.result({
  "duration": 431665,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.setUsername()"
});
formatter.result({
  "duration": 32876330,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"id\",\"selector\":\"txtUsername\"}\n  (Session info: chrome\u003d84.0.4147.135)\n  (Driver info: chromedriver\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}),platform\u003dWindows NT 6.1.7601 SP1 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 32 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.47.1\u0027, revision: \u0027unknown\u0027, time: \u00272015-07-30 11:02:44\u0027\nSystem info: host: \u0027test-PC\u0027, ip: \u0027192.168.1.4\u0027, os.name: \u0027Windows 7\u0027, os.arch: \u0027amd64\u0027, os.version: \u00276.1\u0027, java.version: \u00271.8.0_261\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities [{mobileEmulationEnabled\u003dfalse, timeouts\u003d{implicit\u003d0, pageLoad\u003d300000, script\u003d30000}, hasTouchScreen\u003dfalse, platform\u003dXP, acceptSslCerts\u003dfalse, goog:chromeOptions\u003d{debuggerAddress\u003dlocalhost:49480}, acceptInsecureCerts\u003dfalse, webStorageEnabled\u003dtrue, browserName\u003dchrome, takesScreenshot\u003dtrue, javascriptEnabled\u003dtrue, setWindowRect\u003dtrue, unexpectedAlertBehaviour\u003dignore, applicationCacheEnabled\u003dfalse, rotatable\u003dfalse, networkConnectionEnabled\u003dfalse, chrome\u003d{chromedriverVersion\u003d83.0.4103.39 (ccbf011cb2d2b19b506d844400483861342c20cd-refs/branch-heads/4103@{#416}), userDataDir\u003dC:\\Users\\test\\AppData\\Local\\Temp\\scoped_dir6824_703292277}, takesHeapSnapshot\u003dtrue, pageLoadStrategy\u003dnormal, strictFileInteractability\u003dfalse, databaseEnabled\u003dfalse, handlesAlerts\u003dtrue, version\u003d84.0.4147.135, browserConnectionEnabled\u003dfalse, proxy\u003d{}, nativeEvents\u003dtrue, locationContextEnabled\u003dtrue, cssSelectorsEnabled\u003dtrue, webauthn:virtualAuthenticators\u003dtrue}]\nSession ID: 89d1d8c7a7fbc30408af08fd1945033e\n*** Element info: {Using\u003did, value\u003dtxtUsername}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:206)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:158)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:595)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:348)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:389)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:215)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:340)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy17.sendKeys(Unknown Source)\r\n\tat com.orange.e2eTests.pageObject.AuthentificationPage.setUserName(AuthentificationPage.java:48)\r\n\tat com.orange.e2eTests.stepDefinition.AuthentificationStepDefinition.setUsername(AuthentificationStepDefinition.java:37)\r\n\tat ✽.When Set Username(authentification/Authentification.feature:8)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.setPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "AuthentificationStepDefinition.clickButtonLogin()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 21,
  "name": "Click-link",
  "description": "",
  "id": "orange---authentification;click-link",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 20,
      "name": "@link2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "Click on Dashbord Link",
  "keyword": "When "
});
formatter.match({
  "location": "LinkStepDefinition.clickOnDashbordLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("current page url is data:,");
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 1963353660,
  "status": "passed"
});
});