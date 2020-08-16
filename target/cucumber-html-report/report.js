$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("patientExemple/Patient.feature");
formatter.feature({
  "line": 2,
  "name": "Patient - FullName",
  "description": "ETQ User je souhaite de remplir le nom du patient",
  "id": "patient---fullname",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@connexion2"
    }
  ]
});
formatter.before({
  "duration": 22981655896,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Patient - FullName",
  "description": "",
  "id": "patient---fullname;patient---fullname",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@cnx2"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "Open patient application",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "Set FirstName",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "Set LastName",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Click button Submit",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Show an error message",
  "keyword": "Then "
});
formatter.match({
  "location": "PatientStepDefinition.openPatientApplication()"
});
formatter.result({
  "duration": 6303666767,
  "status": "passed"
});
formatter.match({
  "location": "PatientStepDefinition.setFirstName()"
});
formatter.result({
  "duration": 1231150074,
  "status": "passed"
});
formatter.match({
  "location": "PatientStepDefinition.setLastName()"
});
formatter.result({
  "duration": 835078607,
  "status": "passed"
});
formatter.match({
  "location": "PatientStepDefinition.clickButtonSubmit()"
});
formatter.result({
  "duration": 324908767,
  "status": "passed"
});
formatter.match({
  "location": "PatientStepDefinition.showAnErrorMessage()"
});
formatter.result({
  "duration": 409783351,
  "status": "passed"
});
formatter.after({
  "duration": 3437387787,
  "status": "passed"
});
});