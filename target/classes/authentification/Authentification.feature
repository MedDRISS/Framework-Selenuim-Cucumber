@connexion
Feature: Orange - Authentification
  ETQ User je souhaite m'authentifier

  @cnx
  Scenario: Orange - Authentification
    Given Open application
    When Set Username
    And Set Password
    And Click button Login
    Then Show Page home
