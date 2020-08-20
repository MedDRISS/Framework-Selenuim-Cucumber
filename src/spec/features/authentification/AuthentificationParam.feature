@connexion3
Feature: Orange - Authentification
  ETQ User je souhaite m'authentifier

  @cnx3
  Scenario: Orange - Authentification
    Given Open application
    When Set name "Admin "
    And Set Pwd "admin123"
    And Click button Login
    Then Show Page home

    
