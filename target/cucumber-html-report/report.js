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
  "duration": 19413382367,
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
  "duration": 4093573405,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.setUsername()"
});
formatter.result({
  "duration": 581614836,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.setPassword()"
});
formatter.result({
  "duration": 545387541,
  "status": "passed"
});
formatter.match({
  "location": "AuthentificationStepDefinition.clickButtonLogin()"
});
formatter.result({
  "duration": 6864471259,
  "status": "passed"
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
  "duration": 289624854,
  "status": "passed"
});
formatter.after({
  "duration": 4261396801,
  "status": "passed"
});
});