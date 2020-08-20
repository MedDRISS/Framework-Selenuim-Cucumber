@connexion
Feature: Orange - Authentification
  ETQ User je souhaite m'authentifier

  Background:
  
    Given Open application
    When Set Username
    And Set Password
    And Click button Login
    
    
    @cnx
     Scenario: Orange - Authentification
     Then Show Page home
    @link1
    Scenario: Click-link
    When Click on Admin Link
    
    @link2
    Scenario: Click-link
    When Click on Dashbord Link